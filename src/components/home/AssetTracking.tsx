import { Layers, PieChart, Activity, Globe } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const features = [
  { icon: Layers, title: "Multi-Asset Classes", desc: "Equities, bonds, crypto, real estate, and alternatives — all in one view." },
  { icon: PieChart, title: "Smart Allocation", desc: "AI-driven rebalancing suggestions to optimize your risk-adjusted returns." },
  { icon: Activity, title: "Performance Analytics", desc: "Track IRR, TWR, and benchmark comparisons with institutional-grade accuracy." },
  { icon: Globe, title: "Global Markets", desc: "Monitor assets across 90+ exchanges in 40+ countries simultaneously." },
];

const AssetTracking = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Asset Tracking</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Every asset, one <span className="gradient-text">unified platform</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14 text-lg">
          Whether it's traditional equities or digital assets, track everything with precision.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <GlassCard className="p-7 h-full">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AssetTracking;
