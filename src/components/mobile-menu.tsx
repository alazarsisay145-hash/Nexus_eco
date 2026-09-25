"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-white/12 bg-white/5 text-white hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-white/10 bg-[#07111F] text-white">
        <SheetHeader>
          <SheetTitle>NEXUS</SheetTitle>
          <SheetDescription className="text-slate-300">{siteConfig.tagline}</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-2">
          {siteConfig.primaryNav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className={[
                  "rounded-2xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF6B]",
                  item.href === "/ai-access"
                    ? "bg-white/10 text-white hover:bg-white/15"
                    : "text-slate-100 hover:bg-white/10",
                ].join(" ")}
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto grid gap-3 pt-6">
          <Button asChild variant="accent" size="lg">
            <Link href="/ai-access">Get AI Access</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/12 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link href="/community">Join Community</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
