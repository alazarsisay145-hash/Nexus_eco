import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-6 transition-colors hover:border-ink/25",
        className
      )}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand-soft text-ink">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-base font-bold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
