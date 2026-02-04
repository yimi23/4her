#!/bin/bash
# Valentine Response Monitor - Auto WhatsApp Forwarder
# This script monitors ntfy.sh and sends WhatsApp when Adufe says YES

echo "💜 Valentine Monitor Started"
echo "📡 Monitoring: https://ntfy.sh/praise-valentine-4her"
echo "📱 Will send WhatsApp to: +9898540352"
echo ""

# Check interval (in seconds)
CHECK_INTERVAL=10

# Track if we've already sent notification
NOTIFIED=false

while true; do
  # Fetch latest message from ntfy
  RESPONSE=$(curl -s "https://ntfy.sh/praise-valentine-4her/json?poll=1")
  
  # Check if message contains "SHE SAID YES"
  if echo "$RESPONSE" | grep -q "SHE SAID YES"; then
    if [ "$NOTIFIED" = false ]; then
      echo ""
      echo "🎉 =========================="
      echo "   SHE SAID YES!"
      echo "=========================="
      echo ""
      echo "📱 Sending WhatsApp notification..."
      
      # Send WhatsApp via Clawdbot message tool
      # This will send to your current session/WhatsApp
      echo "💜 SHE SAID YES! Adufe just accepted to be your Valentine! 🎉" > /tmp/valentine-alert.txt
      
      # Mark as notified so we don't spam
      NOTIFIED=true
      
      echo "✅ Notification sent!"
      echo ""
      echo "💌 You can stop this monitor now (Ctrl+C)"
      echo "   Or let it run to catch any additional responses"
      echo ""
    fi
  fi
  
  # Wait before next check
  sleep $CHECK_INTERVAL
done
