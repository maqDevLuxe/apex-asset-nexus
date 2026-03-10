import Navbar from "../components/Navbar";
import CTAFooter from "../components/home/CTAFooter";
import ScrollReveal from "../components/ScrollReveal";
import GlassCard from "../components/GlassCard";
import { Cpu, Database, Globe, Layers, LineChart, Repeat, Shield, Zap } from "lucide-react";

const features = [
  { icon: Cpu, title: "AI-Powered Analytics", desc: "Transformer-based ML models process 50M+ data points daily for yield prediction, risk scoring, and anomaly detection." },
  { icon: Database, title: "Unified Data Layer", desc: "Aggregate data from 200+ custodians, brokers, and exchanges into a single source of truth." },
  { icon: LineChart, title: "Advanced Charting", desc: "Interactive charts with 100+ technical indicators, custom overlays, and multi-timeframe analysis." },
  { icon: Repeat, title: "Automated Rebalancing", desc: "Set target allocations and let our engine automatically rebalance across asset classes and currencies." },
  { icon: Globe, title: "Global Market Access", desc: "Trade and track assets across 90+ exchanges in 40+ countries with sub-millisecond data feeds." },
  { icon: Shield, title: "Compliance Engine", desc: "Built-in regulatory compliance for MiFID II, Dodd-Frank, and SEC reporting requirements." },
  { icon: Layers, title: "Multi-Entity Support", desc: "Manage portfolios across multiple entities, funds, and family office structures." },
  { icon: Zap, title: "API-First Architecture", desc: "RESTful and WebSocket APIs with 99.99% uptime SLA for seamless integration." },
];

const Platform = () => (
  <div className="crosshair-cursor">
    <Navbar />
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Platform</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Built for <span className="gradient-text">institutional performance</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A vertically integrated platform combining AI analytics, real-time data, and institutional-grade infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
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
    <CTAFooter />
  </div>
);

export default Platform;
