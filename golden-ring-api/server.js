const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('tourism.db');

app.get('/api/locations', (req, res) => {
    const query = `
        SELECT locations.*, categories.name as category_name 
        FROM locations 
        JOIN categories ON locations.category_id = categories.id
    `;
    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({error: err.message});
        res.json(rows);
    });
});

app.get('/api/categories', (req, res) => {
    db.all("SELECT * FROM categories", [], (err, rows) => {
        if (err) return res.status(500).json({error: err.message});
        res.json(rows);
    });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Golden Ring Express API running on http://localhost:${PORT}`);
});
