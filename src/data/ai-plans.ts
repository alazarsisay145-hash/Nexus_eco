/**
 * AI Access plan data.
 *
 * Plans are defined once here and rendered by <AIPlanCard />. Edit prices,
 * features or plan names in this file only — nothing is hard-coded in
 * components.
 */
export type AIPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
};

export const aiPlans: AIPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$5",
    period: "per month",
    description:
      "For students and first-time users who want reliable access to leading AI tools.",
    features: [
      "Access to leading AI chat models",
      "Standard daily usage limits",
      "Community support on Telegram",
      "Getting-started prompt guides",
    ],
    ctaLabel: "Get Starter Access",
  },
  {
    id: "plus",
    name: "Plus",
    price: "$10",
    period: "per month",
    description:
      "For builders and creators who use AI every day for study, work and projects.",
    features: [
      "Everything in Starter",
      "Premium models & image generation",
      "Higher usage limits",
      "Priority support",
      "Early access to new tools",
    ],
    popular: true,
    ctaLabel: "Get Plus Access",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$18",
    period: "per month",
    description:
      "For professionals and teams who depend on AI for serious daily output.",
    features: [
      "Everything in Plus",
      "Highest usage limits",
      "Advanced & specialized models",
      "Team onboarding assistance",
      "Direct support channel",
    ],
    ctaLabel: "Get Pro Access",
  },
];
