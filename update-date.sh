#!/bin/bash
# Quick script to update the "Last Updated" date

# Get today's date
TODAY=$(date "+%B %d, %Y")

# Update the date in index.html
sed -i '' "s/<span class=\"ongoing__date\" id=\"lastUpdated\">.*<\/span>/<span class=\"ongoing__date\" id=\"lastUpdated\">$TODAY<\/span>/" index.html

echo "✓ Updated date to: $TODAY"
echo ""
echo "Next steps:"
echo "1. Make your content changes (add photos, update letter, etc.)"
echo "2. Save index.html"
echo "3. Deploy to Netlify (drag 4her folder to netlify.com)"
echo ""
echo "Site will auto-update on her phone within 24 hours. 💜"
