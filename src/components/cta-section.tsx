import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const isPrimaryExternal = primaryHref.startsWith("http") || primaryHref.startsWith("mailto:");
  const isSecondaryExternal = secondaryHref?.startsWith("http") || secondaryHref?.startsWith("mailto:");

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-glow mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#06101D]/90 px-6 py-12 text-white shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:px-10 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-[#7CFF6B] uppercase">Final CTA</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="accent" size="lg">
              {isPrimaryExternal ? (
                <a href={primaryHref} target={primaryHref.startsWith("mailto:") ? undefined : "_blank"} rel={primaryHref.startsWith("mailto:") ? undefined : "noreferrer"}>
                  {primaryLabel}
                </a>
              ) : (
                <Link href={primaryHref}>{primaryLabel}</Link>
              )}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                {isSecondaryExternal ? (
                  <a href={secondaryHref} target={secondaryHref.startsWith("mailto:") ? undefined : "_blank"} rel={secondaryHref.startsWith("mailto:") ? undefined : "noreferrer"}>
                    {secondaryLabel}
                  </a>
                ) : (
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                )}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
