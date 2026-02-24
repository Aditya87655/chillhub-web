import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Clock, CheckCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const amcPlans = [
  { title: "Basic AMC", features: ["Quarterly preventive maintenance", "Filter cleaning & replacement", "Performance checks", "Phone support"], highlight: false },
  { title: "Comprehensive AMC", features: ["Monthly preventive maintenance", "All spare parts included", "24/7 breakdown support", "Performance reports", "Priority response"], highlight: true },
  { title: "Premium AMC", features: ["Weekly monitoring", "All parts & labor covered", "Dedicated service engineer", "Energy audit reports", "SLA-backed response time", "Remote monitoring"], highlight: false },
];

const AMC = () => (
  <>
    <PageHero title="Annual Maintenance Contract" subtitle="Keep your chillers running at peak performance year-round" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="AMC Plans" subtitle="Choose the plan that fits your needs" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amcPlans.map((plan, i) => (
            <AnimatedSection key={plan.title} delay={i * 0.1}>
              <GlassCard className={`bg-card ${plan.highlight ? "ring-2 ring-accent" : ""}`}>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">{plan.title}</h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-opacity shadow ${plan.highlight ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
                  Get Quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Protect Your Investment</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Extend equipment life and reduce downtime with our maintenance programs.</p>
          <a href="tel:+919811134394" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            <Phone className="h-4 w-4" /> Call for AMC
          </a>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default AMC;
