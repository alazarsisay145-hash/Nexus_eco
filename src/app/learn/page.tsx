import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { articles, learningCategories } from "@/data/articles";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "The NEXUS learning hub — curated free resources in programming, web development, AI, design, entrepreneurship and career growth.",
};

export default function LearnPage() {
  return (
    <>
      <Hero
        eyebrow="Learning Hub"
        title="Learn the skills that open doors"
        description="A curated map of the best free learning resources on the internet — chosen by the NEXUS community, organized by track, and updated as the field evolves."
      >
        <Button asChild size="lg">
          <a href="#resources">Browse resources</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a
            href={siteConfig.communityUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn with the community
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </Hero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Tracks"
            title="Six tracks. One goal: capability."
            description="Whatever you want to become, start with a track and follow it consistently."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learningCategories.map((category) => {
              const Icon = category.icon;
              const count = articles.filter(
                (article) => article.category === category.name
              ).length;

              return (
                <div
                  key={category.name}
                  className="flex items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-ink/25"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-ink">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-muted-foreground">
                      {count} curated {count === 1 ? "resource" : "resources"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="resources"
        className="scroll-mt-20 border-t bg-muted/50 py-16 sm:py-24"
      >
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Curated resources"
            title="Start with the best, skip the noise"
            description="Every resource here is free, respected and worth your time. Pick one and commit."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Learning is better with accountability"
        description="Join the community to find study partners, share progress and stay consistent."
        primaryLabel="Join the Community"
        secondaryLabel="Explore opportunities"
        secondaryHref="/opportunities"
      />
    </>
  );
}
