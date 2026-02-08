# Vercel Analytics - Full Visitor Data

## Access Real Analytics Dashboard

### Quick Access
```bash
# Open Vercel dashboard directly
open https://vercel.com/twinecampus/4her-one/analytics
```

Or manually:
1. Go to https://vercel.com
2. Login as `twinecampus`
3. Click on `4her-one` project
4. Click "Analytics" tab

## What Vercel Shows

**Free Plan:**
- 📊 Page views
- 👥 Unique visitors
- 🌍 Top countries
- 📱 Device types (mobile/desktop)
- 🔗 Referrer sources
- ⏱️ Visit duration

**With Vercel Web Analytics ($10/month):**
- 🌐 IP addresses
- 🗺️ City-level location data
- 📈 Real-time visitor tracking
- 🔍 Individual visit sessions
- 📊 Detailed funnel tracking

## Enable Advanced Analytics

### Option 1: Vercel Web Analytics (Recommended)
```bash
cd /Users/yimi/Desktop/4her
vercel --prod

# Then in Vercel dashboard:
# 1. Go to Settings > Analytics
# 2. Enable "Web Analytics"
# 3. Add tracking script to index.html
```

### Option 2: Add Free Analytics Code

Add this to index.html (free, privacy-friendly):
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="your-id"></script>
```

## Current Setup

✅ Basic Vercel analytics (free) - active now
⚠️ Advanced analytics (IP tracking) - needs Web Analytics upgrade

## See Analytics Now

```bash
# Open analytics dashboard
open https://vercel.com/twinecampus/4her-one/analytics

# Or check via CLI
vercel logs --follow
```

## Logs (See Visitor IPs)

```bash
cd /Users/yimi/Desktop/4her
vercel logs

# See real-time logs with IPs
vercel logs --follow
```

This shows:
- Visitor IP addresses
- Exact timestamps
- Pages accessed
- User agents (browser/device)

## Quick Check

Run this to see if anyone visited today:
```bash
vercel logs | grep "GET /" | tail -20
```

Output format:
```
2026-02-05 20:30:15 - 192.168.1.1 - GET / - 200
```

Shows: timestamp, IP, page, status code

---

**Bottom line:** You already have analytics! Just need to access Vercel dashboard or run `vercel logs` to see visitor IPs.
