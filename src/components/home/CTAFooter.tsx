import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { Link } from "react-router-dom";

const footerLinks = [
  { heading: "Product", links: ["Platform", "Security", "Pricing", "Changelog"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { heading: "Resources", links: ["Documentation", "API Reference", "Status", "Support"] },
  { heading: "Legal", links: ["Privacy", "Terms", "Compliance", "Cookies"] },
];

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-purple opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                Ready to elevate your <span className="gradient-text">portfolio</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join 250,000+ professionals managing $12B+ in assets on Vaultex.
              </p>
              <Link
                to="/pricing"
                className="gradient-purple text-primary-foreground font-semibold px-10 py-4 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity glow-purple text-base"
              >
                Start Free 14-Day Trial <ArrowRight size={18} />
              </Link>
              <p className="text-xs text-muted-foreground mt-4">No credit card required · Cancel anytime</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border/50 px-6 py-16">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold gradient-text">Vaultex</span>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Premium asset management for the modern era.
            </p>
          </div>
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Vaultex. All rights reserved.</p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
