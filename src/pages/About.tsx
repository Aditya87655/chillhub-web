import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import factoryImg from "@/assets/factory-floor.jpg";
import { CheckCircle, Award, Globe, Users, Wrench } from "lucide-react";

const highlights = [
  { icon: Award, text: "ISO 9001:2008 Certified Manufacturing" },
  { icon: Globe, text: "Pan-India & Global Export Network" },
  { icon: Users, text: "30+ Years of Industry Experience" },
  { icon: Wrench, text: "Dedicated Engineering & After-Sales Support" },
];

const values = [
  "CFC-Free & Energy Efficient Systems",
  "European Origin Compressors (Bitzer, Frascold)",
  "Advanced R&D and Quality Testing",
  "Custom Solutions for Every Industry",
];

const clients = [
  "Hero MotoCorp", "Delhi Metro", "Patanjali", "UltraTech Cement",
  "Hindustan Unilever", "Dabur", "Mother Dairy", "Amul",
];

const About = () => (
  <>
    <PageHero title="About Us" subtitle="Learn about our legacy in industrial cooling solutions" />

    <section id="profile" className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionHeading title="Our Story" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Drycool Systems India Private Limited is one of the oldest and leading chiller manufacturers in India. We are pioneers in manufacturing industrial chillers including screw, scroll, ammonia, inverter, oil, water, and air chillers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our chillers are CFC-free with integrated energy-saving components, ensuring environmental conservation alongside superior performance. We serve industries across India and export globally to the UAE, Saudi Arabia, Qatar, and African nations.
          </p>
          <ul className="space-y-3">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={factoryImg} alt="Drycool manufacturing facility" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Section Divider */}
    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section id="quality-assurance" className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Why Drycool" subtitle="Industry-leading credentials and capabilities" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.text} delay={i * 0.1}>
              <GlassCard className="text-center py-8 bg-card">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 mx-auto mb-4">
                  <h.icon className="h-7 w-7 text-accent" />
                </div>
                <p className="font-medium text-foreground text-sm">{h.text}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section id="clients" className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Clients" subtitle="Trusted by leading brands across India and globally" />
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <AnimatedSection key={c} delay={i * 0.05}>
              <GlassCard className="text-center py-6 bg-card" hover={false}>
                <span className="font-heading text-lg font-bold text-foreground">{c}</span>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
