import type { Metadata } from "next";

import { ArticleCard } from "@/components/article-card";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Learn",
  description:
    "Explore the NEXUS learning hub across programming, web development, AI, design, entrepreneurship, and career growth.",
  path: "/learn",
});

export default function LearnPage() {
  return (
    <>
      <Hero
        eyebrow="Learning hub"
        title="Curated learning pathways for modern technology builders"
        description="NEXUS Learn brings together practical resources that help emerging talent strengthen technical skill, design thinking, product sense, and career readiness."
        primaryLabel="Explore Opportunities"
        primaryHref="/opportunities"
        secondaryLabel="Join Community"
        secondaryHref="/community"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Learning categories"
          title="Programming, AI, design, entrepreneurship, and career growth in one place"
          description="The learning hub uses static, curated resource cards so the experience remains lightweight, fast, and easy to expand later."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>
      <CTASection
        title="Keep learning with more direction and better signals"
        description="Use NEXUS as a starting point for the resources, people, and opportunities that can accelerate your growth."
        primaryLabel="Join NEXUS"
        primaryHref="/community"
        secondaryLabel="View Labs"
        secondaryHref="/labs"
      />
    </>
  );
}
