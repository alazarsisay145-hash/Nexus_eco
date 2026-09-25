import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, GraduationCap, Lightbulb, Sparkles, Users } from "lucide-react";

import { AIPlanCard } from "@/components/ai-plan-card";
import { ArticleCard } from "@/components/article-card";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { OpportunityCard } from "@/components/opportunity-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { aiPlans } from "@/data/ai-plans";
import { articles } from "@/data/articles";
import { generalFaqs } from "@/data/faqs";
import { opportunities } from "@/data/opportunities";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const introFeatures = [
  {
    icon: <Code2 className="h-6 w-6" aria-hidden="true" />,
    title: "Software solutions",
    description: "Digital products and websites designed with clarity, performance, and future growth in mind.",
  },
  {
    icon: <Sparkles className="h-6 w-6" aria-hidden="true" />,
    title: "AI access",
    description: "Practical pathways into useful AI tools for students, builders, and teams without unnecessary complexity.",
  },
  {
    icon: <Users className="h-6 w-6" aria-hidden="true" />,
    title: "Community and opportunities",
    description: "A connected ecosystem for collaboration, learning, experimentation, and real-world opportunities.",
  },
];

const ecosystemSections = [
  {
    title: "Developer Community",
    description: "A network for collaboration, accountability, challenges, and local or remote project momentum.",
    icon: Users,
    href: "/community",
  },
  {
    title: "Learn",
    description: "Curated programming, AI, design, and career resources that support practical skill-building.",
    icon: GraduationCap,
    href: "/learn",
  },
  {
    title: "Opportunities",
    description: "Jobs, internships, scholarships, freelance work, events, and programs gathered in one place.",
    icon: BriefcaseBusiness,
    href: "/opportunities",
  },
  {
    title: "NEXUS Labs",
    description: "Concepts, experiments, and product initiatives turning ideas into technology projects with direction.",
    icon: Lightbulb,
    href: "/labs",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Youth-focused technology ecosystem"
        title="Build the future with NEXUS."
        description="Software solutions, AI access, developer community and opportunities—all connected in one ecosystem."
        primaryLabel="Explore NEXUS"
        primaryHref="#introduction"
        secondaryLabel="Join the Community"
        secondaryHref="/community"
        stats={siteConfig.metrics.map((metric) => ({ ...metric }))}
      />

      <section id="introduction" className="section-shell py-20">
        <SectionHeader
          eyebrow="NEXUS introduction"
          title="A modern ecosystem for young people building with technology"
          description="NEXUS brings together software delivery, AI enablement, education, community, and opportunities so builders can move with more confidence and support."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {introFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Software Solutions"
          title="Products, platforms, and digital systems designed to help organizations grow"
          description="NEXUS delivers focused software services that combine strong UX, modern engineering, and adaptable architecture without unnecessary complexity."
        >
          <Button asChild variant="ghost" className="px-0 text-sm text-[#0B0D10] hover:bg-transparent hover:text-[#2D7A24]">
            <Link href="/solutions">
              View all solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </SectionHeader>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-[#F7F8F6] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="AI Access"
            title="Structured access to practical AI tools"
            description="From beginner support to builder workflows, AI Access helps people choose the right tools, adopt them with confidence, and keep learning through guided resources."
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
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Community, learning, and growth"
          title="Everything around the product work matters too"
          description="NEXUS is not only about building software—it is also about helping people connect, learn faster, collaborate better, and find meaningful ways to grow."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemSections.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FFEE] text-[#2D7A24]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B0D10]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5E6673]">{item.description}</p>
                <Button asChild variant="ghost" className="mt-5 px-0 hover:bg-transparent">
                  <Link href={item.href}>
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F7F8F6] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Featured resources"
            title="A learning hub shaped around practical growth"
            description="Explore curated resources across programming, web development, AI, design, entrepreneurship, and career development."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Opportunities"
          title="Real pathways to learn, earn, and get seen"
          description="NEXUS highlights opportunities that help young builders gain experience, income, network strength, and momentum."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {opportunities.slice(0, 4).map((opportunity) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} />
          ))}
        </div>
      </section>

      <section className="bg-[#F7F8F6] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="NEXUS Labs"
            title="Ideas, experiments, and products moving from concept to launch"
            description="Labs is where NEXUS explores product concepts, validates solutions, and builds projects that can create real value in the ecosystem."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions about NEXUS"
          description="A quick overview of how the ecosystem works today and how it has been intentionally designed to remain simple, accessible, and upgrade-ready."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ items={generalFaqs} />
        </div>
      </section>

      <CTASection
        title="Ready to build, connect, access, and grow with NEXUS?"
        description="Whether you need a software solution, a stronger community, practical AI access, or the next opportunity on your path, NEXUS is designed to help you move forward."
        primaryLabel="Join NEXUS"
        primaryHref={siteConfig.communityUrl}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
