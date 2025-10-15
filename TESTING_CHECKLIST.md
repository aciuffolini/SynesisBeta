# 🧪 Synesis PWA Testing Checklist

## 🌐 **Web Testing (Development Server)**

### **1. Basic Functionality**
- [ ] **App loads** - Check if http://localhost:5173 opens
- [ ] **Dark theme** - Verify black background and proper styling
- [ ] **Online/Offline indicator** - Top-right corner shows connection status
- [ ] **No console errors** - Check browser dev tools

### **2. Risk Simulation**
- [ ] **Sliders work** - All input sliders respond to changes
- [ ] **Values update** - Red numbers update when moving sliders
- [ ] **Charts render** - Risk heatmap and sensitivity charts display
- [ ] **Calculations** - Profit/loss calculations are correct

### **3. Scenario Management (NEW)**
- [ ] **Save scenario** - Enter name and click "Guardar"
- [ ] **Scenario appears** - Saved scenario shows in list
- [ ] **Load scenario** - Click "Cargar" to load saved parameters
- [ ] **Delete scenario** - Click "Borrar" to remove scenario
- [ ] **Empty state** - Shows "No hay escenarios guardados" when empty

### **4. Import/Export**
- [ ] **Export JSON** - Click "Exportar JSON" downloads file
- [ ] **Import JSON** - Use "Importar JSON" to load file
- [ ] **Data integrity** - Imported data matches exported data

### **5. PWA Features**
- [ ] **Install prompt** - "Install" button appears (if not already installed)
- [ ] **Offline mode** - Works without internet connection
- [ ] **Service worker** - Check dev tools > Application > Service Workers

## 📱 **Android Testing (When Ready)**

### **1. Android Development**
```bash
# Build for Android
npm run android:dev

# Or open Android Studio
npm run android:open
```

### **2. Android Features**
- [ ] **Native detection** - No install prompt in Android app
- [ ] **Touch interface** - All controls work with touch
- [ ] **Portrait orientation** - App locks to portrait mode
- [ ] **Splash screen** - Black splash screen on launch
- [ ] **Status bar** - Dark status bar styling

### **3. Database Testing**
- [ ] **Scenarios persist** - Saved scenarios remain after app restart
- [ ] **Offline storage** - Data stored locally (IndexedDB)
- [ ] **Performance** - Smooth operation on mobile device

## 🔧 **Technical Testing**

### **1. Build Testing**
```bash
# Test production build
npm run build

# Test Android build
NODE_ENV=development npm run build
```

### **2. Code Quality**
- [ ] **TypeScript errors** - No compilation errors
- [ ] **Linting** - No ESLint warnings
- [ ] **Bundle size** - Reasonable file sizes

### **3. Performance**
- [ ] **Load time** - App loads quickly
- [ ] **Memory usage** - No memory leaks
- [ ] **Smooth animations** - Charts and UI are responsive

## 🐛 **Common Issues to Check**

### **1. Database Issues**
- [ ] **IndexedDB support** - Works in target browsers
- [ ] **Data persistence** - Scenarios don't disappear
- [ ] **Error handling** - Graceful failure if database unavailable

### **2. PWA Issues**
- [ ] **Manifest** - Proper app metadata
- [ ] **Icons** - App icons display correctly
- [ ] **Offline** - App works without internet

### **3. Android Issues**
- [ ] **Base path** - Assets load correctly
- [ ] **Touch events** - All interactions work
- [ ] **Performance** - Smooth on mobile hardware

## ✅ **Success Criteria**

- [ ] **All sliders work** and update values
- [ ] **Charts render** correctly
- [ ] **Scenarios save/load/delete** properly
- [ ] **App works offline**
- [ ] **No console errors**
- [ ] **Responsive design** on mobile
- [ ] **Fast performance**

## 🚀 **Ready for Production When:**

- [ ] All web tests pass
- [ ] Android build succeeds
- [ ] No critical bugs found
- [ ] Performance is acceptable
- [ ] User experience is smooth

---

**Start testing with the development server at http://localhost:5173** 🎯
