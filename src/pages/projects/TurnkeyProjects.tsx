import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ClipboardList, HardHat, Settings, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const phases = [
  { icon: ClipboardList, title: "Design & Engineering", desc: "Load calculation, equipment selection, system design, and engineering drawings." },
  { icon: HardHat, title: "Procurement & Supply", desc: "Sourcing of all equipment, materials, and components from certified vendors." },
  { icon: Settings, title: "Installation & Commissioning", desc: "Complete installation, testing, balancing, and system commissioning." },
  { icon: Zap, title: "Operations & Maintenance", desc: "Ongoing maintenance, performance monitoring, and warranty support." },
];

const projectTypes = [
  "Central Air Conditioning Plants",
  "Chiller Plant Rooms",
  "Industrial Process Cooling Systems",
  "Data Center Cooling",
  "Hospital HVAC Systems",
  "Pharmaceutical Clean Room HVAC",
  "Hotel & Hospitality HVAC",
  "Mall & Retail Space Cooling",
];

const TurnkeyProjects = () => (
  <>
    <PageHero title="Turnkey Projects" subtitle="End-to-end project delivery from concept to commissioning" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Turnkey Approach" subtitle="Single-point responsibility for complete HVAC projects" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <GlassCard className="text-center py-8 bg-card">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 mx-auto mb-4">
                  <p.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
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
          <SectionHeading title="Project Types" subtitle="Turnkey solutions across sectors" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {projectTypes.map((p, i) => (
            <AnimatedSection key={p} delay={i * 0.05}>
              <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={false}>
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span className="text-xs font-medium text-foreground">{p}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Start Your Turnkey Project</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default TurnkeyProjects;
