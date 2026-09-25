import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { OpportunityCard } from "@/components/opportunity-card";
import { SectionHeader } from "@/components/section-header";
import { opportunities } from "@/data/opportunities";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Opportunities",
  description:
    "Discover jobs, internships, freelance opportunities, hackathons, scholarships, events, and programs through NEXUS.",
  path: "/opportunities",
});

export default function OpportunitiesPage() {
  return (
    <>
      <Hero
        eyebrow="Opportunities"
        title="Opportunities that help young builders learn, earn, and move forward"
        description="From internships and freelance work to hackathons and scholarships, NEXUS curates opportunity signals that support momentum."
        primaryLabel="Join Community"
        primaryHref="/community"
        secondaryLabel="Contact NEXUS"
        secondaryHref="/contact"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Current opportunity categories"
          title="Jobs, internships, freelance work, events, scholarships, and programs"
          description="All listings are static local content for now, making the experience fast today and easy to connect to a backend later if needed."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} />
          ))}
        </div>
      </section>
      <CTASection
        title="Want NEXUS to surface more opportunities for your network?"
        description="Reach out to collaborate on sourcing, sharing, or partnering around talent and opportunity discovery."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Join NEXUS"
        secondaryHref="/community"
      />
    </>
  );
}
