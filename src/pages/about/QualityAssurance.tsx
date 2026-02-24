import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Microscope, Gauge, FlaskConical, CheckCircle, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const qaPillars = [
  { icon: Microscope, title: "Incoming Inspection", desc: "Every raw material and component is rigorously inspected before entering the production line." },
  { icon: Gauge, title: "In-Process Testing", desc: "Continuous quality checks during assembly with precision instruments and calibrated gauges." },
  { icon: FlaskConical, title: "Performance Testing", desc: "Each chiller undergoes comprehensive performance and leak testing before dispatch." },
  { icon: ShieldCheck, title: "Final QC Approval", desc: "Multi-point final quality clearance ensuring zero-defect delivery to customers." },
];

const standards = [
  "ISO 9001:2008 Quality Management System",
  "CE Marking compliance for European markets",
  "BIS Certification for Indian standards",
  "AHRI Performance Certification",
  "Pressure vessel testing per ASME standards",
  "Refrigerant leak testing with helium detection",
];

const QualityAssurance = () => (
  <>
    <PageHero title="Quality Assurance" subtitle="Uncompromising commitment to manufacturing excellence" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Quality Process" subtitle="Rigorous testing at every stage of manufacturing" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {qaPillars.map((p, i) => (
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
          <SectionHeading title="Standards & Certifications" subtitle="Compliant with international quality benchmarks" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {standards.map((s, i) => (
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Quality You Can Trust</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Every chiller is backed by our zero-defect commitment.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default QualityAssurance;
