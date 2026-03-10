import { Shield, Lock, Eye, Server } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const features = [
  { icon: Shield, title: "SOC 2 Type II", desc: "Independently audited security controls and processes." },
  { icon: Lock, title: "AES-256 Encryption", desc: "Military-grade encryption for data at rest and in transit." },
  { icon: Eye, title: "Zero-Knowledge Architecture", desc: "We can't see your data — by design." },
  { icon: Server, title: "Multi-Region Redundancy", desc: "Distributed across 8 global data centers for 99.99% uptime." },
];

const BankGradeSecurity = () => (
  <section className="section-padding border-t border-border/50">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Security</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Bank-grade <span className="gradient-text">security</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your assets are protected by the same standards used by the world's largest banks.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <GlassCard className="p-6 text-center h-full">
              <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BankGradeSecurity;
