import { Check } from "lucide-react";

import type { AIPlan } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AIPlanCard({ plan }: { plan: AIPlan }) {
  return (
    <article
      className={[
        "flex h-full flex-col rounded-[1.75rem] border p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]",
        plan.featured ? "border-[#C9F8C0] bg-[#FBFFF9]" : "border-[#E7ECE2] bg-white",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B0D10]">{plan.name}</h3>
          <p className="mt-2 text-sm text-[#5E6673]">{plan.audience}</p>
        </div>
        {plan.highlight ? <Badge variant="accent">{plan.highlight}</Badge> : null}
      </div>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-[#0B0D10]">{plan.price}</span>
        <span className="text-sm text-[#6B7280]">{plan.cadence}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-[#5E6673]">{plan.description}</p>
      <ul className="mt-6 space-y-3 text-sm text-[#49515D]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#EAFDE5] text-[#2D7A24]">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button asChild variant={plan.featured ? "accent" : "outline"} className="w-full">
          <a href={plan.ctaHref} target="_blank" rel="noreferrer">
            {plan.ctaLabel}
          </a>
        </Button>
      </div>
    </article>
  );
}
