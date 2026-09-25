import {
  Briefcase,
  Code2,
  Globe,
  Lightbulb,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type ArticleCategory =
  | "Programming"
  | "Web Development"
  | "AI"
  | "Design"
  | "Entrepreneurship"
  | "Career";

export type Article = {
  id: string;
  category: ArticleCategory;
  title: string;
  description: string;
  source: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  url: string;
};

export type LearningCategory = {
  name: ArticleCategory;
  icon: LucideIcon;
  description: string;
};

export const learningCategories: LearningCategory[] = [
  {
    name: "Programming",
    icon: Code2,
    description: "Foundations of computer science and problem solving.",
  },
  {
    name: "Web Development",
    icon: Globe,
    description: "Build modern websites and full-stack applications.",
  },
  {
    name: "AI",
    icon: Sparkles,
    description: "Understand and apply machine learning and AI tools.",
  },
  {
    name: "Design",
    icon: Palette,
    description: "UI, UX and the principles behind great products.",
  },
  {
    name: "Entrepreneurship",
    icon: Lightbulb,
    description: "Turn ideas into products, startups and income.",
  },
  {
    name: "Career",
    icon: Briefcase,
    description: "Portfolios, interviews and landing your first role.",
  },
];

/**
 * Curated free learning resources. Each card links to a trusted external
 * resource — update this file to change what appears in the Learn hub.
 */
export const articles: Article[] = [
  {
    id: "cs50",
    category: "Programming",
    title: "CS50: Introduction to Computer Science",
    description:
      "Harvard's legendary free course — the strongest possible foundation in programming and computational thinking.",
    source: "Harvard University",
    level: "Beginner",
    url: "https://cs50.harvard.edu/x/",
  },
  {
    id: "fcc-curriculum",
    category: "Programming",
    title: "freeCodeCamp Certifications",
    description:
      "Thousands of hands-on coding challenges and free certifications, from your first line of code to full projects.",
    source: "freeCodeCamp",
    level: "Beginner",
    url: "https://www.freecodecamp.org/learn",
  },
  {
    id: "odin-project",
    category: "Web Development",
    title: "The Odin Project — Full Stack Path",
    description:
      "A complete, project-based open-source curriculum that takes you from zero to job-ready full-stack developer.",
    source: "The Odin Project",
    level: "Beginner",
    url: "https://www.theodinproject.com",
  },
  {
    id: "mdn-docs",
    category: "Web Development",
    title: "MDN Web Docs",
    description:
      "The definitive reference and learning resource for HTML, CSS and JavaScript, maintained by Mozilla.",
    source: "Mozilla",
    level: "Intermediate",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
  },
  {
    id: "elements-of-ai",
    category: "AI",
    title: "Elements of AI",
    description:
      "A free, friendly introduction to what AI is and what it can (and can't) do — no math background required.",
    source: "University of Helsinki",
    level: "Beginner",
    url: "https://www.elementsofai.com",
  },
  {
    id: "hf-course",
    category: "AI",
    title: "Hugging Face Learn",
    description:
      "Free practical courses on large language models, transformers and building real AI applications.",
    source: "Hugging Face",
    level: "Intermediate",
    url: "https://huggingface.co/learn",
  },
  {
    id: "laws-of-ux",
    category: "Design",
    title: "Laws of UX",
    description:
      "A beautifully designed collection of psychology principles every designer and developer should know.",
    source: "Jon Yablonski",
    level: "Beginner",
    url: "https://lawsofux.com",
  },
  {
    id: "figma-learn",
    category: "Design",
    title: "Figma Learn: Design Foundations",
    description:
      "Official hands-on lessons covering design fundamentals, prototyping and collaboration in Figma.",
    source: "Figma",
    level: "Beginner",
    url: "https://www.figma.com/resource-library/design-basics/",
  },
  {
    id: "startup-school",
    category: "Entrepreneurship",
    title: "Y Combinator Startup School",
    description:
      "Free videos and a structured curriculum on building startups, from the world's leading startup accelerator.",
    source: "Y Combinator",
    level: "Intermediate",
    url: "https://www.startupschool.org",
  },
  {
    id: "roadmap-sh",
    category: "Career",
    title: "Developer Roadmaps",
    description:
      "Community-maintained visual roadmaps for every tech role — see exactly what to learn and in what order.",
    source: "roadmap.sh",
    level: "Beginner",
    url: "https://roadmap.sh",
  },
  {
    id: "tech-interview-handbook",
    category: "Career",
    title: "Tech Interview Handbook",
    description:
      "Free, curated preparation for coding interviews — algorithms, system design and behavioral rounds.",
    source: "Tech Interview Handbook",
    level: "Intermediate",
    url: "https://www.techinterviewhandbook.org",
  },
  {
    id: "how-to-start-a-startup",
    category: "Entrepreneurship",
    title: "How to Start a Startup",
    description:
      "The classic Stanford lecture series (CS183B) with Sam Altman and guests on starting and scaling companies.",
    source: "Stanford / YC",
    level: "Intermediate",
    url: "https://www.startupclass.co",
  },
];
