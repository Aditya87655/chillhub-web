import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import factoryImg from "@/assets/factory-floor.jpg";
import heroImg from "@/assets/hero-chiller.jpg";
import { CheckCircle, Building2, Wrench, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { icon: Building2, title: "HVAC Contractor", desc: "Complete HVAC design, installation, and maintenance for commercial & industrial buildings." },
  { icon: Wrench, title: "Commissioning Services", desc: "Professional commissioning to ensure optimal system performance from day one." },
  { icon: Cpu, title: "Smart Buildings Services", desc: "IoT-enabled building automation for energy efficiency and comfort." },
  { icon: Zap, title: "BMS Installation & Energy", desc: "Building Management Systems for centralized control and energy optimization." },
];

const capabilities = [
  "CNC Machining & Precision Fabrication",
  "Automated Assembly Lines",
  "Quality Testing Laboratories",
  "Pressure & Leak Testing Facilities",
  "In-House R&D Center",
  "ISO 9001:2008 Certified Factory",
];

const Infrastructure = () => (
  <>
    <PageHero title="Drycool Intelligence" subtitle="Smart infrastructure, commissioning, and building solutions" />

    <section id="hvac-contractor" className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Services" subtitle="End-to-end HVAC and smart building solutions" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
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

    {/* Section Divider */}
    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Manufacturing Excellence" subtitle="State-of-the-art facilities in Noida, India" />
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden shadow-xl h-72">
              <img src={factoryImg} alt="Manufacturing facility" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-xl overflow-hidden shadow-xl h-72">
              <img src={heroImg} alt="Chiller production" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c} delay={i * 0.08}>
              <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={false}>
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{c}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Partner with Drycool Intelligence
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Infrastructure;
