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
    <div className="glass-panel h-full p-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7CFF6B]/14 text-[#7CFF6B]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}
