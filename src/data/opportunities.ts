export type OpportunityType =
  | "Job"
  | "Internship"
  | "Freelance"
  | "Hackathon"
  | "Scholarship"
  | "Event"
  | "Program";

export type Opportunity = {
  id: string;
  type: OpportunityType;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  description: string;
  url: string;
};

export const opportunityTypes: OpportunityType[] = [
  "Job",
  "Internship",
  "Freelance",
  "Hackathon",
  "Scholarship",
  "Event",
  "Program",
];

/**
 * Sample opportunity listings. Update this file to publish new opportunities —
 * cards on the site render directly from this data.
 */
export const opportunities: Opportunity[] = [
  {
    id: "gsoc",
    type: "Program",
    title: "Google Summer of Code",
    organization: "Google Open Source",
    location: "Remote · Global",
    deadline: "Applications open annually in March",
    description:
      "A global program that pays new contributors to work on open-source projects with mentoring organizations over the summer.",
    url: "https://summerofcode.withgoogle.com",
  },
  {
    id: "a2sv",
    type: "Program",
    title: "A2SV Software Engineering Training",
    organization: "Africa to Silicon Valley",
    location: "Addis Ababa & Remote",
    deadline: "Annual cohorts — applications each fall",
    description:
      "A free, intensive training program preparing high-potential African students for careers at world-class tech companies.",
    url: "https://a2sv.org",
  },
  {
    id: "nasa-space-apps",
    type: "Hackathon",
    title: "NASA Space Apps Challenge",
    organization: "NASA",
    location: "Global · Local hubs & virtual",
    deadline: "Held every October",
    description:
      "The world's largest annual hackathon — build open-source solutions to real challenges using NASA's open data.",
    url: "https://www.spaceappschallenge.org",
  },
  {
    id: "devpost-hackathons",
    type: "Hackathon",
    title: "Online Hackathons on Devpost",
    organization: "Devpost",
    location: "Remote · Global",
    deadline: "Rolling — new hackathons weekly",
    description:
      "A continuously updated catalog of online hackathons with cash prizes, open to students and professionals worldwide.",
    url: "https://devpost.com/hackathons",
  },
  {
    id: "mlh-season",
    type: "Event",
    title: "Major League Hacking Season",
    organization: "MLH",
    location: "Global · In-person & digital",
    deadline: "Events year-round",
    description:
      "Official student hackathon league with weekend events where you learn, build and meet other student developers.",
    url: "https://mlh.io",
  },
  {
    id: "mastercard-scholars",
    type: "Scholarship",
    title: "Mastercard Foundation Scholars Program",
    organization: "Mastercard Foundation",
    location: "Partner universities · Africa & global",
    deadline: "Varies by partner university",
    description:
      "Comprehensive scholarships for academically talented young people in Africa, covering tuition and leadership development.",
    url: "https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/",
  },
  {
    id: "github-education",
    type: "Program",
    title: "GitHub Student Developer Pack",
    organization: "GitHub Education",
    location: "Remote · Global",
    deadline: "Rolling",
    description:
      "Free access to dozens of professional developer tools, cloud credits and learning resources for verified students.",
    url: "https://education.github.com/pack",
  },
  {
    id: "zindi-competitions",
    type: "Freelance",
    title: "Data Science Competitions & Gigs",
    organization: "Zindi Africa",
    location: "Remote · Africa-focused",
    deadline: "Rolling — new challenges monthly",
    description:
      "Paid machine-learning competitions and short-term data gigs connecting African data scientists with real problems.",
    url: "https://zindi.africa",
  },
  {
    id: "outreachy",
    type: "Internship",
    title: "Outreachy Open Source Internships",
    organization: "Outreachy",
    location: "Remote · Global",
    deadline: "Two cohorts per year (Feb & Sep)",
    description:
      "Paid, remote internships in open source for people from groups underrepresented in tech — no prior experience required.",
    url: "https://www.outreachy.org",
  },
  {
    id: "remote-junior-roles",
    type: "Job",
    title: "Remote Junior Developer Roles",
    organization: "Wellfound (AngelList Talent)",
    location: "Remote · Global startups",
    deadline: "Rolling",
    description:
      "Startup job board with thousands of engineering roles — filter for remote, junior and internship positions.",
    url: "https://wellfound.com",
  },
];
