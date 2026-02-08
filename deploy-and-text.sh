#!/bin/bash
# Deploy 4her.one and text Adufe directly

# Configuration
ADUFE_NUMBER="+19894082446" # Adufe's number
MESSAGE="💜 Hey! Praise just added new memories to your site. Check it out: https://4her.one"

echo "🚀 Deploying 4her.one to production..."
echo ""

# Deploy to Vercel
vercel --prod

# Check if deploy was successful
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Deploy successful!"
  echo ""
  
  # Check if phone number is configured
  if [ -z "$ADUFE_NUMBER" ]; then
    echo "⚠️  Phone number not configured!"
    echo "💡 Edit this script and add her number on line 4"
    echo ""
    echo "Then run: ./deploy-and-text.sh"
    exit 0
  fi
  
  echo "📱 Sending text to Adufe..."
  
  # Try WhatsApp via Clawdbot first
  clawdbot message send --channel=whatsapp --target="$ADUFE_NUMBER" --message="$MESSAGE" 2>/dev/null
  
  if [ $? -eq 0 ]; then
    echo "✅ WhatsApp message sent!"
  else
    # Fall back to iMessage (if on Mac and she has iPhone)
    osascript -e "tell application \"Messages\"
      set targetService to 1st service whose service type = iMessage
      set targetBuddy to buddy \"$ADUFE_NUMBER\" of targetService
      send \"$MESSAGE\" to targetBuddy
    end tell" 2>/dev/null
    
    if [ $? -eq 0 ]; then
      echo "✅ iMessage sent!"
    else
      echo "⚠️  Automatic texting failed"
      echo "💡 Manually text her:"
      echo "   \"$MESSAGE\""
    fi
  fi
else
  echo ""
  echo "❌ Deploy failed"
  exit 1
fi

echo ""
echo "🎉 All done!"
echo "🌐 https://4her.one"
echo ""
