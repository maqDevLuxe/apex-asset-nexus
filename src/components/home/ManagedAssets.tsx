import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../ScrollReveal";

const stats = [
  { value: 12.4, suffix: "B+", label: "Assets Under Management", prefix: "$" },
  { value: 250, suffix: "K+", label: "Active Users", prefix: "" },
  { value: 99.99, suffix: "%", label: "Platform Uptime", prefix: "" },
  { value: 42, suffix: "+", label: "Countries Served", prefix: "" },
];

const Counter = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Number((eased * value).toFixed(value % 1 !== 0 ? 2 : 0)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold gradient-text tabular-nums">
      {prefix}{count}{suffix}
    </div>
  );
};

const ManagedAssets = () => (
  <section className="section-padding border-t border-border/50">
    <div className="container-narrow">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, suffix, label, prefix }, i) => (
          <ScrollReveal key={label} delay={i * 0.1}>
            <Counter value={value} prefix={prefix} suffix={suffix} />
            <div className="text-sm text-muted-foreground mt-2">{label}</div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ManagedAssets;
