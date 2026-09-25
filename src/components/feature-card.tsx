import { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#E7ECE2] bg-white p-6 shadow-[0_12px_40px_rgba(11,13,16,0.04)]">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2FFEE] text-[#2D7A24]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0B0D10]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5E6673]">{description}</p>
    </div>
  );
}
