# WhatsApp Notification Setup

## Option 1: Using ntfy.sh (Easiest - 2 minutes)

### Step 1: Set up the notification channel
1. The website is already configured to send to `https://ntfy.sh/praise-valentine-4her`
2. Subscribe to notifications on your phone:
   - Download ntfy app (iOS/Android)
   - Subscribe to topic: `praise-valentine-4her`
   - Or visit: https://ntfy.sh/praise-valentine-4her in browser

### Step 2: Connect to WhatsApp (via Clawdbot)
Create a cron job that monitors the ntfy topic and sends WhatsApp when triggered.

```bash
# In Clawdbot, create a cron that runs every minute:
# Check ntfy.sh for new Valentine responses and forward to WhatsApp
```

---

## Option 2: Using Webhook.site (Testing)

1. Go to https://webhook.site
2. Copy your unique URL
3. Update the website's `script.js` line ~750:
   ```javascript
   const response = await fetch('YOUR_WEBHOOK_URL_HERE', {
   ```
4. When she clicks "Yes", you'll see the request in webhook.site
5. Set up forwarding to WhatsApp manually

---

## Option 3: Direct WhatsApp (Requires Backend)

Use the Netlify function I created:
1. Deploy to Netlify
2. Set environment variable: `CLAWDBOT_TOKEN`
3. Function URL: `https://your-site.netlify.app/.netlify/functions/valentine-notify`
4. Website will automatically use this URL

---

## Recommended: Option 1 (ntfy.sh)

It's free, instant, no signup, and works on phone + desktop.

**Current website is already set to use ntfy.sh!**

Just:
1. Install ntfy app on your phone
2. Subscribe to: `praise-valentine-4her`
3. Done! You'll get instant notification when she clicks "Yes"

Then you can manually send her a WhatsApp message yourself.
