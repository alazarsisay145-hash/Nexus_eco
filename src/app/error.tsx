"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="section-shell flex min-h-[70vh] items-center py-16">
      <div className="glass-panel section-glow w-full p-8 text-center sm:p-12">
        <p className="text-sm font-semibold tracking-[0.28em] text-[#7CFF6B] uppercase">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          We hit a temporary issue loading Nexus.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Try the page again or head back to the homepage while we reconnect the experience.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="accent" onClick={reset}>
            Try again
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
