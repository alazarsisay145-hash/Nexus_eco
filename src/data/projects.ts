import { siteConfig } from "@/config/site";

export type ProjectStatus = "Concept" | "Building" | "Beta" | "Live";

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  image: string;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "nexus-ai-access",
    name: "NEXUS AI Access",
    description:
      "Affordable, shared access to premium AI tools for students and young professionals — one subscription, the best models.",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "Telegram API"],
    image: "/projects/nexus-ai-access.svg",
    url: siteConfig.aiAccessUrl,
  },
  {
    id: "nexus-community",
    name: "NEXUS Community Hub",
    description:
      "The home of the NEXUS developer community — discussions, collaboration channels, events and peer support.",
    status: "Live",
    technologies: ["Telegram", "Community Ops"],
    image: "/projects/nexus-community.svg",
    url: siteConfig.communityUrl,
  },
  {
    id: "nexus-learn",
    name: "NEXUS Learn",
    description:
      "A structured learning platform with curated paths in programming, web development, AI and career skills.",
    status: "Building",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/nexus-learn.svg",
  },
  {
    id: "vendora",
    name: "Vendora",
    description:
      "A lightweight commerce toolkit that helps small businesses launch online storefronts and manage orders.",
    status: "Beta",
    technologies: ["Next.js", "TypeScript", "Stripe-ready"],
    image: "/projects/vendora.svg",
  },
  {
    id: "pulse-events",
    name: "Pulse",
    description:
      "An events and hackathon toolkit for organizers — registrations, team formation and judging in one place.",
    status: "Building",
    technologies: ["React", "Node.js", "PostgreSQL-ready"],
    image: "/projects/pulse.svg",
  },
  {
    id: "atlas-api",
    name: "Atlas",
    description:
      "An open opportunities index that aggregates jobs, scholarships and programs for young technologists.",
    status: "Concept",
    technologies: ["API Design", "Data Aggregation"],
    image: "/projects/atlas.svg",
  },
];
