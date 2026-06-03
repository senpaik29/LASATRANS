# Lasa Trans — Landing Page

## Project Structure

```
lasatrans/
├── index.html          # Main page (single-file, no build step needed)
├── assets/
│   └── logo.svg        # Company logo — replace with the real one
└── README.md
```

## Quick Deploy Options

### 1. Netlify (recommended — free, instant)
1. Go to https://app.netlify.com/drop
2. Drag the entire `lasatrans/` folder onto the page
3. Done — live URL in seconds

### 2. Vercel
```bash
npm i -g vercel
cd lasatrans
vercel --prod
```

### 3. GitHub Pages
1. Push this folder to a GitHub repo
2. Settings → Pages → Deploy from branch `main` / `root`
3. Done

### 4. Traditional hosting (FTP/cPanel)
Upload the entire `lasatrans/` folder contents to `public_html/`

---

## Before Going Live — Checklist

### Required
- [ ] Replace `assets/logo.svg` with the real Lasa Trans logo
- [ ] Update phone number: `+420 123 456 789`
- [ ] Update email: `info@lasatrans.cz`
- [ ] Update legal info: IČO and DIČ (currently placeholder values)
- [ ] Update address if different

### Contact Form
The form currently shows a browser alert (demo mode).
To receive real emails, replace the form `action` with one of:

**Formspree (free tier, easiest):**
1. Sign up at https://formspree.io
2. Create a form, get your endpoint ID
3. In `index.html`, change the form tag to:
   `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
4. Remove the `e.preventDefault()` JS block at the bottom

**EmailJS (no backend):**
See https://www.emailjs.com for setup

### Optional improvements
- [ ] Add `favicon.ico` (use https://favicon.io to generate from logo)
- [ ] Add `robots.txt` for SEO
- [ ] Add `sitemap.xml` for SEO
- [ ] Replace Unsplash hero/service images with real company photos
- [ ] Add Google Analytics tag in `<head>`
- [ ] Update OG meta tags with real domain URL

---

## Dependencies (all CDN — no npm needed)
- Tailwind CSS v3 (CDN)
- Google Fonts: Montserrat + Inter
- Material Symbols Outlined (Google)
- Flag images: flagcdn.com
- Hero/service images: Unsplash (free for commercial use)
