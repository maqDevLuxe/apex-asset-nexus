import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const tickers = [
  { symbol: "AAPL", price: "189.42", change: "+2.31%", up: true },
  { symbol: "BTC/USD", price: "97,842", change: "+4.12%", up: true },
  { symbol: "EUR/USD", price: "1.0892", change: "-0.18%", up: false },
  { symbol: "GOLD", price: "2,341", change: "+0.87%", up: true },
  { symbol: "S&P 500", price: "5,234", change: "+1.02%", up: true },
  { symbol: "ETH/USD", price: "3,421", change: "+3.45%", up: true },
];

const RealtimeMarketData = () => (
  <section className="section-padding border-t border-border/50">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-3">
            <Zap size={14} /> Real-Time Data
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Markets at your <span className="gradient-text">fingertips</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Sub-millisecond data feeds from 90+ global exchanges, delivered instantly.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tickers.map(({ symbol, price, change, up }, i) => (
          <ScrollReveal key={symbol} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-card-hover p-5 text-center"
            >
              <div className="text-xs text-muted-foreground font-medium mb-1">{symbol}</div>
              <div className="text-xl font-bold text-foreground mb-1">${price}</div>
              <div className={`text-xs font-semibold ${up ? "text-emerald-400" : "text-red-400"}`}>
                {change}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default RealtimeMarketData;
