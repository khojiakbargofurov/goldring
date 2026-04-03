import React from 'react';

export default function NotFoundView() {
  return (
    <main className="glass" style={{ gridColumn: '2 / 4', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '8rem', color: '#f59e0b', margin: 0, letterSpacing: '-4px', textShadow: '0 4px 20px rgba(245, 158, 11, 0.4)' }}>404</h1>
      <h2 style={{ fontSize: '2.5rem', color: '#f8fafc', marginBottom: '16px' }}>Lost in the Mountains?</h2>
      <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '500px', marginBottom: '32px', lineHeight: 1.6 }}>
        We couldn't find the destination you're looking for. It might be off the map or the link is broken.
      </p>
      
      <button onClick={() => window.location.href = '/'} style={{ background: '#f59e0b', color: '#0f172a', border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        Return to Dashboard
      </button>
    </main>
  );
}
