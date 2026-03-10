import ScrollReveal from "../ScrollReveal";

const institutions = [
  "Goldman Sachs", "JP Morgan", "BlackRock", "Morgan Stanley",
  "Fidelity", "Vanguard", "Charles Schwab", "Citadel",
];

const ConnectedInstitutions = () => (
  <section className="section-padding border-t border-border/50">
    <div className="container-narrow">
      <ScrollReveal>
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
          Trusted by leading financial institutions
        </p>
      </ScrollReveal>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {institutions.map((name, i) => (
          <ScrollReveal key={name} delay={i * 0.05}>
            <span className="text-lg font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors tracking-tight">
              {name}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ConnectedInstitutions;
