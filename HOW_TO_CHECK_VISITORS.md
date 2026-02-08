# How to Check Visitors to 4her.one

## Quick Answer: Has Anyone Visited?

```bash
cd /Users/yimi/Desktop/4her
./has-anyone-visited.sh
```

This tells you immediately if anyone visited.

---

## Full Analytics Dashboard (Best Option)

```bash
open https://vercel.com/twinecampus/4her-one/analytics
```

**Shows:**
- Total page views
- Unique visitors
- Top countries
- Device breakdown (mobile/desktop)
- Top pages
- Referrer sources

**Login:** twinecampus account

---

## Real-Time Logs with IP Addresses

```bash
cd /Users/yimi/Desktop/4her

# Get latest deployment URL
DEPLOY=$(vercel ls --prod | head -1)

# Watch real-time logs
vercel logs $DEPLOY
```

**Shows:**
- Visitor IP addresses
- Exact timestamps
- HTTP status codes
- User agents (browser/device)

**Press Ctrl+C to stop**

---

## Local Admin Dashboard

```bash
cd /Users/yimi/Desktop/4her
./open-admin.sh
```

**Shows:**
- Visit count
- Average time on site
- Last visit time
- Valentine response status

**Auto-refreshes every 10 seconds**

---

## All Options Compared

| Method | Shows | IPs? | Real-time? | Best For |
|--------|-------|------|------------|----------|
| `has-anyone-visited.sh` | Basic visit count | No | Yes | Quick check |
| Vercel dashboard | Full analytics | No* | No | Overall stats |
| `vercel logs` | Raw logs | Yes | Yes | Developer view |
| `open-admin.sh` | Clean dashboard | No | Yes | Monitoring |

*IPs available with Vercel Web Analytics upgrade ($10/mo)

---

## First Time Setup

1. **Deploy tracking code:**
   ```bash
   cd /Users/yimi/Desktop/4her
   vercel --prod
   ```

2. **Open admin dashboard:**
   ```bash
   ./open-admin.sh
   ```

3. **Check Vercel analytics:**
   ```bash
   open https://vercel.com/twinecampus/4her-one/analytics
   ```

---

## Example: Check Right Now

```bash
# Option 1: Quick check
./has-anyone-visited.sh

# Option 2: Full dashboard
open https://vercel.com/twinecampus/4her-one/analytics

# Option 3: Real-time logs
vercel logs $(vercel ls --prod | head -1)
```

---

## Notes

- Tracking only works AFTER deploying the updated index.html
- Vercel analytics available immediately (no setup needed)
- Admin dashboard requires site tracking code (deploy first)
- All methods are anonymous/privacy-friendly

**Recommended:** Use Vercel dashboard for overall stats, admin dashboard for real-time monitoring.
