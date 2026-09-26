import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { mainNav, secondaryNav, siteConfig } from "@/config/site";

const ecosystemLinks = mainNav.slice(0, 3);
const resourceLinks = [...mainNav.slice(3), ...secondaryNav];

export function Footer() {
  return (
    <footer className="border-t bg-muted/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A youth-focused technology ecosystem — software, AI access,
              community, learning and opportunities in one place.
            </p>
            <p className="mt-4 font-display text-sm font-bold tracking-tight text-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Ecosystem">
            <h2 className="text-sm font-semibold text-foreground">Ecosystem</h2>
            <ul className="mt-4 space-y-2.5">
              {ecosystemLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2 className="text-sm font-semibold text-foreground">Resources</h2>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label="Social media">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-xs font-medium text-muted-foreground underline-offset-4 transition-colors outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Made with purpose by young builders.</p>
        </div>
      </Container>
    </footer>
  );
}
