import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Settings, Thermometer, Cpu, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const customOptions = [
  { icon: Thermometer, title: "Temperature Range", desc: "Custom temperature ranges from -30°C to +25°C for specific process requirements." },
  { icon: Settings, title: "Capacity Sizing", desc: "Chillers from 0.5 TR to 500 TR, designed to match your exact cooling load." },
  { icon: Cpu, title: "Control Systems", desc: "PLC/HMI-based smart controls with remote monitoring and data logging." },
  { icon: Zap, title: "Energy Optimization", desc: "VFD-driven compressors and smart load management for maximum efficiency." },
];

const applications = [
  "Injection Molding & Blow Molding",
  "Food Processing & Dairy",
  "Pharmaceutical Manufacturing",
  "Chemical & Petrochemical Plants",
  "HVAC & Comfort Cooling",
  "Batching Plants & Concrete Cooling",
  "Brewery & Distillery",
  "Textile & Paper Industry",
];

const CustomizedChiller = () => (
  <>
    <PageHero title="Customized Chillers" subtitle="Tailored cooling solutions engineered for your exact requirements" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Bespoke Chiller Engineering" subtitle="Every industry has unique cooling needs — we build for yours" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {customOptions.map((o, i) => (
            <AnimatedSection key={o.title} delay={i * 0.1}>
              <GlassCard className="flex gap-5 bg-card">
                <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10">
                  <o.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
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
          <SectionHeading title="Industries Served" subtitle="Custom chillers for diverse applications" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {applications.map((a, i) => (
            <AnimatedSection key={a} delay={i * 0.05}>
              <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={false}>
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{a}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Custom Engineering Process" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Drycool customization process begins with a thorough assessment of your facility's cooling requirements, including heat load analysis, ambient condition evaluation, available utility infrastructure, and space constraints. Our engineering team uses advanced thermal simulation tools to model system performance under various operating scenarios, ensuring that the final design delivers optimal cooling capacity with maximum energy efficiency across the full range of expected conditions.
            </p>
            <p>
              Custom chiller configurations may include specialized compressor arrangements for redundancy, multi-circuit designs for partial load operation, exotic material construction for corrosive environments, or modular architectures for phased capacity expansion. Our in-house manufacturing capabilities allow us to accommodate unique dimensional requirements, non-standard connection sizes, and application-specific control system integrations that off-the-shelf products cannot address.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Performance Optimization & Lifecycle Value" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every customized chiller is designed with lifecycle cost optimization in mind. Variable frequency drive integration reduces energy consumption by 30 to 50 percent compared to fixed-speed alternatives, while intelligent control systems with PLC and HMI interfaces provide operators with real-time performance monitoring and diagnostic capabilities. These smart features enable proactive maintenance scheduling that prevents costly unplanned downtime and extends equipment service life.
            </p>
            <p>
              Our custom chillers undergo the same rigorous quality testing as our standard product range, including extended performance trials, pressure integrity verification, and comprehensive electrical safety checks. Complete documentation including engineering drawings, performance curves, operation manuals, and maintenance schedules accompanies every custom unit, providing your maintenance team with all the information needed for efficient long-term equipment management.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need a Custom Chiller Solution?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Share your specifications and our engineers will design the perfect chiller for you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Request Custom Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CustomizedChiller;
