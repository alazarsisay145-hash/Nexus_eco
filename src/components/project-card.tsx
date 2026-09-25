import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";

const statusVariant = {
  Beta: "accent",
  Building: "default",
  Concept: "outline",
  Live: "dark",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[#E7ECE2] bg-white shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
      <div className="relative aspect-[16/10] border-b border-[#E7ECE2] bg-[#F7F8F6]">
        <Image src={project.image} alt={project.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-[#0B0D10]">{project.name}</h3>
          <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#5E6673]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
        {project.href ? (
          <a
            href={project.href}
            target={project.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={project.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0D10] transition-colors hover:text-[#2D7A24]"
          >
            View project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
