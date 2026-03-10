import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: "1.00" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", rate: "0.92" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", rate: "0.79" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", rate: "149.2" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", rate: "0.88" },
  { code: "BTC", name: "Bitcoin", flag: "₿", rate: "0.0000102" },
];

const MultiCurrency = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <GlassCard className="p-6">
            <div className="text-sm font-semibold text-foreground mb-4">Currency Converter</div>
            <div className="space-y-3">
              {currencies.map(({ code, name, flag, rate }) => (
                <div key={code} className="flex items-center justify-between glass-card p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{flag}</span>
                    <div>
                      <div className="text-sm font-bold text-foreground">{code}</div>
                      <div className="text-xs text-muted-foreground">{name}</div>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{rate}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Multi-Currency</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Invest in <span className="gradient-text">any currency</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Seamlessly manage portfolios across 180+ fiat currencies and 500+ digital assets with real-time FX conversion and hedging tools.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "180+", label: "Fiat Currencies" },
              { val: "500+", label: "Digital Assets" },
              { val: "0.01%", label: "FX Spread" },
              { val: "24/7", label: "Live Rates" },
            ].map(({ val, label }) => (
              <div key={label} className="glass-card p-4">
                <div className="text-2xl font-extrabold gradient-text">{val}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default MultiCurrency;
