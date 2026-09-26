import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Project, ProjectStatus } from "@/data/projects";

const statusVariant: Record<
  ProjectStatus,
  "outline" | "muted" | "soft" | "brand"
> = {
  Concept: "outline",
  Building: "muted",
  Beta: "soft",
  Live: "brand",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="gap-4 overflow-hidden pt-0 transition-colors hover:border-ink/25">
      <div className="relative aspect-[16/9] w-full border-b bg-muted">
        <Image
          src={project.image}
          alt={`${project.name} — project artwork`}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-bold tracking-tight">
            {project.name}
          </h3>
          <Badge variant={statusVariant[project.status]}>
            {project.status}
          </Badge>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </CardHeader>
      <CardContent className="mt-auto">
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary" className="font-normal">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      {project.url ? (
        <CardFooter>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Visit {project.name}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </CardFooter>
      ) : null}
    </Card>
  );
}
