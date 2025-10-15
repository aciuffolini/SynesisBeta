# Android Setup for Synesis Risk PWA

## Prerequisites

1. **Android Studio** - Download from https://developer.android.com/studio
2. **Java Development Kit (JDK) 17** - Required for Android development
3. **Android SDK** - Install via Android Studio

## Setup Steps

### 1. Initialize Android Platform
```bash
cd apps/web
npm run build
npx cap add android
```

### 2. Sync Web Assets
```bash
npm run android:sync
```

### 3. Open in Android Studio
```bash
npm run android:open
```

### 4. Build and Run
```bash
# For development (with live reload)
npm run android:dev

# For production build
npm run android:build
```

## Available Scripts

- `npm run android:dev` - Build, sync, and run on device/emulator
- `npm run android:build` - Build production APK
- `npm run android:open` - Open Android Studio
- `npm run android:sync` - Sync web assets to Android

## Configuration

- **App ID**: `com.synesis.risk`
- **App Name**: `Synesis Risk`
- **Theme**: Dark theme with black background
- **PWA Features**: Offline storage, installable

## Troubleshooting

1. **Build Issues**: Make sure to run `npm run build` first
2. **Sync Issues**: Use `npm run android:sync` to update assets
3. **Device Issues**: Enable USB debugging on Android device
4. **Emulator Issues**: Create AVD in Android Studio

## Features

- ✅ Offline PWA functionality
- ✅ Local data storage (Dexie/IndexedDB)
- ✅ Scenario management
- ✅ Dark theme optimized for mobile
- ✅ Touch-friendly interface
