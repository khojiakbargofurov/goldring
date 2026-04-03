import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function DashboardView({ locations, categories, loading }) {
  const centerTashkent = [41.35, 69.5];
  
  return (
    <>
      <main className="map-area glass" style={{ padding: 0 }}>
        <header className="map-header" style={{ pointerEvents: 'none' }}>
          <h2>Tashkent Region</h2>
          <div className="map-actions" style={{ pointerEvents: 'auto' }}>
            <button className="glass" style={{ padding: '8px 16px', color: '#fff', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
              3D View
            </button>
          </div>
        </header>
        
        <div style={{ flex: 1, width: '100%', height: '100%', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', overflow: 'hidden' }}>
          <MapContainer center={centerTashkent} zoom={9} style={{ height: '100%', width: '100%', zIndex: 1 }} zoomControl={false}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; CARTO'
            />
            {locations.map(loc => (
              <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
                <Popup>
                    <div style={{ padding: '4px' }}>
                       <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#1e293b' }}>{loc.name}</h3>
                       <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#64748b' }}>{loc.category_name}</p>
                       <img src={loc.image} alt={loc.name} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                    </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>

      <aside className="widgets-panel">
        {loading ? (
          <p style={{textAlign: 'center', margin: 'auto', color: '#94a3b8'}}>Loading Database...</p>
        ) : (
          Object.keys(categories).map(categoryName => (
            <div key={categoryName} className="widget glass" style={{marginBottom: '20px'}}>
              <h3 className="widget-title">{categoryName}</h3>
              {categories[categoryName].map(loc => (
                <div key={loc.id} className="card">
                  <div className="card-img" style={{ backgroundImage: `url(${loc.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="card-info">
                    <h4>{loc.name}</h4>
                    <p style={{color: '#f59e0b', letterSpacing: '1px', fontSize: '11px'}}>{"★".repeat(Math.round(loc.rating))}{"☆".repeat(5-Math.round(loc.rating))} {loc.rating}</p>
                  </div>
                  <div className="card-action">{loc.action_text} <span style={{marginLeft: '2px'}}>›</span></div>
                </div>
              ))}
            </div>
          ))
        )}
      </aside>
    </>
  );
}
