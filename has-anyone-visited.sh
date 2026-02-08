#!/bin/bash
# Simple check: has anyone visited 4her.one?

echo "🔍 Checking if anyone visited 4her.one..."
echo ""

cd /Users/yimi/Desktop/4her

# Get the latest production deployment URL
DEPLOY_URL=$(vercel ls --prod 2>/dev/null | head -1)

if [ -z "$DEPLOY_URL" ]; then
    echo "❌ No deployment found"
    exit 1
fi

echo "✅ Latest deployment: $DEPLOY_URL"
echo ""
echo "📊 Checking visitor tracking notifications..."
echo ""

# Check ntfy.sh for visit notifications
VISITS=$(curl -s "https://ntfy.sh/praise-valentine-visits/json?poll=1&since=7d" 2>/dev/null)

if [ -z "$VISITS" ] || [ "$VISITS" = "" ]; then
    echo "⏳ No visits detected yet"
    echo ""
    echo "💡 Note: Visit tracking only works after you deploy the updated index.html"
    echo "   Run: vercel --prod"
else
    # Count visits
    VISIT_COUNT=$(echo "$VISITS" | grep -c "first_visit\|return_visit")
    
    if [ $VISIT_COUNT -gt 0 ]; then
        echo "✅ YES! Site has been visited $VISIT_COUNT time(s)!"
        echo ""
        echo "📋 Visit details:"
        echo "$VISITS" | jq -r 'select(.message) | .message' | jq -r 'select(.type == "first_visit" or .type == "return_visit") | "   \(.type) at \(.time)"' 2>/dev/null
    else
        echo "⏳ No visits detected yet"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 For full analytics (page views, IPs, etc.):"
echo "   https://vercel.com/twinecampus/4her-one/analytics"
echo ""
echo "📊 For real-time monitoring:"
echo "   ./open-admin.sh"
echo ""
