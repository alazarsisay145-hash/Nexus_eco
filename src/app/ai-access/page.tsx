import type { Metadata } from "next";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  GraduationCap,
  ImageIcon,
  MessageCircle,
  PenTool,
  Terminal,
  Wallet,
  Zap,
} from "lucide-react";

import { AIPlanCard } from "@/components/ai-plan-card";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { aiPlans } from "@/data/ai-plans";
import { aiAccessFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "AI Access",
  description:
    "Affordable access to premium AI tools — leading chat models, image generation and productivity assistants — through one simple NEXUS plan.",
};

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Research faster, study smarter and learn new skills with an always-available AI tutor.",
  },
  {
    icon: Terminal,
    title: "Developers",
    description:
      "Debug, generate code and learn frameworks with AI pair programming at your side.",
  },
  {
    icon: PenTool,
    title: "Creators",
    description:
      "Draft content, generate visuals and shape ideas for any platform in minutes.",
  },
  {
    icon: Briefcase,
    title: "Professionals & teams",
    description:
      "Automate writing, analysis and repetitive knowledge work across your business.",
  },
];

const benefits = [
  {
    icon: Wallet,
    title: "One affordable plan",
    description:
      "Skip multiple expensive subscriptions and foreign payment barriers — pay once, locally, for the tools you need.",
  },
  {
    icon: Zap,
    title: "Instant productivity",
    description:
      "Set up in minutes with our quick-start guides and start producing better work immediately.",
  },
  {
    icon: MessageCircle,
    title: "Real human support",
    description:
      "The NEXUS team helps you get set up, choose the right tools and solve issues fast.",
  },
];

const tools = [
  {
    icon: Bot,
    name: "AI chat models",
    detail: "Leading conversational models for reasoning, writing and study",
  },
  {
    icon: Terminal,
    name: "Coding assistants",
    detail: "Code generation, debugging and explanation for every stack",
  },
  {
    icon: ImageIcon,
    name: "Image generation",
    detail: "High-quality visuals for content, design and marketing",
  },
  {
    icon: PenTool,
    name: "Writing tools",
    detail: "Essays, reports, scripts and content in your voice",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose a plan",
    description: "Pick the plan that matches how much you'll use AI.",
  },
  {
    step: "02",
    title: "Request access",
    description:
      "Complete your request through the NEXUS AI Access channel — it takes two minutes.",
  },
  {
    step: "03",
    title: "Get activated",
    description:
      "Our team confirms your plan and activates your access, usually within hours.",
  },
  {
    step: "04",
    title: "Start creating",
    description:
      "Follow the quick-start guide and put premium AI to work on your goals.",
  },
];

export default function AIAccessPage() {
  return (
    <>
      <Hero
        eyebrow="AI Access"
        title="Premium AI tools, without the premium price"
        description="NEXUS AI Access gives students, creators and young professionals affordable access to the world's leading AI tools — one plan, no foreign card required, with local support."
      >
        <Button asChild variant="brand" size="lg">
          <a
            href={siteConfig.aiAccessUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get AI Access
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#plans">View plans</a>
        </Button>
      </Hero>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="What it is"
              title="One subscription. The best AI tools."
              description="AI Access is a NEXUS service that removes the two biggest barriers between young people and premium AI: price and payment. We bundle access to leading AI chat models, image generation and productivity tools into simple monthly plans you can actually afford — and actually pay for."
            />
            <ul className="grid content-center gap-3">
              {[
                "No expensive individual subscriptions",
                "No foreign credit card required",
                "Local payment options and local support",
                "Always updated with leading models",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border bg-card px-4 py-3.5 text-sm font-medium"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 size-2 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Who it's for"
            title="Built for people who create"
            description="If AI could save you hours every week, AI Access is for you."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <FeatureCard key={audience.title} {...audience} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Benefits"
            title="Why get access through NEXUS"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y bg-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Available tools"
            title="What's inside"
            description="The toolset evolves with the AI landscape — plans always include the current leading tools."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="flex items-start gap-4 rounded-2xl border bg-card p-5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-ink">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tool.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="How it works"
            title="From plan to power in four steps"
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <li key={item.step} className="rounded-2xl border bg-card p-6">
                <span className="inline-block rounded-md bg-ink px-2 py-1 font-display text-sm font-bold text-brand">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-base font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="plans"
        className="scroll-mt-20 border-y bg-muted/50 py-16 sm:py-24"
      >
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Plans"
            title="Simple, honest pricing"
            description="Start small and upgrade anytime. All plans are monthly with no lock-in."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {aiPlans.map((plan) => (
              <AIPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need access for a team or classroom?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Talk to us about group plans
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader
            align="center"
            eyebrow="FAQ"
            title="Frequently asked questions"
          />
          <FAQ items={aiAccessFaqs} className="mt-10" />
        </Container>
      </section>

      <CTASection
        title="Ready to work smarter?"
        description="Get premium AI tools working for you today — setup takes minutes and our team is there to help."
        primaryLabel="Get AI Access"
        primaryHref={siteConfig.aiAccessUrl}
        secondaryLabel="Ask a question"
        secondaryHref="/contact"
      />
    </>
  );
}
