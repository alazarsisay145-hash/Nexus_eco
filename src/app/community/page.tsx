import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  GitBranch,
  Hammer,
  Lightbulb,
  MessagesSquare,
  Network,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Developer Community",
  description:
    "Join the NEXUS developer community — networking, collaboration, real projects, events, challenges and resources for young builders.",
};

const whyJoin = [
  {
    icon: Users,
    title: "People who build like you",
    description:
      "Surround yourself with ambitious developers, designers and founders who take creating seriously.",
  },
  {
    icon: Lightbulb,
    title: "Learn faster together",
    description:
      "Get unstuck in minutes with peer support, code reviews and honest feedback on your work.",
  },
  {
    icon: Target,
    title: "Opportunities find you",
    description:
      "Gigs, collaborations and referrals flow through the community before they reach job boards.",
  },
];

const pillars = [
  {
    icon: Network,
    title: "Developer networking",
    description:
      "Meet peers and mentors across the ecosystem. Introduce yourself, share what you're building and grow a network that compounds over your career.",
  },
  {
    icon: GitBranch,
    title: "Collaboration",
    description:
      "Find teammates for your next idea or join an existing build. Members team up on open source, client work and community tools.",
  },
  {
    icon: Hammer,
    title: "Projects",
    description:
      "Ship real things. Community projects graduate into NEXUS Labs, and the best work gets showcased to the whole ecosystem.",
  },
  {
    icon: CalendarDays,
    title: "Events",
    description:
      "Workshops, study jams, demo days and meetups — online and in person — that keep you learning and connected all year.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    description:
      "Regular coding challenges and mini-hackathons with recognition and prizes. Build your portfolio while competing with friends.",
  },
  {
    icon: BookOpen,
    title: "Resources",
    description:
      "Curated guides, templates, starter kits and tool discounts shared by members — everything you need to move faster.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Hero
        eyebrow="Developer Community"
        title="You don't have to build alone"
        description="The NEXUS community brings together young developers, designers and founders who share knowledge, collaborate on real projects and open doors for each other."
      >
        <Button asChild variant="brand" size="lg">
          <a
            href={siteConfig.communityUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join {siteConfig.name} Community
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/opportunities">See opportunities</Link>
        </Button>
      </Hero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Why join"
            title="Growth is a team sport"
            description="Talent grows fastest in community. Here's what changes when you join."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whyJoin.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Inside the community"
            title="Everything a builder needs"
            description="Six spaces designed to help you connect, collaborate and level up."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="How it works"
                title="Free to join. Easy to belong."
                description="Membership is free and open to any young person serious about technology. Join the community space, introduce yourself, and start participating — that's it."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Introduce yourself and what you're building",
                  "Ask questions and help others when you can",
                  "Join a project, event or challenge",
                  "Share your wins — we celebrate them loudly",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Badge variant="soft" className="mt-0.5 size-6 shrink-0 rounded-full p-0 font-bold">
                      {index + 1}
                    </Badge>
                    <span className="pt-1 text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle,#7cff6b_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.07]"
              />
              <div className="relative">
                <MessagesSquare
                  className="size-8 text-brand"
                  aria-hidden="true"
                />
                <p className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                  “Everything I&apos;ve shipped this year started with a
                  conversation in the community.”
                </p>
                <p className="mt-4 text-sm text-white/60">
                  — What we&apos;re building toward, together
                </p>
                <Button
                  asChild
                  variant="brand"
                  className="mt-8 focus-visible:ring-brand focus-visible:ring-offset-ink"
                >
                  <a
                    href={siteConfig.communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the conversation
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Your people are already here"
        description="Join free, say hello, and start building with a community that wants you to win."
        primaryLabel={`Join ${siteConfig.name} Community`}
        primaryHref={siteConfig.communityUrl}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
