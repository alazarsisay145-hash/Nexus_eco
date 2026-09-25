import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Explore NEXUS software solutions across web development, SaaS, automation, AI solutions, and custom software.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="Software solutions"
        title="Technology services designed for clarity, growth, and execution"
        description="NEXUS works with organizations, founders, and initiatives that need modern software experiences without unnecessary complexity or backend overhead at the earliest stage."
        primaryLabel="Contact NEXUS"
        primaryHref="/contact"
        secondaryLabel="View Labs"
        secondaryHref="/labs"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Services"
          title="Six focused service tracks for ambitious digital teams"
          description="Each offer is structured to create momentum today while keeping the product architecture ready for future integrations, systems, and backend growth."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
      <CTASection
        title="Need a software partner that understands growth-stage technology work?"
        description="Start with a conversation about your product, team, or initiative and map the right solution with NEXUS."
        primaryLabel="Email NEXUS"
        primaryHref={`mailto:${siteConfig.email}`}
        secondaryLabel="About NEXUS"
        secondaryHref="/about"
      />
    </>
  );
}
