import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { OpportunityCard } from "@/components/opportunity-card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { opportunities, opportunityTypes } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Jobs, internships, freelance gigs, hackathons, scholarships, events and programs — curated for young technologists by NEXUS.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <Hero
        eyebrow="Opportunities"
        title="Your next opportunity is waiting"
        description="We curate jobs, internships, freelance work, hackathons, scholarships, events and programs for young technologists — so you spend time applying, not searching."
      >
        <Button asChild size="lg">
          <a href="#listings">Browse opportunities</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a
            href={siteConfig.communityUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get alerts in the community
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </Hero>

      <section id="listings" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Curated listings"
            title="Opportunities across seven categories"
            description="Every listing links to the official page. Deadlines and details are managed in one place and updated regularly."
          />
          <ul
            aria-label="Opportunity categories"
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {opportunityTypes.map((type) => (
              <li key={type}>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {type}
                  <span className="sr-only"> opportunities</span>
                </Badge>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Know an opportunity young builders should see?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Share it with us
            </a>
            .
          </p>
        </Container>
      </section>

      <CTASection
        title="Opportunities move fast"
        description="Members hear about new opportunities first — join the community and never miss a deadline."
        primaryLabel="Join the Community"
        secondaryLabel="Build your skills"
        secondaryHref="/learn"
      />
    </>
  );
}
