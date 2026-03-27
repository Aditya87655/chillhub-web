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
    <PageHero
      title="Commissioning Services"
      subtitle="The process of planning, documenting, scheduling, testing, and verifying"
      backgroundImage="https://www.drycoolchillers.com/wp-content/uploads/2015/10/Single-Air-Cooled-Screw-Chiller.jpg"
    />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-primary">“A commissioned building can help you save 20% on the utility costs.”</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Drycool Commissioning focuses on dynamic system operation instead of static equipment installation. Commissioning is not a startup of an equipment but a process of planning, documenting, scheduling, testing, verifying, and training, to provide a facility that operates as a fully functional system per the OPR (Owner’s Project Requirements).
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection>
            <GlassCard className="h-full bg-card overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://www.drycoolchillers.com/wp-content/uploads/2022/11/new-construction-commissioning-services.jpg"
                  alt="New Construction Commissioning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold mb-4">New Construction Commissioning Services:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Drycool Systems believes most buildings in India have never gone through any type of commissioning or even testing after installation. New Construction Commissioning (NCCx) can provide the missing link to make the building efficient and sustainable. Drycool works on the client's behalf to ensure that the systems are designed, installed, and tested according to the OPR (Owner's Project Requirement).
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <GlassCard className="h-full bg-card overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://www.drycoolchillers.com/wp-content/uploads/2022/11/retro-commissioning-services.jpg"
                  alt="Retro-Commissioning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold mb-4">Retro-Commissioning Services:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Retro-Commissioning (RCx) is a process of testing and verifying existing building systems to improve their performance. Over time, building systems can drift from their original design and intent. Retro-commissioning helps identify and correct these issues, leading to improved efficiency and comfort.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <GlassCard className="h-full bg-card overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://www.drycoolchillers.com/wp-content/uploads/2022/11/monitoring-based-commissioning-services.jpg"
                  alt="Monitoring-based Commissioning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold mb-4">Monitoring-based Commissioning Services:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MBCx is a perpetual commissioning process that provides data and visibility into building operations. MBCx works in tandem with the BMS and other energy sub-meters. Analytics can identify equipment faults and help maintenance staff fix issues before they become terminal.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GlassCard className="h-full bg-card overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://www.drycoolchillers.com/wp-content/uploads/2022/11/smart-commissioning-services.png"
                  alt="Smart Commissioning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold mb-4">Smart Commissioning:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Standard commissioning guidelines like ASHRAE 0 and ASHRAE 1.1 suggest sampling of 10% to 20% of terminal building assets. Smart Commissioning uses automation and data to test 100% of the terminal assets (VAVs, FCUs, valves, dampers) in a fraction of the time with higher accuracy.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <AnimatedSection>
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full" />
            <h3 className="text-2xl font-bold mb-6">Re-Commissioning Services:</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Re-commissioning is a process of periodic testing of building systems that have already undergone initial commissioning. This ensures that the building continues to operate at peak efficiency and that any changes or repairs have not negatively impacted system performance.
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">Maintain efficiency over the building lifecycle</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src="https://www.drycoolchillers.com/wp-content/uploads/2022/11/re-commissioning-services.jpg"
                  alt="Re-Commissioning Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Optimize your building performance today</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Consult with Experts <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CommissioningServices;
