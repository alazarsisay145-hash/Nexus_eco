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
    <footer className="border-t border-[#E7ECE2] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xl text-sm leading-7 text-[#5E6673]">{siteConfig.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E7ECE2] px-4 py-2 text-sm font-medium text-[#0B0D10] transition-colors hover:bg-[#F7F8F6]"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E7ECE2] px-4 py-2 text-sm font-medium text-[#0B0D10] transition-colors hover:bg-[#F7F8F6]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E7ECE2] px-4 py-2 text-sm font-medium text-[#0B0D10] transition-colors hover:bg-[#F7F8F6]"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-[0.24em] text-[#0B0D10] uppercase">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-[#5E6673]">
              {siteConfig.primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[#0B0D10]">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-[0.24em] text-[#0B0D10] uppercase">Follow</h2>
            <ul className="mt-5 space-y-3 text-sm text-[#5E6673]">
              {Object.entries(siteConfig.socialUrls).map(([key, href]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[#0B0D10]"
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
        </div>
        <div className="my-8">
          <Separator />
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Built for young builders and future-ready teams.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
