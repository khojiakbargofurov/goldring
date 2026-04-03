const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tourism.db');

db.serialize(() => {
    // 1. Create Tables
    db.run(`CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS locations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        category_id INTEGER,
        rating REAL,
        image TEXT,
        lat REAL,
        lng REAL,
        description TEXT,
        action_text TEXT,
        FOREIGN KEY(category_id) REFERENCES categories(id)
    )`);

    // 2. Insert Categories
    const categories = ['Eco-Tourism Adventures', 'Heritage & Culture', 'Gastronomy'];
    const stmtCat = db.prepare('INSERT OR IGNORE INTO categories (name) VALUES (?)');
    categories.forEach(c => stmtCat.run(c));
    stmtCat.finalize();

    // 3. Insert Locations (Golden Ring data)
    const locations = [
       {name: "Trek the Chimgan Trail", cat: 1, rating: 4.8, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop", lat: 41.602, lng: 70.038, desc: "Breathtaking mountain trails.", action: "Book"},
       {name: "Horse Riding in Gulkam", cat: 1, rating: 4.9, image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop", lat: 41.61, lng: 70.05, desc: "Explore canyons on horseback.", action: "Book"},
       {name: "Amirsoy Mountain Resort", cat: 1, rating: 4.9, image: "https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=400&auto=format&fit=crop", lat: 41.565, lng: 69.974, desc: "Modern ski resort.", action: "Book"},
       {name: "Charvak Reservoir", cat: 1, rating: 4.7, image: "https://images.unsplash.com/photo-1605809748897-400d36630a91?q=80&w=400&auto=format&fit=crop", lat: 41.630, lng: 70.045, desc: "Beautiful blue waters.", action: "Explore"},

       {name: "Kukeldash Madrasah", cat: 2, rating: 4.6, image: "https://images.unsplash.com/photo-1548658866-993d6d061989?q=80&w=400&auto=format&fit=crop", lat: 41.323, lng: 69.234, desc: "Historic Islamic school in Chorsu.", action: "View"},
       {name: "Zangiota Complex", cat: 2, rating: 4.8, image: "https://images.unsplash.com/photo-1563825838-8e6f1f4b7527?q=80&w=400&auto=format&fit=crop", lat: 41.196, lng: 69.155, desc: "Pilgrimage shrine.", action: "View"},
       {name: "Ceramic Workshop", cat: 2, rating: 4.9, image: "https://images.unsplash.com/photo-1589255850937-299fde2397dd?q=80&w=400&auto=format&fit=crop", lat: 41.300, lng: 69.250, desc: "Traditional pottery making.", action: "View"},

       {name: "Parkent Vineyards", cat: 3, rating: 4.7, image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=400&auto=format&fit=crop", lat: 41.312, lng: 69.754, desc: "Wine tasting in the hills.", action: "Taste"},
       {name: "Chorsu Bazaar Food", cat: 3, rating: 4.9, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop", lat: 41.327, lng: 69.235, desc: "Plov and street food.", action: "Eat"}
    ];

    const stmtLoc = db.prepare('INSERT INTO locations (name, category_id, rating, image, lat, lng, description, action_text) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    locations.forEach(loc => {
        stmtLoc.run(loc.name, loc.cat, loc.rating, loc.image, loc.lat, loc.lng, loc.desc, loc.action);
    });
    stmtLoc.finalize();
});

db.close(() => {
    console.log("Database 'tourism.db' seeded successfully! 🚀");
});
