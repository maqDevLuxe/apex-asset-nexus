import ScrollReveal from "../ScrollReveal";

const AppPromo = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="relative rounded-3xl overflow-hidden glow-purple">
          <div className="glass-card p-8 md:p-16 text-center border-0">
            <div className="absolute inset-0 gradient-purple opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground">
                Experience the future of <span className="gradient-text">wealth management</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Desktop, tablet, or mobile — your portfolio follows you everywhere with our cross-platform experience.
              </p>
              <div className="glass-card inline-block p-1 rounded-2xl">
                <div className="gradient-purple rounded-xl px-6 py-3 text-primary-foreground font-semibold text-sm">
                  Download the App →
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AppPromo;
