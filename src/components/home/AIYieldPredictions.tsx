import { motion } from "framer-motion";
import { Brain, Sparkles, Target } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const AIYieldPredictions = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">AI Engine</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Predict yields with <span className="gradient-text">machine intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Our proprietary ML models analyze 50M+ data points daily to forecast yields with 94.7% accuracy.
          </p>

          <div className="space-y-4">
            {[
              { icon: Brain, label: "Deep Learning Models", sub: "Transformer-based architecture" },
              { icon: Sparkles, label: "Sentiment Analysis", sub: "NLP on 10K+ sources" },
              { icon: Target, label: "Precision Targeting", sub: "94.7% prediction accuracy" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg gradient-purple flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{label}</div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="p-6 glow-purple">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-foreground">Yield Forecast — Q2 2026</span>
              <span className="text-xs gradient-purple text-primary-foreground px-2 py-1 rounded-full font-medium">AI Powered</span>
            </div>
            {/* Simple forecast visualization */}
            <div className="space-y-4">
              {[
                { asset: "US Treasury 10Y", predicted: "4.82%", confidence: 96, color: "from-primary to-accent" },
                { asset: "Corp Bonds AAA", predicted: "5.14%", confidence: 92, color: "from-primary to-glass-highlight" },
                { asset: "High Yield ETF", predicted: "7.23%", confidence: 88, color: "from-accent to-primary" },
                { asset: "REIT Index", predicted: "6.01%", confidence: 91, color: "from-glass-highlight to-primary" },
              ].map(({ asset, predicted, confidence }) => (
                <div key={asset} className="glass-card p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-foreground">{asset}</span>
                    <span className="text-xs font-bold text-primary">{predicted}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${confidence}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full gradient-purple"
                    />
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">{confidence}% confidence</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AIYieldPredictions;
