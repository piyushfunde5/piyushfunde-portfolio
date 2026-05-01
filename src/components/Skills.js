const signals = [
  {
    title: "FinTech",
    description: "Payments, fraud, cross-sell strategy.",
  },
  {
    title: "0 to 1 products",
    description: "Built and sold a startup from scratch.",
  },
  {
    title: "Prototyping",
    description: "Figma, Lovable, code-assisted delivery.",
  },
  {
    title: "Data-informed",
    description: "SQL, metrics, A/B testing thinking.",
  },
  {
    title: "AI-era PM",
    description: "LLM products, agentic workflows.",
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-x-auto hide-scrollbar">
        <div className="flex gap-8 lg:gap-12 min-w-max">
          {signals.map((signal) => (
            <div key={signal.title} className="flex-1 max-w-xs">
              <p className="text-[var(--color-primary)] font-bold mb-2">
                {signal.title}
              </p>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-snug">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
