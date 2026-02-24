import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, Gauge, Settings, Zap, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const phases = [
  { icon: ClipboardCheck, title: "Pre-Commissioning", desc: "System review, equipment verification, documentation check, and safety inspections before startup." },
  { icon: Settings, title: "Functional Testing", desc: "Point-to-point wiring checks, valve operations, damper testing, and control sequence verification." },
  { icon: Gauge, title: "Performance Testing", desc: "Full-load and part-load testing, temperature validation, airflow balancing, and efficiency measurement." },
  { icon: Zap, title: "Handover & Training", desc: "Comprehensive system documentation, operator training, and warranty activation." },
];

const scope = [
  "Chiller plant commissioning",
  "AHU & FCU balancing",
  "BMS point verification",
  "Duct leakage testing",
  "Water balancing & treatment",
  "Energy performance benchmarking",
];

const CommissioningServices = () => (
  <>
    <PageHero title="Commissioning Services" subtitle="Ensuring optimal system performance from day one" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Commissioning Process" subtitle="Systematic approach to deliver peak performance" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {phases.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <GlassCard className="flex gap-5 bg-card">
                <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10">
                  <p.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Scope of Work" subtitle="Comprehensive commissioning coverage" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {scope.map((s, i) => (
            <AnimatedSection key={s} delay={i * 0.06}>
              <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={false}>
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Get Professional Commissioning</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Schedule Service <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CommissioningServices;
