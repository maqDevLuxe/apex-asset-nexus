import Navbar from "../components/Navbar";
import CTAFooter from "../components/home/CTAFooter";
import ScrollReveal from "../components/ScrollReveal";
import GlassCard from "../components/GlassCard";
import { Shield, Lock, Eye, Server, FileCheck, Fingerprint, AlertTriangle, Globe } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "AES-256 Encryption", desc: "Military-grade encryption for all data at rest and in transit using TLS 1.3." },
  { icon: Eye, title: "Zero-Knowledge Proof", desc: "Your private keys and sensitive data are never accessible to our systems." },
  { icon: Server, title: "Multi-Region Redundancy", desc: "Data replicated across 8 global data centers with automatic failover." },
  { icon: FileCheck, title: "SOC 2 Type II Certified", desc: "Independently audited controls for security, availability, and confidentiality." },
  { icon: Fingerprint, title: "Biometric Auth", desc: "Multi-factor authentication with biometric, hardware key, and TOTP support." },
  { icon: AlertTriangle, title: "Threat Detection", desc: "24/7 AI-powered monitoring for anomalous activity and real-time incident response." },
  { icon: Globe, title: "GDPR & CCPA Compliant", desc: "Full compliance with global data privacy regulations and right-to-delete." },
  { icon: Shield, title: "Penetration Testing", desc: "Quarterly third-party penetration testing by leading cybersecurity firms." },
];

const Security = () => (
  <div className="crosshair-cursor">
    <Navbar />
    <section className="section-padding pt-32">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Security</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Bank-grade <span className="gradient-text">protection</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your assets deserve the highest level of security. We go beyond industry standards.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {securityFeatures.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
              <GlassCard className="p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTAFooter />
  </div>
);

export default Security;
