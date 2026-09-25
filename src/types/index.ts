export type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type AIPlan = {
  name: string;
  audience: string;
  price: string;
  cadence: string;
  description: string;
  highlight?: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type ProjectStatus = "Concept" | "Building" | "Beta" | "Live";

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  image: string;
  imageAlt: string;
  href?: string;
};

export type Opportunity = {
  category: string;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  description: string;
  href: string;
};

export type Article = {
  category: string;
  title: string;
  description: string;
  href: string;
  readTime: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
