import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

const socialIcons = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  x: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040B15]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.8fr_0.95fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xl text-sm leading-7 text-slate-300">{siteConfig.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.name}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Nexus WhatsApp"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Nexus Telegram"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-[0.24em] text-white uppercase">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {siteConfig.primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-[0.24em] text-white uppercase">Follow</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {Object.entries(siteConfig.socialUrls).map(([key, href]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open Nexus ${key}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="capitalize">{key}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="glass-panel-soft p-6">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#7CFF6B] uppercase">Start here</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Make AI Access your first step into Nexus.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Explore practical AI access, then move into community, learning, labs, and opportunities from the same ecosystem.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/ai-access"
                className="inline-flex items-center justify-center rounded-full bg-[#7CFF6B] px-5 py-3 text-sm font-semibold text-[#07111F] transition-colors hover:bg-[#6AEB59]"
              >
                Explore AI Access
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Nexus
              </Link>
            </div>
          </div>
        </div>
        <div className="my-8">
          <Separator />
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Built for young builders and future-ready teams.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
