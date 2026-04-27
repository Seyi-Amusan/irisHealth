# Prohab Clinics — React Replica

A React + Tailwind multi-page replica of a UK physiotherapy clinic homepage in the style of prohabclinics.co.uk.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS** (custom brand palette)
- **React Router v6** (Home / Services / About / Team / Contact)
- Inline SVG icon set (no icon library dependency)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx              # Routes + layout
  main.jsx             # Entry point
  index.css            # Tailwind layers + utility classes
  components/
    Navbar.jsx         # Sticky responsive nav
    Footer.jsx         # 4-column footer
    Logo.jsx
    Section.jsx        # Reusable section wrapper
    Icon.jsx           # Inline SVG icons
    CTASection.jsx     # Reusable book-now CTA
  pages/
    Home.jsx           # Hero, services, why-us, process, testimonials
    Services.jsx       # All services + pricing
    About.jsx          # Story, stats, values
    Team.jsx           # Clinician cards
    Contact.jsx        # Form + contact info
  data/
    services.js
    team.js
    testimonials.js
```

## Notes

This is a faithful style re-creation (not a pixel-accurate copy) — copy and structure are based on typical UK physiotherapy clinic sites. Swap content in `src/data/*.js` and the relevant pages to match your real clinic.
