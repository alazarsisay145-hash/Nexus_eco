import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "NEXUS Labs",
  description:
    "Explore concept, building, beta, and live projects from NEXUS Labs across technology products and experiments.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <>
      <Hero
        eyebrow="NEXUS Labs"
        title="A showcase for concepts, experiments, and product execution"
        description="Labs is where NEXUS explores new ideas, builds pilots, and turns technology concepts into meaningful projects with visible progress."
        primaryLabel="Explore Projects"
        primaryHref="#projects"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <section id="projects" className="section-shell py-20">
        <SectionHeader
          eyebrow="Project showcase"
          title="From concept to live, every status represents a different stage of momentum"
          description="Each project card includes structured status, technologies, visuals, and an optional external destination where available."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <CTASection
        title="Have an idea that belongs inside NEXUS Labs?"
        description="Reach out to explore concept support, collaboration, or product experimentation with the NEXUS team."
        primaryLabel="Email NEXUS"
        primaryHref="mailto:hello@nexus.eco"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
