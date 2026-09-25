import { siteConfig } from "@/config/site";
import type { AIPlan } from "@/types";

export const aiPlans: AIPlan[] = [
  {
    name: "Starter Access",
    audience: "Students and curious beginners",
    price: "$12",
    cadence: "/month",
    description:
      "A simple starting point for guided AI usage, practical tools, and beginner-friendly onboarding.",
    features: [
      "Access guidance for core AI tools",
      "Monthly onboarding session",
      "Prompt starter packs for study and research",
      "Community support pathway",
    ],
    ctaLabel: "Get AI Access",
    ctaHref: siteConfig.aiAccessUrl,
  },
  {
    name: "Builder Access",
    audience: "Developers, creators, and founders",
    price: "$29",
    cadence: "/month",
    description:
      "For people actively building products, portfolios, and experiments with AI woven into their workflow.",
    highlight: "Most popular",
    featured: true,
    features: [
      "Everything in Starter Access",
      "Curated tool stack recommendations",
      "Productivity and coding workflows",
      "Priority Q&A and resource drops",
    ],
    ctaLabel: "Get AI Access",
    ctaHref: siteConfig.aiAccessUrl,
  },
  {
    name: "Team Access",
    audience: "Small teams and innovation programs",
    price: "$99",
    cadence: "/month",
    description:
      "Shared AI enablement for organizations, programs, or campus initiatives that want structured adoption.",
    features: [
      "Multi-seat enablement guidance",
      "AI policy and workflow templates",
      "Tailored onboarding for team use cases",
      "Quarterly optimization review",
    ],
    ctaLabel: "Get AI Access",
    ctaHref: siteConfig.aiAccessUrl,
  },
];
