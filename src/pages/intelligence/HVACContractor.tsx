import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle, Wrench, Thermometer, Wind } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import factoryImg from "@/assets/factory-floor.jpg";

const services = [
  { icon: Thermometer, title: "HVAC System Design", desc: "Complete load calculation, duct design, piping layout, and equipment selection for commercial & industrial buildings." },
  { icon: Wrench, title: "Installation & Commissioning", desc: "Professional installation of central AC, VRV/VRF, chilled water systems, and AHU/FCU networks." },
  { icon: Wind, title: "Ductwork & Piping", desc: "GI/pre-insulated duct fabrication, chilled water piping, and insulation work with leak-proof execution." },
  { icon: Building2, title: "AMC & Maintenance", desc: "Annual maintenance contracts covering preventive maintenance, breakdown service, and performance audits." },
];

const projectTypes = [
  "Commercial Office Buildings",
  "Shopping Malls & Retail Spaces",
  "Hospitals & Healthcare Facilities",
  "Hotels & Hospitality",
  "Data Centers",
  "Industrial Manufacturing Plants",
  "Pharmaceutical Clean Rooms",
  "Educational Institutions",
];

const HVACContractor = () => (
  <>
    <PageHero title="HVAC Contractor" subtitle="End-to-end HVAC design, installation, and maintenance services" />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionHeading title="Complete HVAC Solutions" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Drycool Intelligence offers comprehensive HVAC contracting services — from initial design and engineering to installation, commissioning, and ongoing maintenance. Our team of certified HVAC engineers ensures optimal comfort, energy efficiency, and system reliability for every project.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {projectTypes.map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={factoryImg} alt="HVAC installation" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our HVAC Services" subtitle="From design to delivery" />
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

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need an HVAC Partner?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Get a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default HVACContractor;
