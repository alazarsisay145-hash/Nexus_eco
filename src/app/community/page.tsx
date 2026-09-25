import type { Metadata } from "next";
import { CalendarRange, FolderGit2, Handshake, Network, Trophy, UsersRound, Wrench } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

const sections = [
  {
    title: "Why join",
    description: "Join a community designed to make technology feel more collaborative, practical, and accessible.",
    icon: UsersRound,
  },
  {
    title: "Developer networking",
    description: "Meet peers, mentors, and collaborators who care about real projects and long-term growth.",
    icon: Network,
  },
  {
    title: "Collaboration",
    description: "Find people to build with, exchange feedback, and move ideas forward together.",
    icon: Handshake,
  },
  {
    title: "Projects",
    description: "Use shared challenges and product experiments to build stronger portfolios and habits.",
    icon: FolderGit2,
  },
  {
    title: "Events",
    description: "Participate in workshops, AMAs, demos, and community-led sessions that keep momentum high.",
    icon: CalendarRange,
  },
  {
    title: "Challenges",
    description: "Take part in build sprints and challenge formats that create visible progress and accountability.",
    icon: Trophy,
  },
  {
    title: "Resources",
    description: "Access practical templates, guides, tools, and signals that support learning and execution.",
    icon: Wrench,
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Community",
  description:
    "Join the NEXUS developer community for networking, collaboration, projects, events, challenges, and shared resources.",
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <Hero
        eyebrow="Developer community"
        title="A community where builders connect, collaborate, and keep growing"
        description="NEXUS Community is designed for developers, designers, students, and founders who want more than passive content—they want momentum, people, and projects."
        primaryLabel="Join NEXUS Community"
        primaryHref={siteConfig.communityUrl}
        secondaryLabel="View Opportunities"
        secondaryHref="/opportunities"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Community pillars"
          title="Built for collaboration, visibility, and practical growth"
          description="Each part of the community exists to make it easier for members to meet people, learn faster, and create more ambitious work together."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="glass-panel p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7CFF6B]/14 text-[#7CFF6B]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.description}</p>
              </article>
            );
          })}
        </div>
        <div className="glass-panel-soft mt-12 p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Ready to join the next build circle?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                The community link is configurable so NEXUS can later plug into any platform it chooses while keeping the frontend stable today.
              </p>
            </div>
            <Button asChild variant="accent" size="lg">
              <a href={siteConfig.communityUrl} target="_blank" rel="noreferrer">
                Join NEXUS Community
              </a>
            </Button>
          </div>
        </div>
      </section>
      <CTASection
        title="Want a stronger network around your technical growth?"
        description="Join the NEXUS community to connect with peers, collaborators, and opportunities that help your work go further."
        primaryLabel="Join NEXUS Community"
        primaryHref={siteConfig.communityUrl}
        secondaryLabel="Contact NEXUS"
        secondaryHref="/contact"
      />
    </>
  );
}
