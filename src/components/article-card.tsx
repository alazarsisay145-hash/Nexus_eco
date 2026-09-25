import { ArrowUpRight } from "lucide-react";

import type { Article } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="outline">{article.category}</Badge>
        <span className="text-sm text-[#6B7280]">{article.readTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#0B0D10]">{article.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#5E6673]">{article.description}</p>
      <a
        href={article.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0D10] transition-colors hover:text-[#2D7A24]"
      >
        Explore resource
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
