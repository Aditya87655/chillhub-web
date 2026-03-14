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
    <PageHero
      title="BMS INSTALLATION AND ENERGY SERVICES"
      subtitle="Complete Building Automation and Bundled Energy Project Solutions"
      backgroundImage="https://www.drycoolchillers.com/wp-content/uploads/2015/10/Single-Air-Cooled-Screw-Chiller.jpg"
    />

    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <SectionHeading title="Building Automation" centered={false} />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Drycool Intelligence staff handles scheduling, auditing, design, customer proposal preparation, and installation of building automation and bundled energy projects.
              </p>
              <p>
                We offer a turnkey design-build approach to building automation and bundled energy projects. Drycool integrates professional services with high-quality implementation to provide bundled energy solutions. This allows building owners to implement multiple energy conservation measures with a single point of responsibility.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative group">
              <img
                src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/Building-Automation-1.webp"
                alt="Building Automation"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-bold">Reliable Installation Services</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-card/30 border border-border rounded-3xl p-8 mb-20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
                <img
                  src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/BAS-BMS-Banner.png"
                  alt="BAS BMS Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-6">Energy Management Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our energy management services combined with advanced BMS installations provide a cohesive strategy for reducing operational costs. We focus on optimizing mechanical systems to work in unison with digital controls, ensuring long-term sustainability and performance.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Scheduling & Auditing",
              desc: "Complete assessment of building requirements and energy patterns to design the optimal control strategy.",
              icon: <ArrowRight className="h-5 w-5" />
            },
            {
              title: "Turnkey Implementation",
              desc: "From initial design to final commissioning, we manage the entire project lifecycle for your facility.",
              icon: <ArrowRight className="h-5 w-5" />
            },
            {
              title: "Maintenance Support",
              desc: "Continuous monitoring and support to ensure the system continues to deliver energy savings over time.",
              icon: <ArrowRight className="h-5 w-5" />
            }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <GlassCard className="p-8 h-full">
                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <AnimatedSection>
      <div className="container py-20">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl border border-white/10">
          <img
            src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/BMS-SERVICES.webp"
            alt="BMS Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
            <div className="max-w-2xl px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Innovative Building Automation</h3>
              <p className="text-white/90 text-lg">Integrated professional services with high-quality implementation for modern buildings.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center px-4">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Scale Your Energy Efficiency</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Get Started with BMS <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default BMSServices;
