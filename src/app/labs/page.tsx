import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "NEXUS Labs is our product studio — explore the tools and products we're building, from early concepts to live platforms.",
};

const statusLegend: { status: ProjectStatus; description: string }[] = [
  { status: "Concept", description: "An idea we're validating" },
  { status: "Building", description: "In active development" },
  { status: "Beta", description: "Usable, improving with feedback" },
  { status: "Live", description: "Launched and available" },
];

const statusVariant = {
  Concept: "outline",
  Building: "muted",
  Beta: "soft",
  Live: "brand",
} as const;

export default function LabsPage() {
  return (
    <>
      <Hero
        eyebrow="NEXUS Labs"
        title="Where we experiment and ship"
        description="Labs is the product studio inside NEXUS. We take problems young people and small businesses actually have, and turn them into tools — openly, iteratively and with the community."
      >
        <Button asChild size="lg">
          <a href="#projects">See the projects</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Pitch us an idea</Link>
        </Button>
      </Hero>

      <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="The portfolio"
            title="Current projects"
            description="Every project moves through four stages. Here's where each one stands today."
          />
          <ul
            aria-label="Project status legend"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {statusLegend.map((item) => (
              <li key={item.status} className="flex items-center gap-2 text-sm">
                <Badge variant={statusVariant[item.status]}>
                  {item.status}
                </Badge>
                <span className="text-muted-foreground">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a problem worth solving?"
        description="The best Labs projects start as community ideas. Tell us what should exist — or come build it with us."
        primaryLabel="Pitch an idea"
        primaryHref="/contact"
        primaryExternal={false}
        secondaryLabel="Join the builders"
        secondaryHref="/community"
      />
    </>
  );
}
