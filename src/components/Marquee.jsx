export default function Marquee({ items, variant = "ink" }) {
  const row = (
    <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
      {items.concat(items).map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-12 font-display text-2xl sm:text-3xl"
          style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 80" }}
        >
          <span className={variant === "ink" ? "text-ink/85" : "text-cream/85"}>{item}</span>
          <span aria-hidden className={variant === "ink" ? "text-brass" : "text-brass-soft"}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative overflow-hidden border-y ${variant === "ink" ? "border-ink/15" : "border-cream/15"} py-5`}>
      <div className="flex w-max">
        {row}
        {row}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: "linear-gradient(90deg, var(--color-paper), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: "linear-gradient(-90deg, var(--color-paper), transparent)" }}
      />
    </div>
  );
}
