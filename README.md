<<<<<<< HEAD
# Synesis β — Beef Risk PWA

Agentic beef nutrition & management copilot. **Beta version** with enhanced Android support and scenario management.

🌐 **[Live App](https://aciuffolini.github.io/synesisbeta/)** | 📱 **Android Ready** | 💾 **Offline-First**

## ✨ **New Features in Beta**

### 🤖 **Android Support**
- **Capacitor integration** for native Android apps
- **Touch-optimized interface** for mobile devices
- **Android-specific configurations** and build scripts
- **PWA installation** on Android devices

### 💾 **Scenario Management**
- **Save/Load scenarios** with custom names
- **Offline storage** using Dexie/IndexedDB
- **Export/Import** JSON scenarios
- **Persistent data** across sessions

### 🚀 **Enhanced PWA**
- **Improved service worker** with native detection
- **Better offline functionality**
- **Mobile-first design** with responsive layouts
- **Installation prompts** for Android

## 🚀 **Quick Start**

### **Live Demo**
Visit the **[live application](https://aciuffolini.github.io/synesisbeta/)** to try it immediately.

### **Local Development**
```bash
npm ci
npm run dev
```

### **Android Development**
```bash
# Install Android dependencies
npm run android:dev

# Build for Android
npm run android:build

# Open Android Studio
npm run android:open
```

## 📱 **Android Features**

- **App ID**: `com.synesis.risk`
- **Touch Interface**: Optimized for mobile gestures
- **Splash Screen**: Custom Android splash screen
- **Status Bar**: Dark theme integration
- **Portrait Mode**: Locked to portrait orientation
- **Offline Storage**: Local scenario management

## 🛠 **Technical Stack**

- **Frontend**: React + TypeScript + Vite
- **PWA**: vite-plugin-pwa + Workbox
- **Database**: Dexie.js (IndexedDB)
- **Mobile**: Capacitor + Android
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## 📋 **Development Scripts**

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Android
npm run android:dev     # Build and run on Android
npm run android:build   # Build Android APK
npm run android:open    # Open Android Studio
npm run android:sync    # Sync web assets to Android
```

## 🔧 **Configuration**

### **Vite Config**
- **Base path**: Dynamic for GitHub Pages vs Android
- **PWA manifest**: Mobile-optimized settings
- **Build optimization**: Android-compatible output

### **Capacitor Config**
- **Android scheme**: HTTPS for modern APIs
- **Splash screen**: 2-second duration, black theme
- **Status bar**: Dark styling
- **Permissions**: Android-specific settings

## 📱 **Mobile Testing**

### **Chrome Mobile Simulation**
1. Open http://localhost:5173/
2. Press F12 → Mobile icon (📱)
3. Select Android device (Pixel 5, Galaxy S20, etc.)
4. Test touch interface and responsive design

### **Real Android Device**
1. Connect to same WiFi as development machine
2. Access: http://[YOUR_IP]:5173/
3. Test PWA installation and offline functionality

## 🚀 **Deployment**

This app is automatically deployed to GitHub Pages on every push to `main` branch.

- **Live URL**: https://aciuffolini.github.io/synesisbeta/
- **Source**: This repository
- **Build**: GitHub Actions workflow

## 📝 **Version History**

### **v2.0.0-beta** (Current)
- ✅ Android support with Capacitor
- ✅ Scenario management system
- ✅ Enhanced PWA functionality
- ✅ Mobile-optimized interface
- ✅ Offline data persistence

### **v1.0.0** (Original)
- ✅ Basic PWA functionality
- ✅ Risk calculation engine
- ✅ GitHub Pages deployment

## 🤝 **Contributing**

This is a beta version. Feedback and contributions are welcome!

## 📄 **License**

MIT License - see LICENSE file for details.

---

**Synesis β** - *Beef Risk Management, Enhanced for Mobile* 🐄📱
=======
# SynesisBeta
Synesis — Monorepo del Beef Copilot: asistente de nutrición y gestión para toma de decisiones y gemelo digital en feedlot (AR). PWA offline + Dexie.
>>>>>>> c1db1f9ba9ef466eb8a2fdd996a8422618fb9ec7
