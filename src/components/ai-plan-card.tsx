import { Check } from "lucide-react";

import type { AIPlan } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AIPlanCard({ plan }: { plan: AIPlan }) {
  return (
    <article
      className={[
        "flex h-full flex-col rounded-[1.75rem] border p-6 shadow-[0_24px_70px_rgba(5,16,29,0.28)] backdrop-blur-xl",
        plan.featured ? "border-[#7CFF6B]/40 bg-[#0A1A14]/88" : "border-white/10 bg-white/8",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{plan.audience}</p>
        </div>
        {plan.highlight ? <Badge variant="accent">{plan.highlight}</Badge> : null}
      </div>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-white">{plan.price}</span>
        <span className="text-sm text-slate-400">{plan.cadence}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{plan.description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7CFF6B]/14 text-[#7CFF6B]">
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
