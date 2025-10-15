import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.synesis.risk",
  appName: "Synesis Risk",
  webDir: "dist",
  server: { 
    androidScheme: "https" // modern APIs happy; no SW in native
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#000000",
      showSpinner: false
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#000000"
    }
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  }
};

export default config;
