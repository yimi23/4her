#!/bin/bash
# Quick script to check 4her.one analytics

echo "🔍 Checking 4her.one analytics..."
echo ""

cd /Users/yimi/Desktop/4her

# Get latest production deployment
echo "📊 Getting latest deployment..."
LATEST_DEPLOY=$(vercel ls --prod 2>/dev/null | head -1)

if [ -z "$LATEST_DEPLOY" ]; then
    echo "❌ No deployment found"
    exit 1
fi

echo "✅ Latest deployment: $LATEST_DEPLOY"
echo ""

# Option 1: Open analytics dashboard
echo "🌐 Opening analytics dashboard..."
open "https://vercel.com/twinecampus/4her-one/analytics"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 The Vercel dashboard shows:"
echo "   - Page views"
echo "   - Unique visitors"
echo "   - Top countries"
echo "   - Device types"
echo "   - Referrer sources"
echo ""
echo "💡 To see real-time logs with IPs, run:"
echo "   vercel logs $LATEST_DEPLOY"
echo ""
echo "🔍 To see deployment details:"
echo "   vercel inspect $LATEST_DEPLOY"
echo ""
