import React, { useState, useEffect } from 'react';

export default function VirtualView({ locations, loading }) {
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    if (!selectedPlace && locations && locations.length > 0) {
       setSelectedPlace(locations[0]);
    }
  }, [locations, selectedPlace]);

  if (loading || !selectedPlace) return <main className="glass" style={{ gridColumn: '2 / 4', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3>Loading Viewer...</h3></main>;
  
  return (
    <main className="glass" style={{ gridColumn: '2 / 4', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
      {/* Immersive Selected View */}
      <div style={{ flex: 1, position: 'relative', width: '100%', backgroundImage: `url(${selectedPlace.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'all 0.4s ease' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,1) 0%, rgba(15,23,42,0.4) 50%, transparent 100%)' }} />
         
         <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
            <span style={{ background: '#f59e0b', color: '#0f172a', padding: '6px 14px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600 }}>360° Panorama Preview</span>
            <h2 style={{ fontSize: '3.5rem', color: '#fff', marginTop: '16px', letterSpacing: '-0.5px', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>{selectedPlace.name}</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '600px', margin: '16px 0', lineHeight: 1.5 }}>{selectedPlace.description}</p>
            <button style={{ marginTop: '24px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 28px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Enter 360° Tour
            </button>
         </div>
      </div>

      {/* Thumbnail Selector */}
      <div style={{ minHeight: '180px', background: 'rgba(15, 23, 42, 0.98)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', gap: '20px', overflowX: 'auto', alignItems: 'center' }}>
         {locations.map(loc => (
            <div 
               key={loc.id} 
               onClick={() => setSelectedPlace(loc)}
               style={{ 
                 minWidth: '240px', height: '130px', backgroundImage: `url(${loc.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px', cursor: 'pointer',
                 border: selectedPlace.id === loc.id ? '2px solid #f59e0b' : '2px solid transparent',
                 opacity: selectedPlace.id === loc.id ? 1 : 0.6,
                 transform: selectedPlace.id === loc.id ? 'scale(1.02)' : 'scale(1)',
                 transition: 'all 0.25s ease',
                 position: 'relative',
                 overflow: 'hidden'
               }}
            >
               <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 12px 10px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                 <p style={{ fontSize: '0.9rem', color: '#fff', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 500 }}>{loc.name}</p>
                 <p style={{ fontSize: '0.75rem', color: '#f59e0b', margin: '4px 0 0 0' }}>{loc.category_name}</p>
               </div>
            </div>
         ))}
      </div>
    </main>
  );
}
