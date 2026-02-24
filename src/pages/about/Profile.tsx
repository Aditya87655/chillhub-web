import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Globe, Users, Factory, Calendar, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import factoryImg from "@/assets/factory-floor.jpg";

const milestones = [
  { year: "1992", title: "Founded", desc: "Drycool Systems India Pvt. Ltd. established in Noida, UP" },
  { year: "2002", title: "ISO Certified", desc: "Achieved ISO 9001:2008 quality management certification" },
  { year: "2010", title: "Global Expansion", desc: "Started exporting to UAE, Africa, and SE Asia" },
  { year: "2020", title: "5000+ Installations", desc: "Crossed 5,000 chiller installations worldwide" },
];

const coreValues = [
  { icon: Target, title: "Innovation", desc: "Continuous R&D in energy-efficient cooling technology" },
  { icon: Award, title: "Quality", desc: "ISO 9001 certified manufacturing with zero-defect philosophy" },
  { icon: Globe, title: "Global Reach", desc: "Serving 50+ countries across all continents" },
  { icon: Users, title: "Customer First", desc: "Dedicated after-sales support and engineering consultation" },
];

const strengths = [
  "30+ years of chiller manufacturing expertise",
  "CFC-free, environment-friendly refrigerants",
  "European-origin compressors (Bitzer, Frascold)",
  "In-house R&D and quality testing lab",
  "Pan-India service network with 200+ engineers",
  "Custom chiller design for any industry requirement",
];

const Profile = () => (
  <>
    <PageHero title="Company Profile" subtitle="Three decades of pioneering industrial cooling solutions" />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionHeading title="Who We Are" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Drycool Systems India Private Limited is one of the oldest and leading chiller manufacturers in India as well as other parts of the world. We are pioneers in manufacturing industrial chillers including screw chillers, scroll chillers, water cooled screw chillers, air cooled screw chillers, ammonia chillers, brine chillers, batching plant chillers, inverter chillers, oil chillers, water chillers, and air chillers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our chillers are CFC-free and contain energy-saving components integral for the conservation of the environment. The engineering and design simplicity utilized by Drycool provides an added advantage to customers.
          </p>
          <ul className="space-y-3">
            {strengths.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={factoryImg} alt="Drycool manufacturing facility in Noida" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    {/* Core Values */}
    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Core Values" subtitle="The pillars that drive our excellence" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <GlassCard className="text-center py-8 bg-card">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Journey" subtitle="Key milestones in our growth story" />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 0.1}>
              <GlassCard className="flex gap-6 items-start bg-card">
                <div className="shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-accent/10">
                  <span className="font-heading text-xl font-bold text-accent">{m.year}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Want to Know More About Us?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Profile;
