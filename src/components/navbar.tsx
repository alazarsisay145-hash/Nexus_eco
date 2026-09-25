import Link from "next/link";

import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { MainNav } from "@/components/main-nav";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <MainNav />
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="hidden text-muted-foreground sm:inline-flex"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="brand">
            <a
              href={siteConfig.communityUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join {siteConfig.name}
            </a>
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
