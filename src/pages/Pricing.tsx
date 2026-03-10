import { Check } from "lucide-react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/home/CTAFooter";
import ScrollReveal from "../components/ScrollReveal";
import GlassCard from "../components/GlassCard";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    desc: "For individual investors getting started",
    features: ["Up to $500K AUM", "5 Connected Accounts", "Basic Analytics", "Email Support", "Daily Data Sync"],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/mo",
    desc: "For serious portfolio managers",
    features: ["Up to $10M AUM", "Unlimited Accounts", "AI Yield Predictions", "Priority Support", "Real-time Data", "Multi-Currency", "API Access"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For institutions and family offices",
    features: ["Unlimited AUM", "White-Label Option", "Dedicated Account Manager", "Custom Integrations", "SLA Guarantee", "On-Premise Deployment", "Compliance Engine"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => (
  <div className="crosshair-cursor">
    <Navbar />
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Start free for 14 days. No credit card required. Scale as you grow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map(({ name, price, period, desc, features, cta, highlighted }, i) => (
            <ScrollReveal key={name} delay={i * 0.1}>
              <GlassCard className={`p-8 h-full ${highlighted ? "glow-purple ring-1 ring-primary/30" : ""}`}>
                {highlighted && (
                  <span className="inline-block gradient-purple text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{name}</h3>
                <div className="mt-2 mb-1">
                  <span className="text-4xl font-extrabold text-foreground">{price}</span>
                  <span className="text-sm text-muted-foreground">{period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{desc}</p>

                <a
                  href="#"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm mb-6 transition-opacity hover:opacity-90 ${
                    highlighted
                      ? "gradient-purple text-primary-foreground glow-purple"
                      : "glass-card text-foreground hover:border-primary/40"
                  }`}
                >
                  {cta}
                </a>

                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTAFooter />
  </div>
);

export default Pricing;
