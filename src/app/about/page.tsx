import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  Globe,
  GraduationCap,
  HandHeart,
  Hammer,
  Lightbulb,
  Rocket,
  Store,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NEXUS is a youth-focused technology ecosystem connecting young people, technology, businesses and opportunities through accessible digital tools and community.",
};

const beliefs = [
  {
    icon: Users,
    title: "Talent is everywhere",
    description:
      "Opportunity isn't. We exist to close that gap for young people with the will to build.",
  },
  {
    icon: Hammer,
    title: "Creating beats consuming",
    description:
      "The fastest way to grow is to make things. Everything we do pushes people to build.",
  },
  {
    icon: HandHeart,
    title: "Access should be affordable",
    description:
      "World-class tools shouldn't be locked behind foreign cards and enterprise prices.",
  },
  {
    icon: Lightbulb,
    title: "Community compounds",
    description:
      "Knowledge shared multiplies. A connected generation of builders lifts everyone.",
  },
];

const whatWeBuild = [
  {
    icon: Globe,
    title: "Software for businesses",
    description:
      "Websites, systems, SaaS and automation that help organizations grow.",
  },
  {
    icon: Rocket,
    title: "Products in NEXUS Labs",
    description:
      "Our own tools — from AI access to community platforms — built in the open.",
  },
  {
    icon: GraduationCap,
    title: "Paths for people",
    description:
      "Learning tracks, challenges and opportunities that turn beginners into professionals.",
  },
];

const whoWeServe = [
  {
    icon: Users,
    title: "Young builders",
    description:
      "Students, self-taught developers, designers and creators at the start of their journey.",
  },
  {
    icon: Store,
    title: "Small businesses & startups",
    description:
      "Teams that need serious technology delivered with speed, care and honest pricing.",
  },
  {
    icon: Globe,
    title: "The wider ecosystem",
    description:
      "Communities, schools and organizations investing in the next generation of tech talent.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={`About ${siteConfig.name}`}
        title="A technology ecosystem built by and for young people"
        description={`${siteConfig.name} combines software solutions, AI access, a developer community, technology education and opportunities — connected so that each part strengthens the others.`}
      >
        <Button asChild size="lg">
          <Link href="/contact">Work with us</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/community">Meet the community</Link>
        </Button>
      </Hero>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-ink p-8 sm:p-10">
              <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
                <Target className="size-4" aria-hidden="true" />
                Mission
              </p>
              <p className="mt-5 font-display text-2xl leading-snug font-bold tracking-tight text-white sm:text-3xl">
                “To connect young people, technology, businesses and
                opportunities through accessible digital tools and a community
                built around creating.”
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-8 sm:p-10">
              <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                <Eye className="size-4" aria-hidden="true" />
                Vision
              </p>
              <p className="mt-5 font-display text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
                A generation of young people who don&apos;t wait for
                opportunity — they build it, together.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="What we believe"
            title="The principles behind everything"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((belief) => (
              <FeatureCard key={belief.title} {...belief} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="What we build"
            title="Three kinds of work, one ecosystem"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whatWeBuild.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Who we serve"
            title="Built for the people doing the work"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whoWeServe.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Build the future with ${siteConfig.name}`}
        description="Whether you want to join the community, get AI access or start a project — the ecosystem is open."
      />
    </>
  );
}
