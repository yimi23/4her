# 4her.one Admin Dashboard

## How to Open

From terminal:
```bash
cd /Users/yimi/Desktop/4her
./open-admin.sh
```

Or manually:
```bash
cd /Users/yimi/Desktop/4her
python3 -m http.server 8888
# Then open: http://localhost:8888/admin.html
```

## Login

Password: `4her`

## Features

✅ **Response Monitor** - Checks ntfy.sh/praise-valentine-4her every 10 seconds
✅ **Visitor Tracking** - Shows site visits, time spent, last visit
✅ **Dashboard Tracking** - Tracks how many times you've opened the dashboard
✅ **Activity Log** - Shows recent site activity
✅ **Auto-Refresh** - Updates response status automatically

## Real Analytics (Vercel)

### Quick Check Visitors (with IPs)
```bash
./check-visitors.sh
```

### See Full Analytics Dashboard
```bash
open https://vercel.com/twinecampus/4her-one/analytics
```

### View Live Logs (with IPs)
```bash
cd /Users/yimi/Desktop/4her
vercel logs --follow
```

Shows:
- Visitor IP addresses
- Exact timestamps
- Browser/device info
- Pages accessed

## Privacy

- Local dashboard runs on localhost only (not deployed)
- Vercel analytics shows real visitor data (IPs, location, etc.)
- Safe to close browser and reopen - stats persist

## Notes

- Dashboard must be running to check for responses
- Stop with Ctrl+C in terminal
- Vercel analytics available 24/7 (even when dashboard closed)
