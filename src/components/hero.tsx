import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
  className?: string;
};

/**
 * Page hero used across interior pages. The home page composes its own
 * larger hero on top of the same visual language.
 */
export function Hero({
  eyebrow,
  title,
  description,
  align = "center",
  children,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,#0b0d10_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.05]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-soft blur-3xl"
      />
      <Container
        className={cn(
          "relative py-16 sm:py-20 lg:py-24",
          align === "center" && "flex flex-col items-center text-center"
        )}
      >
        {eyebrow ? (
          <Badge variant="soft" className="mb-5 px-3 py-1 text-xs font-semibold">
            {eyebrow}
          </Badge>
        ) : null}
        <h1
          className={cn(
            "max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? (
          <div
            className={cn(
              "mt-8 flex flex-wrap gap-3",
              align === "center" && "justify-center"
            )}
          >
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
