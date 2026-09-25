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
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 shadow-[0_24px_70px_rgba(5,16,29,0.3)] backdrop-blur-xl">
      <div className="relative aspect-[16/10] border-b border-white/10 bg-[#0D1A2B]">
        <Image src={project.image} alt={project.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#7CFF6B]"
          >
            View project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
