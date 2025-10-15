import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const isGH = mode === "gh";            // github pages
  const base = isGH ? "/SynesisBeta/" : "./"; // android needs relative base

  return {
    base,
    plugins: [
      react(),
      // PWA for web only (service workers don't help inside Capacitor WebView)
      isGH &&
        VitePWA({
          registerType: "autoUpdate",
          manifest: {
            name: "Synesis Risk",
            short_name: "Synesis",
            start_url: isGH ? "/SynesisBeta/" : "./",
            scope: isGH ? "/SynesisBeta/" : "./",
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
        }),
    ].filter(Boolean),
  };
});
