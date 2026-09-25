export default function Loading() {
  return (
    <div className="page-shell page-grid">
      <section className="section-shell py-20 sm:py-24">
        <div className="glass-panel section-glow overflow-hidden p-8 sm:p-10">
          <div className="h-4 w-32 animate-pulse rounded-full bg-white/15" />
          <div className="mt-6 h-14 max-w-3xl animate-pulse rounded-[2rem] bg-white/12" />
          <div className="mt-4 h-24 max-w-2xl animate-pulse rounded-[2rem] bg-white/10" />
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="h-12 w-44 animate-pulse rounded-full bg-[#7CFF6B]/60" />
            <div className="h-12 w-40 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass-panel-soft h-52 animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  );
}
