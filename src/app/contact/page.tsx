import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

import { Container } from "@/components/container";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NEXUS — email, Telegram or WhatsApp. Start a project, ask about AI access or say hello.",
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    description: "Best for project inquiries and partnerships.",
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: Send,
    title: "Telegram",
    description: "Fastest response — message the team directly.",
    label: "Message on Telegram",
    href: siteConfig.telegramUrl,
    external: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick questions and voice notes welcome.",
    label: "Chat on WhatsApp",
    href: siteConfig.whatsappUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's talk"
        description="Start a project, ask about AI access, propose a partnership or just say hello — we read everything and reply fast."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className="flex flex-col rounded-2xl border bg-card p-6 transition-colors hover:border-ink/25"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-ink">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-lg font-bold tracking-tight">
                    {channel.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {channel.description}
                  </p>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-5 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {channel.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border bg-muted/60 px-6 py-6 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              We typically respond within 24 hours on working days.
            </p>
            <ul
              aria-label="Social media"
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-sm font-medium text-muted-foreground underline-offset-4 transition-colors outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {siteConfig.formspreeEndpoint ? (
        <section className="border-t bg-muted/50 py-16 sm:py-24">
          <Container className="max-w-2xl">
            <SectionHeader
              align="center"
              eyebrow="Message us"
              title="Send a message from here"
              description="Fill in the form and it lands straight in our inbox."
            />
            <form
              action={siteConfig.formspreeEndpoint}
              method="POST"
              className="mt-10 grid gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="h-11 rounded-lg border bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-11 rounded-lg border bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="rounded-lg border bg-background px-3.5 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Button type="submit" size="lg" className="justify-self-start">
                Send message
              </Button>
            </form>
          </Container>
        </section>
      ) : null}

      <section className="border-t py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader
            align="center"
            eyebrow="FAQ"
            title="Quick answers"
          />
          <FAQ items={generalFaqs} className="mt-10" />
        </Container>
      </section>
    </>
  );
}
