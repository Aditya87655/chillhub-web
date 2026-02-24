import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Gauge, Zap, Monitor, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const services = [
  { icon: Cpu, title: "BMS Installation", desc: "Complete BMS hardware and software deployment with DDC controllers, sensors, and actuators." },
  { icon: Monitor, title: "SCADA Integration", desc: "Supervisory control and data acquisition systems for centralized building operations management." },
  { icon: Gauge, title: "Energy Monitoring", desc: "Real-time energy metering, sub-metering, and benchmarking against ECBC/GRIHA standards." },
  { icon: Zap, title: "Energy Optimization", desc: "Demand-side management, load shedding, power factor correction, and tariff optimization." },
];

const bmsCapabilities = [
  "HVAC system monitoring and control",
  "Chiller plant optimization",
  "Lighting management systems",
  "Fire alarm system integration",
  "Access control & CCTV",
  "Water management & metering",
  "Elevator monitoring",
  "Power distribution monitoring",
];

const BMSServices = () => (
  <>
    <PageHero title="BMS Installation & Energy Services" subtitle="Centralized control and energy optimization for modern buildings" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our BMS Services" subtitle="End-to-end building management solutions" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <GlassCard className="flex gap-5 bg-card">
                <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
          <SectionHeading title="BMS Capabilities" subtitle="Comprehensive integration across all building systems" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {bmsCapabilities.map((c, i) => (
            <AnimatedSection key={c} delay={i * 0.05}>
              <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={false}>
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span className="text-xs font-medium text-foreground">{c}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Optimize Your Building's Energy</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Get BMS Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default BMSServices;
