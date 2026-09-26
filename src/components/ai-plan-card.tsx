import { ArrowUpRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import type { AIPlan } from "@/data/ai-plans";
import { cn } from "@/lib/utils";

export function AIPlanCard({ plan }: { plan: AIPlan }) {
  const dark = Boolean(plan.popular);

  return (
    <Card
      className={cn(
        "relative gap-5",
        dark && "border-ink bg-ink text-white"
      )}
    >
      {plan.popular ? (
        <Badge variant="brand" className="absolute -top-3 left-6 px-3">
          Most popular
        </Badge>
      ) : null}
      <CardHeader>
        <h3 className="font-display text-lg font-bold tracking-tight">
          {plan.name}
        </h3>
        <p className="mt-2 flex items-baseline gap-1.5">
          <span className="font-display text-4xl font-extrabold tracking-tight">
            {plan.price}
          </span>
          <span
            className={cn(
              "text-sm",
              dark ? "text-white/60" : "text-muted-foreground"
            )}
          >
            {plan.period}
          </span>
        </p>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {plan.description}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  dark ? "text-brand" : "text-ink"
                )}
                aria-hidden="true"
              />
              <span className={cn(dark ? "text-white/85" : "text-foreground/80")}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          asChild
          variant={dark ? "brand" : "outline"}
          className="w-full"
        >
          <a
            href={siteConfig.aiAccessUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {plan.ctaLabel}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
