import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111F]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {siteConfig.primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-full px-3 py-2 text-sm font-medium transition-all",
                item.href === "/ai-access"
                  ? "bg-white/10 text-white shadow-[0_12px_30px_rgba(124,255,107,0.12)] hover:bg-white/15"
                  : "text-slate-300 hover:bg-white/8 hover:text-white",
              ].join(" ")}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" className="border-white/12 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link href="/community">Join Community</Link>
          </Button>
          <Button asChild variant="accent">
            <Link href="/ai-access">Get AI Access</Link>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
