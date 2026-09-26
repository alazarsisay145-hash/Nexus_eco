import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = `Ready to build with ${siteConfig.name}?`,
  description = "Join a growing ecosystem of young builders — or bring us your next project and let's create something exceptional together.",
  primaryLabel = `Join ${siteConfig.name}`,
  primaryHref = siteConfig.communityUrl,
  primaryExternal = true,
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle,#7cff6b_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/2 h-56 w-[30rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-white/70">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                variant="brand"
                size="lg"
                className="focus-visible:ring-brand focus-visible:ring-offset-ink"
              >
                {primaryExternal ? (
                  <a
                    href={primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryLabel}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={primaryHref}>{primaryLabel}</Link>
                )}
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
