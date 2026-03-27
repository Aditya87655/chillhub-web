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
    <PageHero
      title="Building Management System (BMS) Company"
      subtitle="The best Building Management System(bms) company for HVAC"
      backgroundImage="https://www.drycoolchillers.com/wp-content/uploads/2015/10/Single-Air-Cooled-Screw-Chiller.jpg"
    />

    {/* Introduction Section */}
    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionHeading title="Building Management System (BMS)" centered={false} />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We are the best Building Management System(bms) company for HVAC. Our building management system contractor allows small and medium-sized buildings to create a BMS network and access their equipment by removing technical complexity.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Providing quick access to BMS data helps companies deliver higher technical staff efficiency, increase building occupancy comfort, and significantly decrease energy and carbon footprint.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A BMS connects the HVAC and various construction equipment to work as an integrated unit. Ideally, they should centralize operations and make it easy to visualize data using a user interface or console.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
              <img
                src="https://www.drycoolchillers.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-10-at-5.18.44-PM.jpeg"
                alt="Building Management System"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Essential Features */}
    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            title="Essential Features of BMS Software"
            subtitle="Centralized management and intelligent control"
          />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Energy and data monitoring",
            "Better control of appliances",
            "Safety Management",
            "Integration of separate operations",
            "Reducing management workload",
            "Better tool life",
            "Gain better control over buildings",
            "Data acquisition & reporting"
          ].map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={true}>
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Business Benefits */}
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://www.drycoolchillers.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-10-at-5.18.44-PM-1.jpeg"
                alt="BMS Technical Illustration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2">
            <SectionHeading title="Primary business uses for BMS?" centered={false} />
            <div className="space-y-4">
              {[
                "Increasing Productivity",
                "Relevant response to complaints",
                "Allocation of operating costs",
                "Targeted resources for replacement",
                "Early detection of problems",
                "Reduction in operating costs",
                "Better Tool Life",
                "Better Security"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* BMS Software Can Help You */}
    <section className="py-20 bg-muted/30">
      <div className="container text-center">
        <AnimatedSection>
          <SectionHeading title="BMS Software Can Help You" centered={true} />
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            Our Building Management System contractor allows small and medium-sized buildings to create a BMS network and access their equipment by removing technical complexity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <h4 className="text-xl font-bold mb-4">Technical Efficiency</h4>
              <p className="text-sm text-muted-foreground">Deliver higher technical staff efficiency through centralized data access.</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <h4 className="text-xl font-bold mb-4">Occupancy Comfort</h4>
              <p className="text-sm text-muted-foreground">Increase building occupancy comfort by intelligent climate control.</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <h4 className="text-xl font-bold mb-4">Energy Scaling</h4>
              <p className="text-sm text-muted-foreground">Significantly decrease energy and carbon footprint across all equipment.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-teal-gradient">
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
