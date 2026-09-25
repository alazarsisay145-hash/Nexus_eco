import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E7ECE2]/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {siteConfig.primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#49515D] transition-colors hover:text-[#0B0D10]"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="accent">
            <a href={siteConfig.communityUrl} target="_blank" rel="noreferrer">
              Join NEXUS
            </a>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
