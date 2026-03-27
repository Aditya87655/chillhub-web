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
    <PageHero
      title="Smart Buildings Services"
      subtitle="Transformation and efficiency for modern infrastructure"
      backgroundImage="https://www.drycoolchillers.com/wp-content/uploads/2015/10/Single-Air-Cooled-Screw-Chiller.jpg"
    />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h2 className="text-3xl font-heading font-bold mb-6">Innovative Building Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our smart building services focus on creating an intelligent ecosystem where lighting, HVAC, and security systems work together to optimize energy performance and occupant comfort through data-driven insights.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Building Automation Design & Upgrades",
              desc: "Drycool Intelligent designs open and integrated building automation systems. We can help you transition from proprietary or legacy systems to open systems using protocols like BACnet, Lonworks, and Modbus. This avoids vendor lock-in and provides more flexibility for building owners.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2022/11/building-automation-design-upgrades-services.jpg"
            },
            {
              title: "Efficiency Retrofits",
              desc: "Existing building systems can be optimized for efficiency by upgrading to new technologies like VFDs (Variable Frequency Drives), DDC (Direct Digital Control) Upgrades, and newer sensor technologies. These retrofits provide energy savings with relatively short payback periods.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2022/11/efficiency-retrofits-services-1.jpg"
            },
            {
              title: "AI Powered Fault Detection",
              desc: "Drycool Intelligence provides AI-powered fault detection and diagnostics (FDD) for building systems. FDD uses data from the building automation system and other energy sub-meters to identify equipment faults and help maintenance staff fix issues before they become terminal.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2022/11/ai-powered-fault-detection-services.jpg"
            },
            {
              title: "System Integration",
              desc: "Integration of disparate building systems allows them to work together to optimize building performance. For example, the lighting system can share occupancy data with the HVAC system to optimize climate control.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2022/11/system-integration-services.jpg"
            },
            {
              title: "Metering & Monitoring",
              desc: "Metering and monitoring provide visibility into the building's energy consumption. We can help design and implement sub-metering systems to track energy, water, and gas usage. This data is essential for benchmarking and identifying optimization opportunities.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2022/11/metering-monitoring-services.jpg"
            },
            {
              title: "Smart Building Consulting",
              desc: "We provide smart building consulting to help building owners and operators understand how technology can improve building performance. This includes the implementation of IoT sensors, data analytics, and other emerging technologies.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2023/10/smart-buildings-services.jpg"
            }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <GlassCard className="h-full bg-card overflow-hidden group border-white/5">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <SectionHeading title="Make Your Building Smarter" subtitle="Enhance occupant comfort and energy savings" />
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="p-8 rounded-3xl bg-card border border-accent/20 shadow-xl backdrop-blur-md">
              <p className="text-xl font-medium leading-relaxed bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                "Our smart building services focus on creating an intelligent ecosystem where lighting, HVAC, and security systems work together."
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Transform Your Infrastructure?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default SmartBuildings;
