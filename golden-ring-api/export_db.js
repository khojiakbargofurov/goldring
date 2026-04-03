const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'tourism.db'));

db.all(`SELECT locations.*, categories.name as category_name FROM locations JOIN categories ON locations.category_id = categories.id`, [], (err, rows) => {
    if (err) {
        console.error("Error exporting database:", err);
        return;
    }
    
    // Write JSON file directly into Vite's public folder so that Vercel serves it automatically on /api/locations.json
    const apiDir = path.join(__dirname, '../golden-ring-dashboard/public/api');
    if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(apiDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(apiDir, 'locations.json'), JSON.stringify(rows, null, 2));
    console.log('Successfully exported SQLite database to static JSON for Vercel production! 🚀');
});
