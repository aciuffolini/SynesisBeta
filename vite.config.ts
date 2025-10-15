import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/synesisbeta/" : "/", // 👈 GitHub Pages vs Android
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Synesis Risk",
        short_name: "Synesis",
        start_url: process.env.NODE_ENV === 'production' ? "/synesisbeta/" : "/",
        scope: process.env.NODE_ENV === 'production' ? "/synesisbeta/" : "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        orientation: "portrait",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      },
      workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] }
    })
  ]
});
