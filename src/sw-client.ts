import { IS_NATIVE } from "./native";

// NOTE: make it async & guard native, so no SW in Android WebView
export async function initSW(cb?: (m: string) => void) {
  if (IS_NATIVE || !("serviceWorker" in navigator)) return;
  const { registerSW } = await import("virtual:pwa-register");
  registerSW({
    onNeedRefresh() { cb?.("Nueva versión disponible"); },
    onOfflineReady() { cb?.("Listo offline"); },
  });
}

