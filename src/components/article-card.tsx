import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="gap-4 transition-colors hover:border-ink/25">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="soft">{article.category}</Badge>
          <Badge variant="outline">{article.level}</Badge>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
          {article.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {article.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto items-center justify-between gap-3">
        <span className="text-xs font-medium text-muted-foreground">
          {article.source}
        </span>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Start learning
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">: {article.title}</span>
        </a>
      </CardFooter>
    </Card>
  );
}
