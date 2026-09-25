import { ArrowUpRight, BriefcaseBusiness, Cpu, Globe, Layers3, Sparkles, Workflow } from "lucide-react";

import type { Service } from "@/types";

const iconMap = {
  BriefcaseBusiness,
  Cpu,
  Globe,
  Layers3,
  Sparkles,
  Workflow,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FFEE] text-[#2D7A24]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-[#0B0D10]">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5E6673]">{service.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-[#49515D]">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7CFF6B]" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={service.ctaHref}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0D10] transition-colors hover:text-[#2D7A24]"
      >
        {service.ctaLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
