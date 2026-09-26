import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Hammer,
  MessagesSquare,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { OpportunityCard } from "@/components/opportunity-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";
import { opportunities } from "@/data/opportunities";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

const pillars = [
  {
    icon: Hammer,
    title: "Build",
    description:
      "Software solutions and real projects — from business systems to SaaS products built by young engineers.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "A developer community where builders meet collaborators, mentors and their next opportunity.",
  },
  {
    icon: Sparkles,
    title: "Access",
    description:
      "Affordable access to premium AI tools and technology that would otherwise be out of reach.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description:
      "Learning resources, challenges and curated opportunities that turn potential into careers.",
  },
];

const communityHighlights = [
  {
    icon: MessagesSquare,
    title: "Developer networking",
    description: "Meet peers, mentors and collaborators who build like you do.",
  },
  {
    icon: Hammer,
    title: "Build together",
    description: "Team up on real projects, open source and community builds.",
  },
  {
    icon: Rocket,
    title: "Events & challenges",
    description: "Hackathons, coding challenges and workshops all year round.",
  },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredArticles = articles.slice(0, 3);
  const featuredOpportunities = opportunities.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* 0 — Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,#0b0d10_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.05]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-brand-soft blur-3xl"
        />
        <Container className="relative flex flex-col items-center py-20 text-center sm:py-28 lg:py-32">
          <Badge variant="soft" className="mb-6 px-3.5 py-1 text-xs font-semibold">
            {siteConfig.tagline}
          </Badge>
          <h1 className="max-w-4xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Build the future with{" "}
            <span className="relative inline-block whitespace-nowrap">
              {siteConfig.name}
              <svg
                aria-hidden="true"
                viewBox="0 0 240 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand sm:-bottom-2.5 sm:h-3.5"
              >
                <path
                  d="M3 9c60-6 160-6 234-3"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            Software solutions, AI access, developer community and
            opportunities—all connected in one ecosystem.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="default" size="lg">
              <Link href="#ecosystem">
                Explore {siteConfig.name}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="brand" size="lg">
              <a
                href={siteConfig.communityUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Community
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            {["Software", "AI Access", "Community", "Learning", "Opportunities"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-brand"
                  />
                  {item}
                </li>
              )
            )}
          </ul>
        </Container>
      </section>

      {/* 1 — NEXUS introduction */}
      <section id="ecosystem" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="The ecosystem"
            title="One ecosystem. Every tool a young builder needs."
            description={`${siteConfig.name} is a youth-focused technology ecosystem. We connect young people, technology, businesses and opportunities through accessible digital tools and a community built around creating.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </Container>
      </section>

      {/* 2 — Software Solutions */}
      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Software Solutions"
              title="Software that moves businesses forward"
              description="We design and build websites, business systems, SaaS products and automations for startups and organizations that want to grow."
            />
            <Button asChild variant="outline">
              <Link href="/solutions">
                View all solutions
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* 3 — AI Access */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle,#7cff6b_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.07]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 right-0 h-56 w-80 rounded-full bg-brand/15 blur-3xl"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
                  <Bot className="size-4" aria-hidden="true" />
                  AI Access
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
                  Premium AI tools, without the premium price
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                  One affordable plan unlocks leading AI chat models, image
                  generation and productivity tools — built for students,
                  creators and young professionals.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="focus-visible:ring-brand focus-visible:ring-offset-ink"
                  >
                    <a
                      href={siteConfig.aiAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get AI Access
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild variant="outline-light" size="lg">
                    <Link href="/ai-access">See plans & details</Link>
                  </Button>
                </div>
              </div>
              <ul className="grid gap-3">
                {[
                  "Leading AI chat models for study, code and work",
                  "Image generation for content and design",
                  "One simple subscription — no foreign card needed",
                  "Setup help and support from the NEXUS team",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 — Developer Community */}
      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeader
                eyebrow="Developer Community"
                title="You don't have to build alone"
                description="The NEXUS community is where young developers, designers and founders share knowledge, collaborate on projects and push each other forward."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="brand">
                  <a
                    href={siteConfig.communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join {siteConfig.name} Community
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/community">
                    Explore the community
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {communityHighlights.map((highlight) => (
                <FeatureCard key={highlight.title} {...highlight} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5 — Learn */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Learn"
              title="Learn the skills that open doors"
              description="Curated learning paths and resources across programming, web development, AI, design, entrepreneurship and career growth."
            />
            <Button asChild variant="outline">
              <Link href="/learn">
                Visit the learning hub
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6 — Opportunities */}
      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Opportunities"
              title="Your next opportunity is waiting"
              description="Jobs, internships, hackathons, scholarships and programs — curated for young technologists and updated by the community."
            />
            <Button asChild variant="outline">
              <Link href="/opportunities">
                Browse opportunities
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </Container>
      </section>

      {/* 7 — NEXUS Labs */}
      <section className="py-16 sm:pt-24 sm:pb-4">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow={`${siteConfig.name} Labs`}
              title="Where we experiment and ship"
              description={`${siteConfig.name} Labs is our product studio — the place where community ideas become real tools, from early concepts to live products.`}
            />
            <Button asChild variant="outline">
              <Link href="/labs">
                Explore {siteConfig.name} Labs
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 8 — Featured projects */}
      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="sr-only">Featured projects</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* 9 — Final CTA */}
      <CTASection />
    </>
  );
}
