# Valentine's Week - Complete Implementation

## ✅ What Was Added

### 1. **New Letter: "With Intention"**
- **Unlock Time:** Wednesday, February 12, 2026 at 9:00 AM
- **Location:** Letters section (will appear in the letter grid)
- **Status:** Locked until unlock time
- **Content:** Your full Valentine's week letter

### 2. **Automatic Unlock System**
✅ Letters unlock automatically at their scheduled time
✅ Roadmap cards unlock the DAY BEFORE (as you specified):
   - Wednesday card → Unlocks Tuesday Feb 11 @ 11:59 PM
   - Thursday card → Unlocks Wednesday Feb 12 @ 11:59 PM
   - Friday card → Unlocks Thursday Feb 13 @ 11:59 PM
   - Saturday card → Unlocks Friday Feb 14 @ 11:59 PM

### 3. **Text Notifications**
✅ When the letter unlocks (Wed 9 AM) → She gets a text:
   **"💌 New Letter from Praise"**
   **"With Intention" is now available to read**

✅ When each roadmap card unlocks → She gets a text:
   **"💜 Valentine's Week Update"**
   **"Thursday, February 13 — 8:30 PM is now unlocked!"**

### 4. **Locked Letter Display**
Before Wednesday 9 AM, the letter card shows:
- 🔒 Lock icon
- Blurred/dimmed appearance
- "Locked" button (can't click)
- "Available Wednesday, February 12 at 9:00 AM"

After Wednesday 9 AM, the letter:
- Becomes sharp and clear
- Shows "Read Letter →" button
- Can be clicked to read
- She gets notified automatically

## How It Works

### Timeline
**Tuesday, Feb 11 @ 11:59 PM**
- Wednesday roadmap card unlocks
- She gets text: "💜 Valentine's Week Update - Wednesday, February 12 is now unlocked!"

**Wednesday, Feb 12 @ 9:00 AM**
- "With Intention" letter unlocks
- She gets text: "💌 New Letter from Praise - 'With Intention' is now available to read"
- Letter appears in her letters grid (no longer locked)

**Wednesday, Feb 12 @ 11:59 PM**
- Thursday roadmap card unlocks
- She gets text about Thursday's plan

**And so on...**

## Notification Channel

All notifications send to: **https://ntfy.sh/praise-valentine-4her**

She'll receive push notifications on her phone when:
1. New letters unlock
2. Roadmap cards unlock

## Files Modified

1. **letters/letters.json** - Added "With Intention" letter with unlock date
2. **script.js** - Added unlock checking + notification system
3. **roadmap-styles.css** - Added locked letter card styling
4. **index.html** - Already has roadmap (no changes needed)

## Testing Before Deploy

To test the unlock logic, you can temporarily change dates:

**In `letters/letters.json`:**
```json
"unlockDate": "2024-01-01T09:00:00"  // Past date = unlocked immediately
```

**In `index.html` (roadmap cards):**
```html
data-unlock-date="2024-01-01T00:00:00"  // Past date = unlocked
```

Then refresh the page and you'll see cards unlocked.

## To Deploy

```bash
cd /Users/yimi/Desktop/4her

# Commit changes
git add .
git commit -m "Add Valentine's Week letter with unlock system + notifications"

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
# Just drag the 4her folder to your Netlify dashboard
```

## What Adufe Will Experience

### Before Wednesday 9 AM:
- Sees 2 unlocked letters ("I Watched You Shine" + "The First")
- Sees 1 LOCKED letter ("With Intention") with lock icon
- Can't click on locked letter
- Roadmap cards unlock each night before

### Wednesday at 9 AM:
- 📱 Gets notification: "💌 New Letter from Praise"
- Opens 4her.one
- Sees "With Intention" is now unlocked
- Clicks to read your full Valentine's week letter
- Sees today's roadmap card is unlocked (unlocked night before)

### Each Night:
- 📱 Gets notification when next day's roadmap unlocks
- Can check site to see what's coming tomorrow

## Design Details

**Locked Letters:**
- Slightly blurred
- 60% opacity
- Lock icon (🔒) in header
- "Locked" on button
- Gray "Available [date]" message
- Can't be clicked

**Unlocked Letters:**
- Clear and sharp
- Full opacity
- No lock icon
- "Read Letter →" button
- Clickable

**Locked Roadmap:**
- Blurred with 50% opacity
- Lock SVG icon
- "Not yet. Be patient." message
- Content hidden

**Unlocked Roadmap:**
- Gold border
- Purple-to-gold gradient
- Lock icon turns gold
- Content revealed
- Subtle pulse animation

## Notification Format

**Letter Unlock:**
```
Title: 💌 New Letter from Praise
Body: "With Intention" is now available to read
Tags: heart, love
Priority: high
```

**Roadmap Unlock:**
```
Title: 💜 Valentine's Week Update
Body: Thursday, February 13 — 8:30 PM is now unlocked!
Tags: heart, love
Priority: high
```

---

## Ready to Deploy! 🚀

Everything is set up. Just deploy and it will work automatically based on the dates you specified.

**Letter unlocks:** Wednesday 9 AM
**Roadmap unlocks:** Each night at 11:59 PM (day before)
**Notifications:** Automatic when unlocks happen

Built with intention 💜
