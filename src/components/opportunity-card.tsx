import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Opportunity } from "@/data/opportunities";

export function OpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {
  return (
    <Card className="gap-4 transition-colors hover:border-ink/25">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge variant="soft">{opportunity.type}</Badge>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
          {opportunity.title}
        </h3>
        <p className="text-sm font-medium text-foreground/70">
          {opportunity.organization}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {opportunity.description}
        </p>
        <dl className="space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Location</dt>
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            <dd>{opportunity.location}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Deadline</dt>
            <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
            <dd>{opportunity.deadline}</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="mt-auto">
        <a
          href={opportunity.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          View opportunity
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  );
}
