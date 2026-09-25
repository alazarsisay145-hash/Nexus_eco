import { siteConfig } from "@/config/site";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    icon: "Globe",
    title: "Web Development",
    description:
      "Conversion-focused marketing sites, product platforms, and content experiences built for speed and credibility.",
    features: ["App Router websites", "Landing pages", "CMS-ready architecture"],
    ctaLabel: "Talk to NEXUS",
    ctaHref: `mailto:${siteConfig.email}?subject=Web%20Development%20with%20NEXUS`,
  },
  {
    icon: "BriefcaseBusiness",
    title: "Business Systems",
    description:
      "Internal tools and digital workflows that help teams organize operations, reporting, and service delivery.",
    features: ["Operations dashboards", "Process design", "Workflow mapping"],
    ctaLabel: "Discuss your system",
    ctaHref: `mailto:${siteConfig.email}?subject=Business%20Systems%20with%20NEXUS`,
  },
  {
    icon: "Layers3",
    title: "SaaS",
    description:
      "Scalable software-as-a-service product design and frontends that are ready to connect to future backend services.",
    features: ["MVP architecture", "Multi-page UX", "Upgrade-ready structure"],
    ctaLabel: "Plan a SaaS build",
    ctaHref: `mailto:${siteConfig.email}?subject=SaaS%20Planning%20with%20NEXUS`,
  },
  {
    icon: "Workflow",
    title: "Automation",
    description:
      "Automated customer journeys, notifications, and productivity systems that remove repetitive manual work.",
    features: ["Workflow automation", "No-code integrations", "Team productivity systems"],
    ctaLabel: "Explore automation",
    ctaHref: `mailto:${siteConfig.email}?subject=Automation%20with%20NEXUS`,
  },
  {
    icon: "Sparkles",
    title: "AI Solutions",
    description:
      "Practical AI-enabled interfaces, prompt workflows, and experimentation that make advanced tools more accessible.",
    features: ["AI-first UX", "Prompt workflows", "AI adoption guidance"],
    ctaLabel: "Design an AI solution",
    ctaHref: `mailto:${siteConfig.email}?subject=AI%20Solutions%20with%20NEXUS`,
  },
  {
    icon: "Cpu",
    title: "Custom Software",
    description:
      "Purpose-built digital products for organizations, startups, and initiatives solving local or global challenges.",
    features: ["Custom product strategy", "Component systems", "Future backend compatibility"],
    ctaLabel: "Start a custom project",
    ctaHref: `mailto:${siteConfig.email}?subject=Custom%20Software%20with%20NEXUS`,
  },
];
