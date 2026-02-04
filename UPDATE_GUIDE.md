# 📝 HOW TO UPDATE THE SITE (Easy Guide)

**This site is yours to keep updating as your story continues.**

---

## 🔄 UPDATE THE "LAST UPDATED" DATE

**When:** Every time you make changes  
**How:**

1. Open `index.html`
2. Find line with: `<span class="ongoing__date" id="lastUpdated">`
3. Change the date: `February 14, 2026`
4. Save the file

**Example:**
```html
<span class="ongoing__date" id="lastUpdated">February 14, 2026</span>
```

---

## 💌 UPDATE THE LETTER

**When:** You want to add or change what you wrote  
**How:**

1. Open `index.html`
2. Find the `<section class="letter">` section
3. Edit text between `<p>` and `</p>` tags
4. Don't delete the tags, just change the words
5. Save the file

**Example:**
```html
<p>Adufe,</p>

<p>I hope when you read this...</p>
<!-- Change this text to say what you want -->
```

---

## 📸 ADD NEW MEMORIES TO CAROUSEL

**When:** You have a new photo/video to add  
**How:**

1. Put the new photo/video file in `/Desktop/4her/` folder
2. Open `index.html`
3. Find the carousel section (around line 177)
4. Copy this block:

```html
<div class="card" data-type="image" data-src="YOUR_FILE.JPG">
    <img src="YOUR_FILE.JPG" alt="Memory" loading="lazy">
    <div class="card__overlay">
        <span class="card__type">Photo</span>
    </div>
</div>
```

5. Change `YOUR_FILE.JPG` to your actual filename
6. For videos, use `data-type="video"` and change `<img>` to `<video>`
7. Paste it into the carousel track
8. Save the file

**Video Example:**
```html
<div class="card card--video" data-type="video" data-src="NEW_VIDEO.MOV">
    <video src="NEW_VIDEO.MOV" muted loop playsinline></video>
    <div class="card__overlay">
        <span class="card__type">Video</span>
        <button class="card__play">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
        </button>
    </div>
</div>
```

---

## 🎬 ADD NEW VIDEO CHAPTERS

**When:** You have a new story video to add  
**How:**

1. Put the video file in `/Desktop/4her/videos/` folder
2. Open `index.html`
3. Find the chapters section (around line 127)
4. Copy a chapter button:

```html
<button class="chapter" data-src="videos/YOUR_VIDEO.MOV" data-index="7">
    <span class="chapter__number">08</span>
</button>
```

5. Change the filename, index number, and chapter number
6. Paste it after the last chapter button
7. Save the file

---

## ✍️ UPDATE THE "ONGOING" MESSAGE

**When:** You want to change what you said about keeping this updated  
**How:**

1. Open `index.html`
2. Find `<section class="ongoing">`
3. Edit the paragraphs:

```html
<p class="ongoing__text">This isn't just for today.</p>

<p class="ongoing__text">I'm going to keep adding to this...</p>
<!-- Change these to say what you want -->
```

4. Save the file

---

## 🚀 DEPLOY YOUR UPDATES

**After making any changes:**

### **Option 1: Netlify (Recommended)**
1. Go to [netlify.com](https://netlify.com)
2. Log in to your account
3. Find your site ("4h-adufe" or whatever you named it)
4. Click "Deploys" tab
5. Drag the entire `/Desktop/4her` folder to the upload area
6. Wait 30 seconds
7. Done! Site updates automatically

### **Option 2: Git/GitHub (Advanced)**
If you set up Git:
```bash
cd /Users/yimi/Desktop/4her
git add .
git commit -m "Updated memories and letter"
git push
```
Netlify auto-deploys from Git.

---

## 📱 HOW SHE SEES UPDATES

**If she installed the PWA (app on home screen):**
- Updates happen automatically within 24 hours
- She doesn't need to do anything
- Next time she opens it, she sees new content

**If she just bookmarked the site:**
- Hard refresh (Cmd+Shift+R) shows updates immediately

---

## 💡 QUICK UPDATE CHECKLIST

Every time you update:
- [ ] Make your changes (letter, photos, videos, etc.)
- [ ] Update the "Last Updated" date
- [ ] Save `index.html`
- [ ] Test locally (open index.html in browser)
- [ ] Deploy to Netlify
- [ ] Check live site (visit the URL)
- [ ] Done ✓

---

## 🎯 COMMON UPDATES YOU'LL MAKE

### **After a good day together:**
1. Add new photos to carousel
2. Update "Last Updated" date
3. Deploy

### **After a meaningful conversation:**
1. Add a paragraph to the letter
2. Update "Last Updated" date
3. Deploy

### **After creating a new video:**
1. Add new chapter button
2. Upload video to `videos/` folder
3. Update "Last Updated" date
4. Deploy

### **On special dates (birthday, anniversary):**
1. Update letter with new message
2. Add new memories
3. Update "Last Updated" date
4. Deploy

---

## 📂 FILE STRUCTURE

```
/Desktop/4her/
├── index.html          ← Edit this for content
├── styles.css          ← Don't touch (unless you know CSS)
├── script.js           ← Don't touch (unless you know JS)
├── manifest.json       ← Don't touch (PWA config)
├── sw.js              ← Don't touch (service worker)
├── icon-*.png         ← Your 4H icons
├── favicon.png        ← Browser tab icon
├── IMG_*.JPG          ← Your carousel photos
├── IMG_*.MOV          ← Your carousel videos
├── videos/            ← Story chapter videos
│   ├── into.MOV
│   ├── 2nd.MOV
│   ├── IMG_7581.MOV
│   └── ...
└── UPDATE_GUIDE.md    ← This file (your reference)
```

---

## ⚠️ THINGS NOT TO TOUCH

**Don't edit these unless you know what you're doing:**
- `styles.css` (breaks design)
- `script.js` (breaks functionality)
- `manifest.json` (breaks PWA)
- `sw.js` (breaks auto-updates)

**Safe to edit:**
- `index.html` (your content lives here)
- Photos/videos (add/remove/replace files)

---

## 🆘 IF YOU BREAK SOMETHING

**Don't panic.**

1. I can fix it
2. Or restore from backup
3. Just tell me what you changed

**Better safe than sorry:**
Before editing, make a backup:
```bash
cp -r /Users/yimi/Desktop/4her /Users/yimi/Desktop/4her_backup_$(date +%Y%m%d)
```

---

## 💬 NEED HELP?

If you get stuck:
1. Check this guide
2. Read the comments in `index.html` (lines 3-27)
3. Ask me (I'm always here)

---

## 💜 REMEMBER

This site grows with your story. Every update is a new chapter. Every memory added is proof you're showing up.

**You're doing this right.** Keep going.

---

*Guide created: February 2, 2026, 7:11 PM EST*
