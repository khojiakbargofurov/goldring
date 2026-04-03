import React, { useState } from 'react';

export default function ExplorerView({ locations, loading }) {
  const [selectedLoc, setSelectedLoc] = useState(null);

  if (loading) return <main className="glass" style={{ gridColumn: '2 / 4', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3>Loading Destinations...</h3></main>;

  if (selectedLoc) {
    return (
      <main className="glass" style={{ gridColumn: '2 / 4', padding: '32px', overflowY: 'auto', position: 'relative' }}>
         <button 
           onClick={() => setSelectedLoc(null)} 
           style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}
         >
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
           Back
         </button>
         
         <div style={{ backgroundImage: `url(${selectedLoc.image})`, height: '320px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }}></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                <span style={{ padding: '6px 12px', background: '#f59e0b', color: '#0f172a', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedLoc.category_name}</span>
            </div>
         </div>
         
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '12px', color: '#f8fafc', letterSpacing: '-0.5px' }}>{selectedLoc.name}</h2>
               <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                   <span style={{ color: '#f59e0b', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                     {selectedLoc.rating} / 5.0
                   </span>
                   <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>📍 Tashkent Region, Uzbekistan</span>
               </div>
            </div>
            <button style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid #f59e0b', padding: '14px 32px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {selectedLoc.action_text} Experience
            </button>
         </div>

         <div className="card glass" style={{ padding: '32px', borderRadius: '16px', cursor: 'default', margin: 0 }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
               About {selectedLoc.name}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8' }}>{selectedLoc.description}</p>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8', marginTop: '16px' }}>
              Located in the scenic Golden Ring of the Tashkent region, this destination offers a spectacular experience blending natural beauty with rich local heritage. Whether you're looking for an active adventure or a peaceful retreat, {selectedLoc.name} provides an unforgettable journey. Ideal for families, solo travelers, and cultural explorers alike.
            </p>
         </div>
      </main>
    );
  }
  
  return (
    <main className="glass" style={{ gridColumn: '2 / 4', padding: '32px', overflowY: 'auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Explorer</h2>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Discover beautiful destinations across the Golden Ring of Tashkent.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {locations.map(loc => (
          <div key={loc.id} onClick={() => setSelectedLoc(loc)} className="card glass" style={{ flexDirection: 'column', alignItems: 'stretch', padding: 0, overflow: 'hidden', cursor: 'pointer', margin: 0 }}>
             <div style={{ backgroundImage: `url(${loc.image})`, height: '180px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
             <div style={{ padding: '20px' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{loc.name}</h4>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                 <p style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 500 }}>{loc.category_name}</p>
                 <p style={{color: '#f59e0b', fontSize: '0.85rem'}}>★ {loc.rating}</p>
               </div>
               <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{loc.description}</p>
               <button style={{ marginTop: '16px', background: '#f59e0b', color: '#0f172a', border: 'none', padding: '10px 16px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', width: '100%', pointerEvents: 'none' }}>{loc.action_text} Now</button>
             </div>
          </div>
        ))}
      </div>
    </main>
  );
}
