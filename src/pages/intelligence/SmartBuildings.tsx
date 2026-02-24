import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Monitor, BarChart3, Shield, Cpu, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const features = [
  { icon: Wifi, title: "IoT Integration", desc: "Connected sensors and actuators for real-time building monitoring and automated control." },
  { icon: Monitor, title: "Central Dashboard", desc: "Unified building management interface with live data visualization and remote access." },
  { icon: BarChart3, title: "Energy Analytics", desc: "AI-driven analytics for energy consumption patterns, peak demand management, and cost reduction." },
  { icon: Shield, title: "Safety Systems", desc: "Integrated fire alarm, access control, CCTV, and emergency response automation." },
  { icon: Cpu, title: "HVAC Automation", desc: "Smart scheduling, occupancy-based climate control, and predictive maintenance alerts." },
  { icon: Lightbulb, title: "Lighting Control", desc: "Daylight harvesting, motion-based lighting, and scene management for energy savings." },
];

const SmartBuildings = () => (
  <>
    <PageHero title="Smart Buildings Services" subtitle="IoT-enabled building automation for the modern age" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Intelligent Building Solutions" subtitle="Transform your building into a smart, energy-efficient space" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <GlassCard className="bg-card">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 mb-4">
                  <f.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Make Your Building Smarter</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default SmartBuildings;
