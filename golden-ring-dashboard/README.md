# 🌟 Golden Ring of Tashkent - Web Dashboard

This application forms the primary frontend client layer for the Golden Ring of Tashkent tourism ecosystem, meticulously crafted utilizing **Vite**, **React**, and **Leaflet.js**.

## 🚀 Running Locally

```bash
# Install node dependencies
npm install

# Start the Vite development server
npm run dev
```
*(The native dev server initializes on http://localhost:5173)*

## 🏗️ Technical Features
- **Interactive Cartography:** Dynamic GIS integration utilizing `react-leaflet` mapping points pulled seamlessly from the database.
- **Glassmorphism UI:** A sleek, premium dark-themed interface built natively via pure `.css` styling logic. No bloatware CSS frameworks attached.
- **SPA Mechanics:** Client-side React lazy-loading to bounce effortlessly between the *Dashboard*, *Explorer List*, *360° Virtual Views*, and *Platform Authors*.
- **Vercel Build Target:** Embedded `vercel.json` ensures wildcard route fallbacks successfully hit `index.html` preventing deployment 404 errors.

## 🌐 Deploying to Vercel
This specific sub-module (`golden-ring-dashboard`) functions as the **Framework Root Directory** for your Vercel configurations!
Make sure the main monolithic SQLite DB is permanently extracted manually to `public/api/locations.json` before triggering a deployment hook. 
