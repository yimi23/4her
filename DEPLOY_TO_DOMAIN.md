# 🚀 Deploy to Your Domain

You mentioned you're paying for a domain. Here's how to deploy this site.

## Option 1: Netlify (Easiest - Free)

### Step 1: Prepare the Site
Already done! Just make sure these files are in the folder:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ All images/videos
- ✅ manifest.json
- ✅ sw.js (service worker)

### Step 2: Deploy
1. Go to https://netlify.com
2. Sign in (or create account)
3. **Drag the entire `/Users/yimi/Desktop/4her` folder** onto Netlify
4. Wait 30 seconds
5. Your site is live! (Netlify gives you a URL like `romantic-site-123.netlify.app`)

### Step 3: Connect Your Domain
1. In Netlify, click "Domain Settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `4her.yourname.com`)
4. Netlify gives you DNS instructions
5. Update your domain's DNS (wherever you bought it)
6. Wait ~10 minutes
7. **Done!** Site is live at your domain

---

## Option 2: Vercel (Also Easy - Free)

Same process as Netlify:
1. Go to https://vercel.com
2. Sign in
3. Drag folder to deploy
4. Connect your domain in settings

---

## Option 3: GitHub Pages (Free, Requires Git)

```bash
cd /Users/yimi/Desktop/4her

# Initialize git (if not already)
git init
git add .
git commit -m "Valentine's site for Adufe 💜"

# Create GitHub repo (go to github.com, create new repo)
git remote add origin https://github.com/yourusername/4her.git
git push -u origin main

# Enable GitHub Pages
# Go to repo Settings → Pages → Source: main branch → Save
# Your site is live at: https://yourusername.github.io/4her
```

Then connect your custom domain in repo settings.

---

## 🔥 Quick Deploy (Recommended: Netlify)

**Fastest path to live site:**

1. Open https://app.netlify.com/drop
2. Drag `/Users/yimi/Desktop/4her` folder
3. Wait 30 seconds
4. **DONE!** Share the link with Adufe

**To use your domain:**
- Netlify Dashboard → Domain Settings → Add custom domain
- Follow DNS instructions from your domain provider

---

## ✅ Before Deploying:

Make sure these are updated:
- [ ] Letter text (personalized)
- [ ] All videos uploaded
- [ ] All images uploaded
- [ ] "Last Updated" date in index.html (line ~347)
- [ ] Test on mobile preview (Chrome DevTools)

---

## 📱 Test After Deploy:

1. Open site on your phone
2. Scroll through all sections
3. Play one video chapter
4. Swipe carousel
5. Try clicking "No" button (should run away)
6. Try clicking "Yes" button (confetti + message)
7. Check notification came through

---

## 🎯 Your Domain Options:

If you already have a domain, you can use:
- Main domain: `yourdomain.com`
- Subdomain: `valentine.yourdomain.com`
- Subdomain: `4her.yourdomain.com`
- Subdomain: `adufe.yourdomain.com`

Pick whichever feels right!

---

## 🔧 Updating After Deploy:

**Netlify/Vercel:**
Just drag the folder again (it updates the site)

**GitHub Pages:**
```bash
cd /Users/yimi/Desktop/4her
git add .
git commit -m "Updated site"
git push
```

Site updates automatically in ~1 minute.

---

## ⚡ Ready to Deploy?

Pick a method:
1. **Netlify** (drag & drop) ← Easiest
2. **Vercel** (drag & drop)
3. **GitHub Pages** (requires git)

All are free and work with custom domains!

**Let me know if you need help with any step.**
