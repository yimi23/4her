# 🚀 Deployment Guide - 4her.one

Quick guide to get this site online for Adufe.

---

## ✅ Recommended: Netlify (5 minutes, FREE)

### **Why Netlify:**
- ✅ Free forever
- ✅ Custom domain support (4her.one)
- ✅ Automatic HTTPS
- ✅ Instant deploys
- ✅ No server management

### **Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub/Email (free)

2. **Deploy Site**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the entire `4her` folder
   - Wait 30 seconds
   - Get URL: `https://sparkly-something-123.netlify.app`

3. **Change Site Name (Optional)**
   - Site settings → Change site name
   - Set to: `4her-adufe` or `for-adufe`
   - New URL: `https://4her-adufe.netlify.app`

4. **Add Custom Domain (Optional)**
   - Buy `4her.one` from Namecheap ($12/year)
   - Netlify → Domain settings → Add custom domain
   - Point DNS: `CNAME` → `4her-adufe.netlify.app`
   - SSL certificate auto-configured
   - Final URL: `https://4her.one` ✨

---

## Alternative: GitHub Pages (If you know Git)

### **Steps:**

1. **Create GitHub Repo**
   ```bash
   cd ~/Desktop/4her
   git init
   git add .
   git commit -m "For Adufe 💜"
   git remote add origin https://github.com/yimi23/4her.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Repo settings → Pages
   - Source: Deploy from main branch
   - Wait 2 minutes
   - URL: `https://yimi23.github.io/4her`

3. **Custom Domain (Optional)**
   - Buy `4her.one`
   - Create `CNAME` file with domain name
   - Point DNS to `yimi23.github.io`

---

## Alternative: Vercel (Similar to Netlify)

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free)
3. Drag and drop folder
4. Get URL instantly

---

## 🎯 Recommended Path for You

**For quick sharing today:**
- Use Netlify drag-and-drop
- Share the `netlify.app` URL
- Takes 2 minutes

**For a special touch:**
- Buy `4her.one` domain ($12)
- Point it to Netlify
- Share: `https://4her.one`
- Takes 30 minutes (domain propagation)

---

## 🔒 Privacy Options

### **If you want password protection:**

**Netlify (Paid - $19/month):**
- Site settings → Access control → Password protection
- Set password
- She needs password to view

**Or use a service like:**
- [password-protected.netlify.app](https://password-protected.netlify.app) (free workaround)
- Add simple JavaScript password prompt

### **Simple JavaScript Password (Free):**

Add to `index.html` before `</body>`:

```html
<script>
const password = "adufe2026"; // Change this
const userInput = prompt("Enter password:");
if (userInput !== password) {
    document.body.innerHTML = "<h1>Wrong password</h1>";
}
</script>
```

---

## 📱 Before Sharing

**Test checklist:**
- [ ] Open on your phone
- [ ] Test on WiFi and cellular
- [ ] All videos load and play
- [ ] Photos display correctly
- [ ] Letter is readable
- [ ] Works on both portrait and landscape

**Test URL yourself first!** Don't send until you've verified everything works.

---

## 🎁 Sharing the Link

### **Don't just text the link.** Make it special:

**Option 1: Text Message**
```
Hey, I made something for you.
It's not much, but it's from the heart.
Take your time with it.

[link]
```

**Option 2: In Person**
- "I want to show you something"
- Hand her your phone with the site open
- Let her scroll through at her pace

**Option 3: QR Code**
- Generate QR code: [qr-code-generator.com](https://www.qr-code-generator.com)
- Print it on a card
- Hand-deliver with a note

---

## 🎯 My Recommendation

1. **Deploy to Netlify** (2 minutes)
2. **Test the URL yourself** (5 minutes)
3. **Share it in person** if possible
4. **Let her experience it** at her own pace

**Don't rush this.** The site says "with intention" - so be intentional about how you share it too.

---

## 💡 Need Help?

If deployment fails:
1. Check all video files are in `/videos` folder
2. Check all image files are in root folder
3. Make sure no file paths are broken
4. Test locally first (open `index.html` in browser)

---

**Ready?** Deploy it, test it, then share it with love. 💜
