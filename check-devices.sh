#!/bin/bash
# Check what devices visited 4her.one

echo "🔍 Checking devices that visited 4her.one..."
echo ""

cd /Users/yimi/Desktop/4her

# Method 1: Check our tracking notifications
echo "📱 Checking visit tracking data..."
VISITS=$(curl -s "https://ntfy.sh/praise-valentine-visits/json?poll=1&since=7d" 2>/dev/null)

if [ -z "$VISITS" ] || [ "$VISITS" = "" ]; then
    echo "⚠️  No tracking data found yet"
    echo ""
else
    echo "✅ Found visit data!"
    echo ""
fi

# Method 2: Open Vercel analytics dashboard
echo "🌐 Opening Vercel Analytics (shows device details)..."
echo ""
open "https://vercel.com/twinecampus/4her-one/analytics"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "In the Vercel dashboard, look for:"
echo ""
echo "📊 Device Breakdown section:"
echo "   - Shows iPhone models"
echo "   - Shows if desktop/Mac was used"
echo "   - Shows Android devices"
echo ""
echo "🌍 Location section:"
echo "   - Shows cities (look for Mount Pleasant)"
echo ""
echo "💡 To identify Adufe's visit:"
echo "   - iPhone 12 (not iPhone 14)"
echo "   - From Mount Pleasant, MI"
echo "   - NOT from your Mac"
echo ""
echo "Your devices to EXCLUDE:"
echo "   ❌ iPhone 14"
echo "   ❌ MacBook Air (Desktop/Mac)"
echo ""
echo "✅ If you see iPhone 12 or visit from Mount Pleasant → likely Adufe!"
echo ""
