import type { Metadata } from "next";
import { Compass, Lightbulb, Network, Wrench } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { buildMetadata } from "@/lib/metadata";

const beliefs = [
  {
    title: "Mission",
    description:
      "To connect young people, technology, businesses and opportunities through accessible digital tools and a community built around creating.",
    icon: Compass,
  },
  {
    title: "Vision",
    description:
      "A future where more young people can participate in technology confidently, build meaningful products, and access new paths to growth.",
    icon: Lightbulb,
  },
  {
    title: "What we believe",
    description:
      "Access should be practical, community should be active, and technology should create genuine opportunity—not just noise.",
    icon: Network,
  },
  {
    title: "What we build",
    description:
      "Web experiences, software solutions, AI pathways, community systems, and lab projects that support creation and discovery.",
    icon: Wrench,
  },
];

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about NEXUS, its mission, vision, beliefs, and the youth-focused technology ecosystem it is building.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About NEXUS"
        title="A youth-focused technology ecosystem built around creation"
        description="NEXUS exists to help young people connect with technology, community, businesses, and opportunities through practical digital experiences."
        primaryLabel="Explore Solutions"
        primaryHref="/solutions"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Why NEXUS exists"
          title="Connecting people, tools, and opportunities in one ecosystem"
          description="NEXUS is designed for students, developers, founders, teams, and communities who need accessible entry points into technology and stronger support for execution."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {beliefs.map((belief) => {
            const Icon = belief.icon;
            return (
              <article key={belief.title} className="rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FFEE] text-[#2D7A24]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B0D10]">{belief.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5E6673]">{belief.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-12 rounded-[2rem] border border-[#E7ECE2] bg-[#F7F8F6] p-8">
          <h2 className="text-2xl font-semibold text-[#0B0D10]">Who we serve</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5E6673]">
            NEXUS serves emerging talent, youth-led initiatives, startups, education communities, and organizations that want a clearer path into digital product creation and technology growth.
          </p>
        </div>
      </section>
      <CTASection
        title="Want to build with a mission-driven technology ecosystem?"
        description="Talk to NEXUS about software, AI access, labs, or community collaborations that support young builders."
        primaryLabel="Contact NEXUS"
        primaryHref="/contact"
        secondaryLabel="Join Community"
        secondaryHref="/community"
      />
    </>
  );
}
