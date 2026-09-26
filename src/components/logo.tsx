import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <rect width="32" height="32" rx="9" fill="#0B0D10" />
      <path
        d="M10 22V10.5a.5.5 0 0 1 .9-.3l9.3 11.3a.5.5 0 0 0 .9-.3V10"
        stroke="#7CFF6B"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        invert && "focus-visible:ring-brand focus-visible:ring-offset-ink",
        className
      )}
    >
      <LogoMark />
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          invert ? "text-white" : "text-ink"
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
