# EliteDrive – Travel & Car Rental Website

A premium, fully responsive travel and car rental agency demo website built with **React + Vite + TailwindCSS**.

---

## 🚀 Quick Start

```bash
# 1. Extract the zip and enter the folder
cd elitedrive

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
# Output goes to /dist — ready to deploy
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repository
2. Go to https://vercel.com → **New Project** → Import repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done in ~60 seconds ✅

### Option C — Netlify
```bash
npm run build
# Drag & drop the /dist folder onto netlify.com/drop
```

---

## 🗂 Project Structure

```
elitedrive/
├── index.html               # SEO meta tags, Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js       # Custom colors, fonts, animations
├── postcss.config.js
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # Layout + floating action buttons
    ├── index.css            # Tailwind + global styles + reveal classes
    ├── hooks/
    │   └── useReveal.js     # IntersectionObserver scroll animations
    └── components/
        ├── Navbar.jsx       # Sticky, transparent→glass on scroll, mobile menu
        ├── Hero.jsx         # Auto-cycling background, stats, CTA buttons
        ├── Services.jsx     # 5 service cards + custom request card
        ├── Fleet.jsx        # 6 vehicle cards with images, ratings, booking
        ├── WhyChooseUs.jsx  # Split layout, trust points, floating stat
        ├── Packages.jsx     # 3 travel packages with images and pricing
        ├── Gallery.jsx      # Masonry grid with lightbox
        ├── Testimonials.jsx # Auto-rotating carousel (4 testimonials)
        ├── Contact.jsx      # Contact cards, Google Map, form with validation
        └── Footer.jsx       # Brand, links, services, contacts, socials
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary dark | `#0D1B2A` (navy-900) |
| Accent gold | `#C9A84C` (gold-500) |
| Light gold | `#F5D98B` |
| Display font | Playfair Display |
| Body font | DM Sans |
| Mono font | DM Mono |

---

## ✏️ Customising for a Client

| What to change | Where |
|---|---|
| Business name | Search `EliteDrive` across all files |
| Phone number | Replace `+919999999999` in all `href` and `tel:` attributes |
| WhatsApp number | Replace `919999999999` in all `wa.me` links |
| Email address | `hello@elitedrive.in` in `Contact.jsx` and `Footer.jsx` |
| Address | `123 Travel Hub…` in `Contact.jsx` and `Footer.jsx` |
| Google Maps embed | The `iframe src` inside `Contact.jsx` |
| Car images | Replace Unsplash URLs in `Fleet.jsx` |
| Hero images | Replace Unsplash URLs in `Hero.jsx` |
| Pricing | Update in `Fleet.jsx` and `Packages.jsx` |
| Logo | Replace the `<Car>` icon in `Navbar.jsx` and `Footer.jsx` with an `<img>` tag |

---

## ✅ Features Checklist

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Smooth scroll navigation
- [x] Scroll-triggered reveal animations
- [x] Auto-cycling hero with crossfade
- [x] Floating WhatsApp + Call buttons
- [x] Gallery lightbox
- [x] Testimonials auto-carousel
- [x] Contact form with success state
- [x] Embedded Google Map
- [x] SEO meta tags
- [x] Performance-optimised (lazy images, CSS-only animations)
- [x] No external animation library dependencies
- [x] Deploy-ready (Vercel/Netlify)

---

## 📄 License

Demo project — free to use and customise for client presentations.
