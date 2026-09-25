import type { Metadata } from "next";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

const contactItems = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    title: "Telegram",
    value: "Message NEXUS on Telegram",
    href: siteConfig.telegramUrl,
    icon: Send,
  },
  {
    title: "WhatsApp",
    value: "Chat with NEXUS on WhatsApp",
    href: siteConfig.whatsappUrl,
    icon: MessageCircle,
  },
];

const socialItems = [
  { title: "GitHub", href: siteConfig.socialUrls.github, icon: Github },
  { title: "LinkedIn", href: siteConfig.socialUrls.linkedin, icon: Linkedin },
  { title: "X", href: siteConfig.socialUrls.x, icon: Twitter },
  { title: "Instagram", href: siteConfig.socialUrls.instagram, icon: Instagram },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact NEXUS through email, Telegram, WhatsApp, or social platforms for software, AI access, community, and labs inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Reach NEXUS through the channels that fit your workflow"
        description="Whether you want to discuss a software project, AI access, community collaboration, or a NEXUS Labs concept, the contact pathways stay centralized in one config file for easy updates."
        primaryLabel="Email NEXUS"
        primaryHref={`mailto:${siteConfig.email}`}
        secondaryLabel="Join NEXUS"
        secondaryHref="/community"
      />
      <section className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Direct contact"
              title="Professional contact details for fast outreach"
              description="This frontend-first site keeps contact information configurable and avoids backend form handling until it is truly needed."
            />
            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="rounded-[1.5rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)] transition-colors hover:bg-[#F7F8F6]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FFEE] text-[#2D7A24]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-[#0B0D10]">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[#5E6673]">{item.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E7ECE2] bg-[#F7F8F6] p-8">
            <SectionHeader
              eyebrow="Social links"
              title="Follow NEXUS across the platforms where ideas travel"
              description="All social destinations are configurable from a single file so brand links can be refreshed without touching page-level components."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-[#E7ECE2] bg-white p-5 transition-colors hover:bg-[#FCFCFB]"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0B0D10] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-[#0B0D10]">{item.title}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Prefer to start with one clear message?"
        description="Send a concise note about your project, team, or goal and NEXUS can continue the conversation from there."
        primaryLabel="hello@nexus.eco"
        primaryHref={`mailto:${siteConfig.email}`}
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
