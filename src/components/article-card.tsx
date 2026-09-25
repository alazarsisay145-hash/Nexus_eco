import { ArrowUpRight } from "lucide-react";

import type { Article } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="glass-panel flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="outline">{article.category}</Badge>
        <span className="text-sm text-slate-400">{article.readTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{article.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{article.description}</p>
      <a
        href={article.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#7CFF6B]"
      >
        Explore resource
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
