import React, { useEffect, useState, useMemo, Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';

// Lazy loading views to dramatically reduce initial bundle size and make the app faster
const DashboardView = lazy(() => import('./components/DashboardView'));
const ExplorerView = lazy(() => import('./components/ExplorerView'));
const VirtualView = lazy(() => import('./components/VirtualView'));
const AuthorsView = lazy(() => import('./components/AuthorsView'));
const NotFoundView = lazy(() => import('./components/NotFoundView'));

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine active API URL based on Vercel Node Environment
    const apiUrl = import.meta.env.PROD 
      ? '/api/locations.json' 
      : 'http://localhost:5001/api/locations';

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLocations(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  // Memoizing object creation so it only recalculates when API fetch completes, preventing lag on tab switches
  const categories = useMemo(() => {
    return locations.reduce((acc, loc) => {
      if (!acc[loc.category_name]) acc[loc.category_name] = [];
      acc[loc.category_name].push(loc);
      return acc;
    }, {});
  }, [locations]);

  return (
    <div className="dashboard glass">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Suspense fallback={<div style={{ gridColumn: '2/4', margin: 'auto', color: '#94a3b8' }}>Loading Module...</div>}>
        {activeTab === 'Dashboard' && <DashboardView locations={locations} categories={categories} loading={loading} />}
        {activeTab === 'Explorer' && <ExplorerView locations={locations} loading={loading} />}
        {activeTab === 'VirtualView' && <VirtualView locations={locations} loading={loading} />}
        {activeTab === 'Authors' && <AuthorsView />}
        {activeTab === 'NotFound' && <NotFoundView />}
      </Suspense>
    </div>
  );
}

export default App;
