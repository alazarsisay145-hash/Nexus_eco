import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Hammer, Rocket, Search } from "lucide-react";

import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Software Solutions",
  description:
    "Web development, business systems, SaaS, automation, AI solutions and custom software — built by NEXUS for startups and organizations that want to grow.",
};

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "We start with a conversation to understand your goals, users and constraints.",
  },
  {
    icon: Compass,
    step: "02",
    title: "Design",
    description:
      "We scope the right solution and design the experience before writing code.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    description:
      "We build in short iterations, sharing progress and gathering your feedback.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & grow",
    description:
      "We ship, measure and keep improving your product after it goes live.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="Software Solutions"
        title="Software that moves your business forward"
        description="From high-converting websites to complete business systems, we design and build technology that helps startups and organizations operate better and grow faster."
      >
        <Button asChild size="lg">
          <Link href="/contact">Start a project</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/labs">See our work</Link>
        </Button>
      </Hero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="What we build"
            title="Six ways we can help"
            description="Every engagement is scoped around your goals — pick a starting point and we'll shape the rest together."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="How we work"
            title="A clear process from idea to launch"
            description="No black boxes. You'll always know what we're building, why, and what comes next."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((phase) => {
              const Icon = phase.icon;
              return (
                <li
                  key={phase.step}
                  className="rounded-2xl border bg-card p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="font-display text-sm font-bold text-muted-foreground">
                      {phase.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're trying to build or improve. We'll respond with honest advice and a clear proposal — no obligation."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        primaryExternal={false}
        secondaryLabel="Explore NEXUS Labs"
        secondaryHref="/labs"
      />
    </>
  );
}
