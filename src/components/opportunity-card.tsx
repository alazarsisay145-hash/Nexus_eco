import { ArrowUpRight, Building2, CalendarDays, MapPin } from "lucide-react";

import type { Opportunity } from "@/types";
import { Badge } from "@/components/ui/badge";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="glass-panel flex h-full flex-col p-6">
      <Badge variant="accent" className="w-fit">
        {opportunity.category}
      </Badge>
      <h3 className="mt-4 text-xl font-semibold text-white">{opportunity.title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
        <p className="inline-flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          {opportunity.organization}
        </p>
        <p className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {opportunity.location}
        </p>
        <p className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {opportunity.deadline}
        </p>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{opportunity.description}</p>
      <a
        href={opportunity.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#7CFF6B]"
      >
        View opportunity
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
