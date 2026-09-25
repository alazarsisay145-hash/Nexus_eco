import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 text-[#0B0D10]", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0B0D10] text-sm font-bold tracking-[0.3em] text-[#7CFF6B]">
        N
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold tracking-[0.24em]">NEXUS</span>
        <span className="text-xs text-[#6B7280]">Build. Connect. Access. Grow.</span>
      </span>
    </Link>
  );
}
