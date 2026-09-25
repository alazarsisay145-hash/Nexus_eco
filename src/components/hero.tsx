import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  stats,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  stats?: { value: string; label: string }[];
}) {
  const isPrimaryExternal = primaryHref.startsWith("http") || primaryHref.startsWith("mailto:");
  const isSecondaryExternal =
    secondaryHref?.startsWith("http") || secondaryHref?.startsWith("mailto:");

  return (
    <section className="relative overflow-hidden border-b border-[#E7ECE2] bg-[#F7F8F6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,255,107,0.18),_transparent_32%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.88)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-[#4B8D43] uppercase">{eyebrow}</p>
          ) : null}
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#0B0D10] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#55606D] sm:text-xl">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="default" size="lg">
              {isPrimaryExternal ? (
                <a
                  href={primaryHref}
                  target={primaryHref.startsWith("mailto:") ? undefined : "_blank"}
                  rel={primaryHref.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button asChild variant="outline" size="lg">
                {isSecondaryExternal ? (
                  <a
                    href={secondaryHref}
                    target={secondaryHref.startsWith("mailto:") ? undefined : "_blank"}
                    rel={secondaryHref.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    {secondaryLabel}
                  </a>
                ) : (
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                )}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="grid gap-4 rounded-[2rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_20px_60px_rgba(11,13,16,0.06)] sm:p-8">
          {stats?.length ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-[#F7F8F6] p-5">
                  <p className="text-2xl font-semibold text-[#0B0D10]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5E6673]">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="grid gap-4 rounded-[1.75rem] border border-dashed border-[#DDE5D7] bg-[#FCFCFB] p-6">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#4B8D43] uppercase">Connected ecosystem</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Software solutions designed for growth",
                "Accessible AI tools with practical guidance",
                "Community spaces for developers and collaborators",
                "Learning pathways and real-world opportunities",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#E7ECE2] bg-white p-4 text-sm leading-7 text-[#55606D]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
