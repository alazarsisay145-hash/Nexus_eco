import type { Metadata } from "next";
import { Bot, BrainCircuit, CircleHelp, Rocket, Users } from "lucide-react";

import { AIPlanCard } from "@/components/ai-plan-card";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { aiPlans } from "@/data/ai-plans";
import { aiFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";

const benefits = [
  {
    title: "Practical access",
    description: "Start with useful tools and real workflows instead of vague AI hype.",
    icon: Bot,
  },
  {
    title: "Faster learning",
    description: "Use clear guidance to understand how tools fit research, coding, design, and productivity.",
    icon: BrainCircuit,
  },
  {
    title: "Better execution",
    description: "Turn AI into support for your work rather than another distracting subscription.",
    icon: Rocket,
  },
  {
    title: "Supportive adoption",
    description: "Move with a community-minded model that keeps experimentation accessible.",
    icon: Users,
  },
];

export const metadata: Metadata = buildMetadata({
  title: "AI Access",
  description:
    "Discover NEXUS AI Access plans, supported tools, benefits, and practical onboarding for students, builders, and teams.",
  path: "/ai-access",
});

export default function AIAccessPage() {
  return (
    <>
      <Hero
        eyebrow="AI Access"
        title="AI tools made more accessible, useful, and practical"
        description="NEXUS AI Access helps people and teams discover the right AI tools, understand the workflow fit, and move from curiosity to confident usage."
        primaryLabel="Get AI Access"
        primaryHref={siteConfig.aiAccessUrl}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <section className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionHeader
            eyebrow="What AI Access is"
            title="A professional access layer for modern AI workflows"
            description="AI Access is designed for young professionals, students, startups, and small teams that want clear entry points into high-value AI tools without needing their own complicated infrastructure."
          />
          <div className="rounded-[2rem] border border-[#E7ECE2] bg-[#F7F8F6] p-8">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#4B8D43] uppercase">Who it is for</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5E6673]">
              {siteConfig.audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#7CFF6B]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F6] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Benefits"
            title="Use AI with stronger judgment, better workflows, and more momentum"
            description="The goal is not simply access to tools—it is access with enough structure to make the tools genuinely useful."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FFEE] text-[#2D7A24]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B0D10]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5E6673]">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Available AI tools"
          title="A flexible stack that can evolve over time"
          description="Plan data stays in one local file so pricing and packaging can be updated easily, while the page presents a professional view of the current offer."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {siteConfig.aiTools.map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {aiPlans.map((plan) => (
            <AIPlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="bg-[#F7F8F6] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#E7ECE2] bg-white p-8 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.24em] text-[#4B8D43] uppercase">
              <CircleHelp className="h-4 w-4" />
              How access works
            </p>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-[#5E6673]">
              <li><strong className="text-[#0B0D10]">1.</strong> Choose a plan that matches your stage and workflow.</li>
              <li><strong className="text-[#0B0D10]">2.</strong> Use the external AI Access link to continue with the current access process.</li>
              <li><strong className="text-[#0B0D10]">3.</strong> Receive onboarding, resources, and recommended tool pathways.</li>
              <li><strong className="text-[#0B0D10]">4.</strong> Keep learning through community support and evolving guidance.</li>
            </ol>
          </div>
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions about plans, fit, and onboarding"
              description="Because the access model can evolve later, the frontend remains simple today while the offer data stays easy to update."
            />
            <div className="mt-8">
              <FAQ items={aiFaqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to unlock practical AI access with NEXUS?"
        description="Choose the access level that fits your stage and continue through the configurable AI Access destination."
        primaryLabel="Get AI Access"
        primaryHref={siteConfig.aiAccessUrl}
        secondaryLabel="Explore Community"
        secondaryHref="/community"
      />
    </>
  );
}
