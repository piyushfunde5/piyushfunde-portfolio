const signals = [
  {
    title: "BFSI & Fintech",
    description: "Fraud prevention, referral acquisition, embedded finance, API/SDK integrations in regulated banking.",
  },
  {
    title: "Product Execution",
    description: "Discovery to post-launch: user research, PRDs, sprint planning, backlog grooming, QA, Jira.",
  },
  {
    title: "Data & Analytics",
    description: "SQL, Excel, Tableau, Power BI — metrics definition, A/B testing, insight generation.",
  },
  {
    title: "AI & Prototyping",
    description: "Agentic workflows, prompt engineering, Figma, low-code/no-code (Softr, Airtable, Make.com).",
  },
  {
    title: "0 to 1 Builder",
    description: "Bootstrapped and sold a venture. Built and shipped 3 products end-to-end with code assistance.",
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
