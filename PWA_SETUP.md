# 📱 PWA Setup - Make It Installable!

## ✅ What's Done:
- `manifest.json` created
- `sw.js` (service worker) created
- HTML updated with PWA meta tags
- Auto-update system enabled

## 🎨 Create App Icons (5 minutes):

You need 2 icon sizes: **192x192** and **512x512**

### Option 1: Use a Photo of You Two
1. Pick a meaningful photo
2. Go to [Squoosh.app](https://squoosh.app)
3. Upload photo
4. Resize to 512x512 (square crop)
5. Download as `icon-512.png`
6. Resize same photo to 192x192
7. Download as `icon-192.png`
8. Put both in `/Desktop/4her` folder

### Option 2: Use Simple Gold Heart
1. Go to [Favicon.io](https://favicon.io/emoji-favicons/purple-heart/)
2. Download purple heart emoji pack
3. Extract `android-chrome-512x512.png` → rename to `icon-512.png`
4. Extract `android-chrome-192x192.png` → rename to `icon-192.png`
5. Put both in `/Desktop/4her` folder

### Option 3: Create Custom Design
1. Use Canva or Figma
2. Create 512x512 canvas
3. Add "💜 A" or "For Adufe" or your initials
4. Export as PNG (512x512 and 192x192)
5. Name them `icon-512.png` and `icon-192.png`

## 📲 How It Works After You Add Icons:

### On iPhone:
1. She opens the website in Safari
2. Taps Share button
3. "Add to Home Screen"
4. Icon appears on her home screen
5. Opens like a native app

### On Android:
1. Chrome shows "Install" prompt automatically
2. Or she taps menu → "Add to Home Screen"
3. Icon appears
4. Opens like a native app

## 🔄 Auto-Update Magic:

**When you update the site:**
1. Push changes to Netlify
2. PWA checks for updates automatically
3. Next time she opens → downloads new version in background
4. She gets latest content without reinstalling

**Update version number when you make big changes:**
In `sw.js`, change:
```javascript
const CACHE_NAME = 'adufe-v1'; // Change to v2, v3, etc.
```

## 🧪 Test It Works:

### On Desktop:
1. Open site in Chrome
2. Right-click → Inspect → Application tab
3. Check "Manifest" - should show icon, name, colors
4. Check "Service Workers" - should show sw.js as "activated"

### On Phone:
1. Open in Safari/Chrome
2. Install to home screen
3. Close browser
4. Tap icon → opens fullscreen (no browser UI)
5. Works offline (if she loaded it once)

## 🎯 What This Gives You:

✅ **Home screen icon** - permanent reminder  
✅ **Fullscreen app** - no browser UI, more immersive  
✅ **Auto-updates** - she always sees latest version  
✅ **Offline support** - works even with no internet  
✅ **Professional** - feels like a real app  

## 📝 Current Status:

- [x] manifest.json created
- [x] sw.js created
- [x] HTML updated
- [ ] Icons needed (icon-192.png, icon-512.png)

**Once you add the icons, you're done!**

Deploy to Netlify and it'll work perfectly.

---

**Icon recommendation:** Use a photo of you two. More personal than generic emoji.
