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
        <Button variant="outline" size="sm" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-4 w-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>NEXUS</SheetTitle>
          <SheetDescription>{siteConfig.tagline}</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {siteConfig.primaryNav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-[#0B0D10] transition-colors hover:bg-[#F7F8F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF6B]"
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto grid gap-3 pt-4">
          <Button asChild variant="accent" size="lg">
            <a href={siteConfig.communityUrl} target="_blank" rel="noreferrer">
              Join NEXUS
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
