/**
 * Central site configuration for NEXUS.
 *
 * Every piece of company information — name, tagline, contact details and
 * external destinations — lives here so it can be changed from one place.
 */
export const siteConfig = {
  name: "NEXUS",
  tagline: "Build. Connect. Access. Grow.",
  description:
    "NEXUS is a youth-focused technology ecosystem combining software solutions, AI access, a developer community, technology education and opportunities — all connected in one place.",

  /** Canonical production URL. Override with NEXT_PUBLIC_SITE_URL at deploy time. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexus-eco.vercel.app",

  /** Contact channels */
  email: "hello@nexusecosystem.org",
  whatsappUrl: "https://wa.me/251900000000",
  telegramUrl: "https://t.me/nexusecosystem",

  /** External product destinations */
  aiAccessUrl: "https://t.me/nexusecosystem",
  communityUrl: "https://t.me/nexusecosystem",

  /**
   * Optional external form endpoint (e.g. Formspree: https://formspree.io/f/<id>).
   * Leave empty to hide the contact form and show direct channels only.
   */
  formspreeEndpoint: "",

  /** Social profiles — shown in the footer and on the contact page. */
  socials: [
    { label: "GitHub", href: "https://github.com/nexusecosystem" },
    { label: "X (Twitter)", href: "https://x.com/nexusecosystem" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nexusecosystem" },
    { label: "Instagram", href: "https://www.instagram.com/nexusecosystem" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Primary navigation shown in the navbar (desktop and mobile). */
export const mainNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "AI Access", href: "/ai-access" },
  { label: "Community", href: "/community" },
  { label: "Learn", href: "/learn" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Labs", href: "/labs" },
] as const;

/** Secondary pages — linked from the footer and the mobile menu. */
export const secondaryNav = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
