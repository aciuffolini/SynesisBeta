# 📱 Mobile Testing Guide

**Test Synesis Beta on your Android device in 3 easy steps!**

## 🚀 **Quick Mobile Test**

### **Option 1: Live App (Recommended)**
1. **Open your phone's browser** (Chrome, Firefox, Safari)
2. **Go to**: https://aciuffolini.github.io/SynesisBeta/
3. **Install as PWA**: Look for "Add to Home Screen" option
4. **Test offline**: Turn off WiFi and use the app

### **Option 2: Local Development Server**
If you're running the development server locally:

1. **Make sure your phone and computer are on the same WiFi**
2. **Find your computer's IP address**:
   - **Windows**: Open Command Prompt → `ipconfig` → Look for "IPv4 Address"
   - **Mac**: System Preferences → Network → WiFi → Advanced → TCP/IP
   - **Linux**: `ip addr show` or `ifconfig`
3. **Open your phone's browser**
4. **Go to**: `http://[YOUR_IP]:3000` (replace [YOUR_IP] with your actual IP)
5. **Test the app** on your phone

## 📱 **What to Test**

### **✅ Basic Functionality**
- [ ] **App loads** - You see the Synesis Risk interface
- [ ] **Touch controls** - Sliders respond to finger touches
- [ ] **Responsive design** - Layout adapts to your phone screen
- [ ] **Scenario management** - Save/load scenarios works

### **✅ PWA Features**
- [ ] **Install prompt** - "Add to Home Screen" appears
- [ ] **Offline functionality** - App works without internet
- [ ] **App icon** - Shows up on home screen
- [ ] **Full screen** - No browser UI when launched

### **✅ Android-Specific Features**
- [ ] **Touch gestures** - All controls work with touch
- [ ] **Portrait mode** - App stays in portrait orientation
- [ ] **Performance** - Smooth scrolling and animations
- [ ] **Data persistence** - Scenarios save between sessions

## 🔧 **Troubleshooting**

### **App Won't Load**
- **Check WiFi**: Make sure phone and computer are on same network
- **Try different browser**: Chrome, Firefox, Safari
- **Check firewall**: Windows might be blocking the connection
- **Try live version**: https://aciuffolini.github.io/SynesisBeta/

### **Touch Controls Don't Work**
- **Try different browser**: Some browsers have touch issues
- **Check zoom level**: Make sure page isn't zoomed in/out
- **Refresh page**: Sometimes helps with touch detection

### **PWA Won't Install**
- **Look for install option**: Browser menu → "Add to Home Screen"
- **Check HTTPS**: PWAs require secure connection
- **Try different browser**: Some browsers have better PWA support

### **Offline Mode Doesn't Work**
- **Wait for service worker**: May take a few seconds to activate
- **Check browser support**: Not all browsers support service workers
- **Try live version**: https://aciuffolini.github.io/SynesisBeta/

## 📱 **Browser Compatibility**

| Browser | PWA Support | Touch Support | Offline Support |
|---------|-------------|---------------|-----------------|
| Chrome  | ✅ Excellent | ✅ Excellent   | ✅ Excellent    |
| Firefox | ✅ Good      | ✅ Good        | ✅ Good         |
| Safari  | ✅ Good      | ✅ Good        | ✅ Good         |
| Edge    | ✅ Good      | ✅ Good        | ✅ Good         |

## 🚀 **Advanced Testing**

### **For Developers**
If you want to test the Android native app:

1. **Install Android Studio**
2. **Run**: `npm run android:dev`
3. **Connect Android device** via USB
4. **Enable USB debugging** on your phone
5. **Test native app** on device

### **For Testers**
- **Test on different screen sizes**: Phone, tablet
- **Test different orientations**: Portrait, landscape
- **Test with poor connection**: Slow WiFi, offline
- **Test with different browsers**: Chrome, Firefox, Safari

## 📞 **Need Help?**

- **GitHub Issues**: [Report bugs or request features](https://github.com/aciuffolini/SynesisBeta/issues)
- **Documentation**: Check the main README.md
- **Live Demo**: https://aciuffolini.github.io/SynesisBeta/

---

**Happy Testing!** 🎉📱

*Synesis Beta - Beef Risk Management, Enhanced for Mobile*
