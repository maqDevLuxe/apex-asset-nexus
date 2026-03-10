import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const posts = [
  {
    tag: "Market Analysis",
    title: "Why AI-Driven Portfolio Management is Outperforming Human Fund Managers in 2026",
    date: "Mar 5, 2026",
    readTime: "8 min",
  },
  {
    tag: "Strategy",
    title: "The Rise of Tokenized Assets: How Real-World Assets Are Going On-Chain",
    date: "Mar 2, 2026",
    readTime: "6 min",
  },
  {
    tag: "Research",
    title: "Multi-Currency Hedging Strategies for Global Portfolios in Volatile Markets",
    date: "Feb 28, 2026",
    readTime: "10 min",
  },
];

const FinTechBlog = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Insights</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              FinTech <span className="gradient-text">Blog</span>
            </h2>
          </div>
          <a href="#" className="text-sm text-primary font-medium hidden md:flex items-center gap-1 hover:underline">
            View all <ArrowUpRight size={14} />
          </a>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5">
        {posts.map(({ tag, title, date, readTime }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <GlassCard className="p-6 h-full flex flex-col justify-between group cursor-pointer">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">{tag}</span>
                <h3 className="text-foreground font-bold mt-3 mb-4 leading-snug group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{date}</span>
                <span>·</span>
                <span>{readTime} read</span>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FinTechBlog;
