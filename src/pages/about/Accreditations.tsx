import { ShieldCheck, Award, Globe, FileCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const accreditations = [
  { icon: ShieldCheck, title: "ISO 9001:2008", desc: "Quality Management System certification ensuring consistent product quality, continuous improvement, and customer satisfaction across all operations." },
  { icon: Award, title: "CE Marking", desc: "European conformity marking indicating compliance with health, safety, and environmental protection standards for products sold within the European Economic Area." },
  { icon: Globe, title: "BIS Certification", desc: "Bureau of Indian Standards certification confirming products meet national quality benchmarks and safety requirements for the Indian market." },
  { icon: FileCheck, title: "AHRI Certified", desc: "Air-Conditioning, Heating, and Refrigeration Institute performance certification validating chiller capacity and efficiency ratings." },
];

const Accreditations = () => (
  <>
    <PageHero title="Accreditations" subtitle="Recognized by international and national standards bodies" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Certifications" subtitle="Meeting the highest global standards in chiller manufacturing" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {accreditations.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <GlassCard className="text-center py-10 bg-card">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto mb-4">
                  <a.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{a.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Accreditations;
