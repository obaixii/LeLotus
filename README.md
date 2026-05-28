# Le Lotus Clinique — Official Website

> A fully responsive, client-facing website for Le Lotus Clinique, a premium aesthetic medicine practice. This repository contains the complete frontend codebase for the clinic's rebranded digital presence.

---

## Overview

The Le Lotus Clinique website serves as the primary digital touchpoint for patients and prospective clients. It presents the clinic's services, medical team, treatment offerings, and appointment booking system in a refined, brand-consistent interface.

The project was built with a focus on performance, maintainability, and visual fidelity to the clinic's identity — combining a custom design system with modern frontend tooling.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 + Custom CSS |
| Routing | React Router v6 |
| Linting | ESLint with TypeScript rules |

---

<!-- ## Project Structure

```
LeLotus/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Logo, images, icons
│   ├── components/          # Shared UI components (Nav, Footer)
│   ├── pages/               # Page-level components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Treatments.tsx
│   │   ├── Doctors.tsx
│   │   ├── BeforeAfter.tsx
│   │   └── Booking.tsx
│   ├── styles/
│   │   ├── index.css        # Global entry point & Tailwind import
│   │   ├── animations.css
│   │   ├── responsive.css
│   │   ├── nav.css
│   │   ├── footer.css
│   │   └── pages/           # Per-page stylesheets
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

--- -->

<!-- ## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section, service highlights, statistics, and testimonials |
| `/about` | About | Clinic story, values, and team introduction |
| `/treatments` | Treatments | Filterable catalogue of aesthetic procedures |
| `/doctors` | Doctors | Medical team profiles with credentials |
| `/before-after` | Before & After | Patient transformation gallery |
| `/booking` | Booking | Appointment request form |

--- -->


## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/obaixii/LeLotus.git
cd LeLotus

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build & Preview

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Development Notes

- All custom CSS variables must use the `--color-` prefix to align with Tailwind v4's `@theme` token convention (e.g. `var(--color-teal)`, not `var(--teal)`)
- Page-specific styles are scoped to their respective files under `src/styles/pages/`
- Shared component styles (buttons, tags, section labels) are defined globally in `index.css`
- Inline styles in TSX are reserved for dynamic values only (e.g. per-item background gradients)

---


*Le Lotus Clinique — Redefining Aesthetic Care.*