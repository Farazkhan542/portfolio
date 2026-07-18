# Muhammad Faraz Khan — Portfolio

Personal portfolio built with **Next.js 15** (App Router) + **Tailwind CSS v3** using a
token-based design system (shadcn-style primitives, light/dark themes via `next-themes`).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option A — GitHub (recommended):**

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.

**Option B — CLI:**

```bash
npx vercel
```

## Structure

```
app/
  layout.js            # fonts (DM Sans, Geist, Geist Mono), ThemeProvider, metadata
  page.js              # composes all sections
  globals.css          # HSL design tokens (:root light / .dark), base styles
  icon.svg             # favicon
tailwind.config.js     # tokens wired into Tailwind (colors, shadows, radius, keyframes)
lib/utils.js           # cn() = clsx + tailwind-merge
components/
  ui/                  # shadcn-style primitives: Card, Button (cva), Badge (cva)
  Icons.jsx            # stroke SVG icon set (single swap point)
  ThemeProvider.jsx    # next-themes wrapper (class-based dark mode)
  ThemeToggle.jsx      # sun/moon toggle in the navbar
  SectionHeader.jsx    # micro-label + title pattern
  Navbar.jsx           # fixed blurred header, active-section highlight, mobile menu
  Hero.jsx             # typing effect + terminal card + floating badges
  Stats.jsx            # 4-up metric cards with tinted icon chips + counters
  About / Experience / Projects / Skills / Contact / Footer
  Effects.jsx          # scroll progress bar + reveal-on-scroll observer
```

## Design system

- **Colors** are HSL triples in `globals.css` (`--token: H S% L%`), consumed as
  `hsl(var(--token))`. Light theme in `:root`, dark in `.dark`. To recolor the whole
  site, change the numbers — nothing else.
- **Brand**: lime `--primary` + amber `--highlight`; dark background is brand-tinted
  charcoal, not neutral gray.
- **Typography**: DM Sans headings (`font-heading`), Geist body (`font-sans`),
  Geist Mono numerics/tags (`font-mono`); numbers use `tabular-nums`.
- **Shadows/radius**: `shadow-card` → `shadow-elevated` on hover; radius driven by
  `--radius`.
- Content lives in the data arrays at the top of each section component
  (`PROJECTS`, `JOBS`, `SKILL_GROUPS`, `STATS`, `ROLES`).
