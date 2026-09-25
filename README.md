# NEXUS

NEXUS is a production-ready Next.js marketing platform for a youth and campus social ecosystem. The site brings together software solutions, AI Access, community, learning resources, labs, and opportunities in one polished experience.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Lucide icons

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to explore the site locally.

## Project structure

- `src/app` — route pages, root layout, metadata files, loading/error states
- `src/components` — shared layout, cards, CTA, navigation, and UI primitives
- `src/config/site.ts` — brand settings, page navigation, social links, and shared copy
- `src/data` — reusable content for plans, services, FAQs, articles, projects, and opportunities

## Validation

```bash
npm run lint
npm run build
```

## Deployment

The project is ready to deploy on Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy and use the generated production domain, or connect the preferred custom domain for NEXUS.

## Content updates

Keep the site content data-driven:

- update navigation, contact details, AI tools, and social links in `src/config/site.ts`
- update reusable page content in `src/data/*`
- keep route pages focused on composition instead of hardcoded marketing copy where shared data already exists
