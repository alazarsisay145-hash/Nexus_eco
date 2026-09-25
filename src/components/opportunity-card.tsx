import { ArrowUpRight, Building2, CalendarDays, MapPin } from "lucide-react";

import type { Opportunity } from "@/types";
import { Badge } from "@/components/ui/badge";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
      <Badge variant="accent" className="w-fit">
        {opportunity.category}
      </Badge>
      <h3 className="mt-4 text-xl font-semibold text-[#0B0D10]">{opportunity.title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-[#5E6673] sm:grid-cols-3">
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
      <p className="mt-4 text-sm leading-7 text-[#5E6673]">{opportunity.description}</p>
      <a
        href={opportunity.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0D10] transition-colors hover:text-[#2D7A24]"
      >
        View opportunity
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
