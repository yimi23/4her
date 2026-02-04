# 🧪 TEST THIS - Quick Verification

**Do these 5 things before deploying:**

---

## 1️⃣ **Test Speed Controls (2 minutes)**

1. Scroll to video section
2. Click chapter **01** → video starts
3. Click **1.5x** button → video speeds up ✅
4. Click chapter **02** → video should still be 1.5x ✅
5. Click **2x** → even faster ✅
6. Reload page → should still be 2x ✅
7. Click **1x** → back to normal ✅

**Pass?** Speed changes and persists across chapters + reloads

---

## 2️⃣ **Test New Carousel Items (1 minute)**

1. Scroll to carousel
2. Title says: **"Moments I Keep Coming Back To"** ✅
3. Drag carousel left/right
4. Count items → should see **16 total** ✅
5. Hover on video → it plays ✅
6. Click any photo → opens fullscreen ✅

**Pass?** All 16 items show up, videos work, lightbox works

---

## 3️⃣ **Test Intro Video Sound (30 seconds)**

1. Reload page
2. Intro video should autoplay WITH SOUND ✅
3. If blocked → Play button appears ✅

**Pass?** Sound works or fallback button appears

---

## 4️⃣ **Test Mobile (2 minutes)**

1. Open on phone (scan QR or share link)
2. Intro video plays
3. Letter readable
4. Videos play
5. Speed buttons work (tap 1.5x)
6. Carousel swipes
7. Finale video plays

**Pass?** Everything works on mobile

---

## 5️⃣ **Quick Visual Check (1 minute)**

1. Scroll entire site top to bottom
2. Colors: Black/white + purple/gold accents ✅
3. No broken images ✅
4. No weird spacing ✅
5. Looks polished ✅

**Pass?** Looks professional, no visual bugs

---

## ✅ **All Tests Pass?**

**Then you're ready to deploy:**

1. Go to [netlify.com](https://netlify.com)
2. Drag-drop the `4her` folder
3. Get URL
4. Test URL once more
5. Share with Adufe

---

## 🎯 **What You Should See:**

**Videos:**
```
[01] [02] [03] [04] [05] [06] [07]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Chapter 01    [1x] [1.25x] [1.5x] [2x]  0:23/0:51
```

**Carousel:**
```
Moments I Keep Coming Back To

[Photo] [Photo] [Video] [Photo] ... (16 total)
● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○
```

---

## 🚨 **If Something's Wrong:**

### **Speed not working?**
- Check browser console (F12)
- Try different speed
- Try different browser

### **Carousel missing items?**
- Check that all files are in `/Desktop/4her` folder
- Not in `/videos` subfolder

### **Mobile not working?**
- Test on actual device (not simulator)
- Try different browser on phone

---

**Test takes 7 minutes total. Then you're ready to share.** 💜
