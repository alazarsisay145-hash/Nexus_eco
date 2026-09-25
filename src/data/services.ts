import {
  Building2,
  Code2,
  Globe,
  Layers,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, modern websites and web applications engineered for performance, accessibility and growth.",
    features: [
      "Marketing sites & landing pages",
      "Web applications & dashboards",
      "E-commerce storefronts",
      "Performance & SEO optimization",
    ],
  },
  {
    id: "business-systems",
    icon: Building2,
    title: "Business Systems",
    description:
      "Digital systems that organize how your business runs — from operations and inventory to reporting.",
    features: [
      "Operations & workflow systems",
      "Inventory & sales management",
      "Reporting & analytics dashboards",
      "Team & role management",
    ],
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Products",
    description:
      "Product design and engineering for software-as-a-service — from first prototype to a scalable platform.",
    features: [
      "MVP design & development",
      "Subscription-ready architecture",
      "Multi-tenant foundations",
      "Iteration & product analytics",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Automation",
    description:
      "Remove repetitive manual work by connecting your tools and automating the processes behind them.",
    features: [
      "Workflow & process automation",
      "Tool & API integrations",
      "Automated notifications & reports",
      "Data pipelines & syncing",
    ],
  },
  {
    id: "ai-solutions",
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Practical AI features embedded in your product or workflow — assistants, search, and content intelligence.",
    features: [
      "AI assistants & chat interfaces",
      "Knowledge search over your data",
      "Content generation workflows",
      "AI strategy & tool selection",
    ],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    description:
      "Purpose-built software for problems off-the-shelf tools can't solve, designed around how you work.",
    features: [
      "Discovery & technical scoping",
      "Custom application development",
      "Legacy system modernization",
      "Long-term support & evolution",
    ],
  },
];
