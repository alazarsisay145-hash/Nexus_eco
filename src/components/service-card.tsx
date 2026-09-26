import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card className="group gap-5 transition-colors hover:border-ink/25">
      <CardHeader>
        <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-ink">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-bold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                className="mt-0.5 size-4 shrink-0 text-ink"
                aria-hidden="true"
              />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          href={`/contact?service=${service.id}`}
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Discuss your project
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </CardFooter>
    </Card>
  );
}
