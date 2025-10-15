import { IS_NATIVE } from "./native";

// NOTE: make it async & guard native, so no SW in Android WebView
export async function initSW(cb?: (m: string) => void) {
  if (IS_NATIVE || !("serviceWorker" in navigator)) return;
  
  // Only import PWA register in web mode
  if (import.meta.env.MODE === "gh") {
    try {
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        onNeedRefresh() { cb?.("Nueva versión disponible"); },
        onOfflineReady() { cb?.("Listo offline"); },
      });
    } catch (error) {
      console.warn("PWA register not available:", error);
    }
  }
}

