# 📮 How to Add a New Letter

## Quick Steps:

1. Open `letters.json`
2. Add your new letter at the **TOP** of the `"letters"` array (it will show as latest)
3. Copy this template:

```json
{
  "id": "2026-02-XX",
  "date": "February XX, 2026",
  "title": "Letter Title",
  "preview": "First sentence or opening line...",
  "content": [
    "Adufe,",
    "First paragraph here...",
    "Second paragraph...",
    "etc..."
  ],
  "signature": "With love,<br><strong>Praise</strong>"
}
```

4. Deploy to Vercel/Netlify
5. Done! Site auto-updates.

## Important:

- **Date format:** "February 6, 2026" (full month name)
- **ID format:** "2026-02-06" (YYYY-MM-DD)
- **Content:** Each paragraph is a separate string in the array
- **HTML allowed:** Use `<strong>`, `<em>`, `<br>` for formatting
- **Add comma:** Don't forget the comma after the `}` if adding between letters

## Example:

```json
{
  "letters": [
    {
      "id": "2026-02-10",
      "date": "February 10, 2026",
      "title": "Just Because",
      "preview": "I was thinking about you today...",
      "content": [
        "Adufe,",
        "I was thinking about you today and wanted to write this down.",
        "You make every day feel lighter. That's rare.",
        "Just wanted you to know."
      ],
      "signature": "Yours,<br><strong>Praise</strong>"
    },
    {
      "id": "2026-02-06",
      ...existing letters below...
    }
  ]
}
```

---

**That's it.** The site handles everything else automatically.
