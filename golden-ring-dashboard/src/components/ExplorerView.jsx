import React from 'react';

export default function ExplorerView({ locations, loading }) {
  if (loading) return <main className="glass" style={{ gridColumn: '2 / 4', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3>Loading Destinations...</h3></main>;
  
  return (
    <main className="glass" style={{ gridColumn: '2 / 4', padding: '32px', overflowY: 'auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Explorer</h2>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Discover beautiful destinations across the Golden Ring of Tashkent.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {locations.map(loc => (
          <div key={loc.id} className="card glass" style={{ flexDirection: 'column', alignItems: 'stretch', padding: 0, overflow: 'hidden', cursor: 'pointer', margin: 0 }}>
             <div style={{ backgroundImage: `url(${loc.image})`, height: '180px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
             <div style={{ padding: '20px' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{loc.name}</h4>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                 <p style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 500 }}>{loc.category_name}</p>
                 <p style={{color: '#f59e0b', fontSize: '0.85rem'}}>★ {loc.rating}</p>
               </div>
               <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>{loc.description}</p>
               <button style={{ marginTop: '16px', background: '#f59e0b', color: '#0f172a', border: 'none', padding: '10px 16px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', width: '100%' }}>{loc.action_text} Now</button>
             </div>
          </div>
        ))}
      </div>
    </main>
  );
}
