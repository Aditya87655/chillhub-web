import { Link } from "react-router-dom";
import { ArrowRight, Award, Cog, Building2, Thermometer, Droplets, Wind } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const expertiseAreas = [
  { icon: Thermometer, title: "Chiller Plant Design", desc: "Complete chiller plant room design including equipment sizing, piping layout, and ancillary systems." },
  { icon: Wind, title: "HVAC Engineering", desc: "Central air conditioning system design for commercial complexes, hospitals, and industrial facilities." },
  { icon: Droplets, title: "Process Cooling", desc: "Specialized cooling system design for manufacturing processes including injection molding, extrusion, and pharma." },
  { icon: Building2, title: "MEP Consultancy", desc: "Mechanical, Electrical, and Plumbing design consultancy with energy-efficient solutions." },
  { icon: Cog, title: "Retrofit & Upgrades", desc: "Energy audits, chiller replacement studies, and system optimization for existing installations." },
  { icon: Award, title: "Green Building", desc: "LEED and GRIHA-compliant HVAC design for sustainable, energy-efficient buildings." },
];

const Expertise = () => (
  <>
    <PageHero title="Our Expertise" subtitle="Decades of experience in cooling system engineering and design" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Areas of Expertise" subtitle="Comprehensive capabilities in cooling and HVAC engineering" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((e, i) => (
            <AnimatedSection key={e.title} delay={i * 0.08}>
              <GlassCard className="bg-card">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 mb-4">
                  <e.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Leverage Our Expertise</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Consult Our Engineers <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Expertise;
