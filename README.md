# NEXUS — Build. Connect. Access. Grow.

The official website for **NEXUS**, a youth-focused technology ecosystem combining software solutions, AI access, a developer community, technology education, opportunities and NEXUS Labs.

Built frontend-first: no database, no authentication, no backend — every page is statically generated and all content lives in local TypeScript data files.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)-style components (Radix UI primitives)
- [Lucide](https://lucide.dev) icons
- Self-hosted Inter & Manrope variable fonts (SIL OFL, see `src/fonts/`)

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build (fully static)
npm run start    # serve the production build
npm run lint     # eslint
```

## Editing site content

All company information and content is configuration/data driven — no copy is hard-coded inside components.

| What to change | Where |
| --- | --- |
| Name, tagline, email, WhatsApp/Telegram, social URLs, AI Access URL, community URL, contact-form endpoint | `src/config/site.ts` |
| Service cards (Solutions) | `src/data/services.ts` |
| AI Access plans & pricing | `src/data/ai-plans.ts` |
| NEXUS Labs projects | `src/data/projects.ts` |
| Opportunity listings | `src/data/opportunities.ts` |
| Learn hub resources & categories | `src/data/articles.ts` |
| FAQs (AI Access + general) | `src/data/faqs.ts` |

Notes:

- The values currently in `src/config/site.ts` (email, social handles, wa.me number) are launch placeholders — set the real ones before going live.
- **Contact form**: set `formspreeEndpoint` in `src/config/site.ts` to a [Formspree](https://formspree.io) endpoint (e.g. `https://formspree.io/f/<id>`) and a working contact form appears on `/contact`. While it's empty, the page shows direct contact channels only.
- **Canonical URL**: set the `NEXT_PUBLIC_SITE_URL` environment variable at deploy time (used for SEO metadata, `sitemap.xml` and `robots.txt`), or edit the fallback in `src/config/site.ts`.
- Opportunity listings are sample curated data — refresh them in `src/data/opportunities.ts` as deadlines change.

## Project structure

```
src/
├── app/                # App Router pages (all server components)
│   ├── page.tsx        # Home (hero + 9 sections)
│   ├── solutions/      # Software services
│   ├── ai-access/      # AI Access — plans, tools, FAQ
│   ├── community/      # Developer community
│   ├── learn/          # Learning hub
│   ├── opportunities/  # Curated opportunities
│   ├── labs/           # Product/project showcase
│   ├── about/          # Mission, vision, beliefs
│   ├── contact/        # Contact channels (+ optional form)
│   ├── sitemap.ts      # sitemap.xml
│   ├── robots.ts       # robots.txt
│   ├── icon.svg        # favicon
│   └── opengraph-image.tsx  # generated Open Graph image
├── components/         # Reusable components (Navbar, Footer, Hero, cards…)
│   └── ui/             # shadcn/ui primitives (Button, Badge, Card, Sheet…)
├── config/site.ts      # single source of truth for company info
├── data/               # static content (services, plans, projects…)
├── fonts/              # self-hosted variable fonts
└── lib/utils.ts        # cn() helper
```

## Design system

- Colors: ink `#0B0D10`, white `#FFFFFF`, NEXUS green `#7CFF6B`, soft green `#DFFFD8`, surface `#F7F8F6`, gray `#6B7280` — defined once in `src/app/globals.css`.
- Typography: Manrope (display) + Inter (body), self-hosted via `next/font/local`.
- Accessibility: semantic HTML, skip link, keyboard-navigable menus (Radix), visible focus states, `prefers-reduced-motion` support and AA-contrast text colors.

## Upgrading later

The architecture is deliberately backend-ready: pages are server components, content flows through typed data modules, and external actions (join, AI access, contact) are config-driven URLs. To add accounts, subscriptions or payments later, swap the data modules for API/database calls and add route handlers — no page or component rewrites required.
