import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import GlassCard from "../GlassCard";

const Hero = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden crosshair-cursor">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full gradient-purple opacity-10 blur-[120px] pointer-events-none" />

    <div className="container-narrow relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full gradient-purple animate-pulse" />
            Now managing $12B+ in assets
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-balance">
            Smarter{" "}
            <span className="gradient-text">Asset Management</span>{" "}
            for the Modern Era
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Leverage AI-powered analytics, real-time market data, and bank-grade security to maximize your portfolio returns across every asset class.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/pricing"
              className="gradient-purple text-primary-foreground font-semibold px-8 py-3.5 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity glow-purple"
            >
              Start Free Trial <ArrowRight size={16} />
            </a>
            <a
              href="/platform"
              className="glass-card px-8 py-3.5 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors inline-flex items-center gap-2"
            >
              View Platform
            </a>
          </div>
        </motion.div>

        {/* Floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="animate-float">
            <GlassCard className="p-6 glow-purple">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-foreground">Portfolio Overview</span>
                <span className="text-xs text-primary font-medium">+14.2% MTD</span>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 h-32 mb-4">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-sm gradient-purple opacity-80"
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: TrendingUp, label: "Returns", value: "+24.8%" },
                  { icon: DollarSign, label: "AUM", value: "$2.4M" },
                  { icon: BarChart3, label: "Alpha", value: "+3.2%" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass-card p-3 text-center">
                    <Icon size={14} className="mx-auto text-primary mb-1" />
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-bold text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs font-medium"
          >
            🔒 Bank-Grade Encrypted
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-xs font-medium"
          >
            ⚡ Real-time Sync
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
