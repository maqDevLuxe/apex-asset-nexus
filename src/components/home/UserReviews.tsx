import { Star } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import GlassCard from "../GlassCard";

const reviews = [
  { name: "Sarah Chen", role: "Portfolio Manager, Citadel", text: "Vaultex transformed how we track cross-asset performance. The AI predictions alone saved us millions in Q4.", rating: 5 },
  { name: "Marcus Weber", role: "CIO, Weber Capital", text: "The real-time data feeds and multi-currency support are unmatched. We migrated our entire family office onto Vaultex.", rating: 5 },
  { name: "Aisha Patel", role: "VP, Goldman Sachs", text: "Bank-grade security with a consumer-grade UX. Vaultex is the gold standard for modern asset management platforms.", rating: 5 },
];

const UserReviews = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Loved by <span className="gradient-text">professionals</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map(({ name, role, text, rating }, i) => (
          <ScrollReveal key={name} delay={i * 0.1}>
            <GlassCard className="p-6 h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-6 flex-1">"{text}"</p>
              <div>
                <div className="text-sm font-bold text-foreground">{name}</div>
                <div className="text-xs text-muted-foreground">{role}</div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default UserReviews;
