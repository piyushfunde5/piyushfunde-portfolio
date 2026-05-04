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
    description: "Agentic prototyping — Claude Code, Cursor, Lovable, Stitch. Full product buildouts using AI assistance, from PRD to deployed product.",
  },
  {
    title: "0 to 1 Builder",
    description: "Bootstrapped and sold a venture. Built and shipped 3 products end-to-end with code assistance.",
  },
  {
    title: "Stakeholder Management",
    description: "Cross-functional delivery across Legal, Compliance, Risk, Engineering, and Marketing in regulated environments.",
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {signals.map((signal) => (
            <div key={signal.title}>
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
