import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Badge variant="accent" className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
