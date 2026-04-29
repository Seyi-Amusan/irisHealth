# IrisHealth — UI Styleguide
> Version 1.0 · React + Vite + Tailwind CSS · Light & Dark Themes

---

## 1. Brand Identity

**Brand Name:** IrisHealth  
**Logo:** Iris flower illustration + wordmark — "Iris" in purple, "Health" in near-black  
**Brand Personality:** Trustworthy, calm, approachable, modern. Not cold or clinical. Not overly playful.  
**Tone:** Clear, warm, professional.

---

## 2. Color Palette

### Primary — Iris Purple
Derived directly from the logo's purple wordmark.

| Token | Light Mode | Dark Mode | Hex |
|---|---|---|---|
| `primary-50` | Tint backgrounds | Subtle highlight | `#F3F0FB` |
| `primary-100` | Hover states | Active states | `#E0D9F5` |
| `primary-300` | Borders, accents | Muted accents | `#A48ED9` |
| `primary-500` | **Main brand color** | **Main brand color** | `#6B4EC6` |
| `primary-600` | Hover on CTAs | Hover on CTAs | `#5A3EAD` |
| `primary-700` | Pressed states | Pressed states | `#4A3090` |

### Neutral — Slate
Used for all text, backgrounds, and UI surfaces.

| Token | Light Mode | Dark Mode |
|---|---|---|
| `neutral-50` | Page background | `#1A1A2E` (deep navy-dark) |
| `neutral-100` | Card background | `#16213E` |
| `neutral-200` | Borders, dividers | `#0F3460` (subtle borders) |
| `neutral-400` | Placeholder text | `#6B7280` |
| `neutral-600` | Secondary text | `#9CA3AF` |
| `neutral-800` | Primary text | `#E5E7EB` |
| `neutral-900` | Headings | `#F9FAFB` |

### Semantic Colors
| Purpose | Color | Hex |
|---|---|---|
| Success | Soft green | `#22C55E` |
| Warning | Amber | `#F59E0B` |
| Error | Rose red | `#EF4444` |
| Info | Sky blue | `#0EA5E9` |

### Dark Mode Page Background
Dark mode uses a deep blue-navy tone (NOT pure black) to feel premium and calm:
- Background: `#0D0D1A`
- Surface (cards): `#151528`
- Elevated surface: `#1E1E38`

---

## 3. Typography

**Primary Font:** `Inter` (Google Fonts)  
**Fallback stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

> Inter was chosen for its exceptional legibility at small sizes, neutral personality, and strong healthcare/tech brand alignment.

### Type Scale

| Role | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `display` | 56px / 3.5rem | 700 | 1.1 | Hero headlines |
| `h1` | 40px / 2.5rem | 700 | 1.2 | Page titles |
| `h2` | 32px / 2rem | 600 | 1.25 | Section headings |
| `h3` | 24px / 1.5rem | 600 | 1.3 | Card headings, sub-sections |
| `h4` | 20px / 1.25rem | 600 | 1.4 | Minor headings |
| `body-lg` | 18px / 1.125rem | 400 | 1.6 | Lead paragraphs |
| `body` | 16px / 1rem | 400 | 1.6 | General body text |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | Captions, metadata |
| `label` | 12px / 0.75rem | 500 | 1.4 | Tags, badges, form labels |

### Typography Rules
- **Never go below 12px** for any visible text
- Use **weight 600** for CTAs and interactive labels
- Letter-spacing: `-0.02em` on headings, `0` on body, `+0.05em` on all-caps labels
- Paragraph max-width: **65ch** (improves readability)

---

## 4. Spacing System

Based on a **4px base unit** (Tailwind default).

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps (icon to label) |
| `space-2` | 8px | Tight padding (chips, tags) |
| `space-3` | 12px | Form field internal padding |
| `space-4` | 16px | Default component padding |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section inner spacing |
| `space-12` | 48px | Between components |
| `space-16` | 64px | Section vertical padding |
| `space-24` | 96px | Large section gaps |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` | 4px | Tags, chips |
| `rounded` | 8px | Inputs, small cards |
| `rounded-lg` | 12px | Buttons, standard cards |
| `rounded-xl` | 16px | Feature cards, modals |
| `rounded-2xl` | 20px | Hero cards, large panels |
| `rounded-full` | 9999px | Avatars, pills, badges |

---

## 6. Shadows

### Light Mode
```
shadow-sm:  0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
shadow-md:  0 4px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05)
shadow-lg:  0 12px 32px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)
shadow-xl:  0 24px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)
```

### Dark Mode
```
shadow-sm:  0 1px 3px rgba(0,0,0,0.3)
shadow-md:  0 4px 12px rgba(0,0,0,0.4)
shadow-lg:  0 12px 32px rgba(0,0,0,0.5)
shadow-xl:  0 24px 48px rgba(0,0,0,0.6)
```

### Brand Glow (Purple — use sparingly on hero CTAs)
```
shadow-primary: 0 8px 24px rgba(107, 78, 198, 0.35)
```

---

## 7. Component Tokens

### Buttons

| Variant | Light Background | Light Text | Dark Background | Dark Text |
|---|---|---|---|---|
| Primary | `#6B4EC6` | White | `#6B4EC6` | White |
| Primary Hover | `#5A3EAD` | White | `#7B5ED6` | White |
| Secondary | `#F3F0FB` | `#6B4EC6` | `#1E1E38` | `#A48ED9` |
| Ghost | Transparent | `#6B4EC6` | Transparent | `#A48ED9` |
| Danger | `#EF4444` | White | `#EF4444` | White |

**Button sizing:**
- `sm`: px-3 py-1.5, text-sm, rounded-lg
- `md`: px-5 py-2.5, text-base, rounded-lg ← default
- `lg`: px-7 py-3.5, text-lg, rounded-xl

### Inputs / Form Fields
- Border: `1.5px solid` neutral-200 (light) / neutral-700 (dark)
- Focus border: `primary-500` with `ring-2 ring-primary-500/20`
- Background: white (light) / `#151528` (dark)
- Border radius: `rounded-lg`
- Padding: `px-4 py-3`
- Label: 14px, weight 500, above the field

### Cards
- Background: white (light) / `#151528` (dark)
- Border: `1px solid` neutral-100 (light) / `rgba(255,255,255,0.06)` (dark)
- Border radius: `rounded-xl` standard, `rounded-2xl` featured
- Padding: `p-6` standard
- Hover: subtle lift with `shadow-lg` transition

---

## 8. Iconography

**Icon Library:** `Lucide React` — matches Inter's clean geometric style  
**Size defaults:**
- Navigation icons: 20px
- Body/feature icons: 24px
- Hero/illustration icons: 48px+

**Icon color:** Always inherits text color or uses `primary-500` for emphasis. Never use raw black.

---

## 9. Layout & Grid

**Max content width:** `1280px` (`max-w-7xl`)  
**Content padding:** `px-4` (mobile) → `px-6` (tablet) → `px-8` (desktop)  
**Grid system:** 12-column grid via Tailwind's `grid` utilities

### Breakpoints (Tailwind defaults)
| Name | Min Width | Usage |
|---|---|---|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Standard desktops |
| `2xl` | 1536px | Wide screens |

---

## 10. Motion & Animation

**Principle:** Subtle and purposeful. Never animate for decoration alone.

| Type | Duration | Easing |
|---|---|---|
| Micro (hover, focus) | 150ms | `ease-out` |
| Standard (expand, reveal) | 250ms | `ease-in-out` |
| Page transition | 350ms | `ease-in-out` |
| Complex (modal, slide) | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` |

```css
/* Default transition class */
transition-all duration-200 ease-out
```

---

## 11. Dark Mode Strategy

**Implementation:** Tailwind `darkMode: 'class'` — toggled by adding `dark` class to `<html>`  
**Storage:** `localStorage.setItem('theme', 'dark' | 'light')`  
**Default:** Respect `prefers-color-scheme`, fallback to light

```js
// Theme toggle logic
const root = document.documentElement;
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved === 'dark' || (!saved && prefersDark)) {
  root.classList.add('dark');
}
```

### Dark Mode Color Overrides Summary
| Element | Light | Dark |
|---|---|---|
| Page bg | `#FFFFFF` | `#0D0D1A` |
| Card bg | `#FFFFFF` | `#151528` |
| Elevated surface | `#F9FAFB` | `#1E1E38` |
| Primary text | `#111827` | `#F9FAFB` |
| Secondary text | `#6B7280` | `#9CA3AF` |
| Border | `#E5E7EB` | `rgba(255,255,255,0.08)` |
| Primary brand | `#6B4EC6` | `#6B4EC6` (same) |

---

## 12. Tailwind Config Reference

```js
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#F3F0FB',
          100: '#E0D9F5',
          300: '#A48ED9',
          500: '#6B4EC6',
          600: '#5A3EAD',
          700: '#4A3090',
        },
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        'primary': '0 8px 24px rgba(107, 78, 198, 0.35)',
      },
    },
  },
  plugins: [],
}
```

---

## 13. File Structure Convention

```
src/
├── assets/
│   └── logo/
│       ├── iris_logo_clean.png   ← transparent background logo
│       └── iris_logo_dark.png    ← white version for dark navbar
├── components/
│   ├── ui/                       ← Button, Input, Card, Badge, etc.
│   ├── layout/                   ← Navbar, Footer, PageWrapper
│   └── sections/                 ← Hero, Services, Doctors, etc.
├── pages/                        ← Home, About, Services, Contact, etc.
├── hooks/                        ← useTheme, useScrolled, etc.
├── context/                      ← ThemeContext
└── styles/
    └── index.css                 ← Tailwind imports + custom base styles
```

---

## 14. Do's & Don'ts

### Do
- Use `primary-500` as the only accent color — keep it consistent
- Pair white cards with subtle `shadow-md` in light mode
- Use `rounded-xl` as the default card radius
- Use Inter at weight 400/600 only (avoid 300 and 800+)
- Keep section vertical padding at minimum `py-16`

### Don't
- Never use pure `#000000` black — use `neutral-900`
- Never use pure `#FFFFFF` white in dark mode — use `#151528`
- Don't mix multiple accent colors
- Don't use gradient backgrounds on text-heavy sections
- Don't animate layout-shifting properties (`width`, `height`) — animate `opacity` and `transform` only

---

*Last updated: April 2026 · IrisHealth Project*