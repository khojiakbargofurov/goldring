import React from 'react';

export default function AuthorsView() {
  const authors = [
    { name: "Gafurova Gulsevar", role: "Student", image: "https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_incoming&w=740&q=80" },
    { name: "Kimdir", role: "Student", bio: "Data engineer working deep with PostgreSQL to create robust mountain route structures.", image: "https://thumbs.dreamstime.com/b/generated-image-372601986.jpg" }
  ];

  return (
    <main className="glass" style={{ gridColumn: '2 / 4', padding: '32px', overflowY: 'auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Platform Authors</h2>
      <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Meet the team behind the Golden Ring of Tashkent ecosystem.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
        {authors.map((author, idx) => (
          <div key={idx} className="card glass" style={{ flexDirection: 'column', alignItems: 'center', padding: '32px', textAlign: 'center', cursor: 'default', margin: 0 }}>
            <img src={author.image} alt={author.name} style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px', border: '3px solid #f59e0b' }} />
            <h4 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '6px' }}>{author.name}</h4>
            <p style={{ fontSize: '0.9rem', color: '#f59e0b', marginBottom: '16px', fontWeight: 500 }}>{author.role}</p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>{author.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
