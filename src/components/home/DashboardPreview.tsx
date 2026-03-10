import { motion } from "framer-motion";
import { BarChart3, Wallet, Shield, Bell, LineChart, Settings } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const bentoItems = [
  { icon: BarChart3, title: "Portfolio Analytics", desc: "Deep-dive into performance metrics", span: "md:col-span-2" },
  { icon: Wallet, title: "Smart Wallet", desc: "Unified asset dashboard", span: "" },
  { icon: Shield, title: "Risk Monitor", desc: "Real-time risk scoring", span: "" },
  { icon: LineChart, title: "Yield Curves", desc: "Interactive yield analysis", span: "md:col-span-2" },
  { icon: Bell, title: "Smart Alerts", desc: "AI-triggered notifications", span: "" },
  { icon: Settings, title: "Automation", desc: "Rule-based trading", span: "" },
];

const DashboardPreview = () => (
  <section className="section-padding border-t border-border/50">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Dashboard</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Your command <span className="gradient-text">center</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A beautifully crafted interface designed for speed and clarity.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-4 gap-4">
        {bentoItems.map(({ icon: Icon, title, desc, span }, i) => (
          <ScrollReveal key={title} delay={i * 0.08} className={span}>
            <GlassCard className="p-6 h-full group">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center mb-3">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
              </motion.div>
              <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default DashboardPreview;
