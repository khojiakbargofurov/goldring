# 🌟 Golden Ring of Tashkent - Tourism Ecosystem

Golden Ring of Tashkent is a modern Single Page Application (SPA) designed to serve as a digital ecosystem for the Tashkent region's tourism objects. The platform gathers and displays real-time data regarding eco-tourism, cultural heritage, agro-tourism, and health resorts.

## ✨ Features
- **Interactive Cartography:** Dynamic GIS integration utilizing `react-leaflet` to display database coordinates automatically.
- **Glassmorphism UI:** A sleek, premium dark-themed interface built natively without external UI bloat.
- **Vercel-Ready Architecture:** Designed out-of-the-box to seamlessly host on Vercel utilizing Vite environments and JSON cache.
- **Modular SPAs:** Lightning-fast navigation with component lazy-loading between the *Dashboard*, *Explorer Grid*, *360° Panorama Views*, and *Platform Authors*.
- **Smart Edge Routing:** Catch-all 404 Pages and elegant fallback mechanics.

## 🚀 Tech Stack
- Frontend: `React (Vite)`, `Leaflet.js`
- Backend / Build: `Node.js`, `Express.js`
- Database: `SQLite3` (Integrated automated export for serverless compatibility)

---

## 🛠️ Local Installation & Development

### 1. Database & Local API Initialization
In a terminal window, navigate into the API directory, install dependencies, and start the local database API server.
```bash
cd golden-ring-api
npm install
node server.js
```
*Tip: The backend operates on `http://localhost:5001` to prevent MacOS port collisions.*

### 2. Frontend Initialization
In a separate terminal window, instantiate the Vite development server.
```bash
cd golden-ring-dashboard
npm install
npm run dev
```
*The React Dashboard will listen on `http://localhost:5173`.*

---

## 🌐 Production & Vercel Deployment
The application logic features built-in `.env` hooks for serverless execution. Instead of hosting an active backend, it consumes a static JSON build state.

1. **Lock Database:** Run `node export_db.js` within `golden-ring-api` to lock the SQLite tables into a static layout inside the Vite public folder.
2. **Deploy:** Publish to Vercel targeting the `golden-ring-dashboard` folder as the Root Directory. The application elegantly redirects `fetch` calls through `import.meta.env.PROD` to handle its own cached APIs.

*Project created by Gafurova Gulsevar & Team.*
