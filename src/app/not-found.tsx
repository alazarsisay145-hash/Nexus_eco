import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="page-shell page-grid">
      <section className="section-shell flex min-h-[70vh] items-center py-16">
        <div className="glass-panel section-glow w-full p-8 text-center sm:p-12">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#7CFF6B] uppercase">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The page you&apos;re looking for isn&apos;t in the ecosystem yet.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Return home, explore AI Access, or continue through the Nexus platform from one of the linked destinations below.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/">Go to homepage</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link href="/ai-access">Explore AI Access</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
