#!/bin/bash
# Deploy 4her.one with automatic notification to Adufe

echo "🚀 Deploying 4her.one to production..."
echo ""

# Deploy to Vercel
vercel --prod

# Check if deploy was successful
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Deploy successful!"
  echo ""
  echo "📬 Sending notification to Adufe..."
  
  # Send notification via ntfy.sh
  curl -s \
    -d "💜 Praise just added new memories to your site! Tap to see what's new 💕" \
    -H "Title: New Memories Added 💜" \
    -H "Tags: heart,gift" \
    -H "Priority: high" \
    -H "Click: https://4her.one" \
    https://ntfy.sh/adufe-4her-updates > /dev/null
  
  if [ $? -eq 0 ]; then
    echo "✅ Notification sent to Adufe!"
    echo ""
    echo "🎉 All done! She should get the notification on her phone."
  else
    echo "⚠️  Notification failed to send"
    echo "💡 You can manually send:"
    echo "   curl -d \"New memories!\" https://ntfy.sh/adufe-4her-updates"
  fi
else
  echo ""
  echo "❌ Deploy failed"
  echo "💡 Fix the issue and try again"
  exit 1
fi

echo ""
echo "🌐 Live site: https://4her.one"
echo "📬 Notification topic: adufe-4her-updates"
echo ""
