#!/bin/bash
# Open 4her.one Admin Dashboard locally

cd /Users/yimi/Desktop/4her

# Start simple HTTP server on port 8888
echo "🚀 Starting admin dashboard..."
echo "📊 Dashboard: http://localhost:8888/admin.html"
echo ""
echo "Password: 4her"
echo ""
echo "Press Ctrl+C to stop"
echo ""

# Open in default browser
sleep 1
open http://localhost:8888/admin.html

# Start Python server (works on macOS)
python3 -m http.server 8888
