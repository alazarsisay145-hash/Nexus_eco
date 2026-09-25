import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "NEXUS Launchpad",
    description:
      "A project readiness workspace helping young builders shape ideas, track milestones, and prepare public launches.",
    status: "Building",
    technologies: ["Next.js", "TypeScript", "Design Systems"],
    image: "/images/projects/launchpad.svg",
    imageAlt: "Abstract dashboard illustration for NEXUS Launchpad",
    href: "https://github.com/alazarsisay145-hash/Nexus_eco",
  },
  {
    name: "NEXUS Mentor Match",
    description:
      "An ecosystem concept for connecting emerging talent with mentors, operators, and technical collaborators.",
    status: "Concept",
    technologies: ["Product Strategy", "Community Ops", "Matching Flows"],
    image: "/images/projects/mentor-match.svg",
    imageAlt: "Abstract connection map illustration for NEXUS Mentor Match",
  },
  {
    name: "NEXUS Signal",
    description:
      "A curated opportunities feed for internships, scholarships, hackathons, and programs tailored to young builders.",
    status: "Beta",
    technologies: ["Content Curation", "Automation", "Responsive UX"],
    image: "/images/projects/signal.svg",
    imageAlt: "Abstract feed interface illustration for NEXUS Signal",
    href: "https://github.com/alazarsisay145-hash/Nexus_eco",
  },
  {
    name: "NEXUS Studio Sites",
    description:
      "A live service line focused on high-performance brand and product websites for ambitious organizations.",
    status: "Live",
    technologies: ["Frontend Engineering", "Brand Systems", "SEO"],
    image: "/images/projects/studio-sites.svg",
    imageAlt: "Abstract website grid illustration for NEXUS Studio Sites",
    href: "mailto:hello@nexus.eco?subject=Studio%20Sites%20with%20NEXUS",
  },
];
