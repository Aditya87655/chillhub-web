import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Users, Wrench, Cpu, HeadphonesIcon } from "lucide-react";

const departments = [
  { icon: Cpu, title: "R&D & Engineering", count: "50+", desc: "Design engineers, thermal engineers, and R&D specialists driving innovation." },
  { icon: Wrench, title: "Manufacturing", count: "80+", desc: "Skilled technicians and assembly experts ensuring precision in every chiller." },
  { icon: HeadphonesIcon, title: "Service & Support", count: "60+", desc: "Field engineers providing commissioning, maintenance, and 24/7 support." },
  { icon: Users, title: "Sales & Management", count: "30+", desc: "Regional managers and sales professionals serving clients pan-India and globally." },
];

const OurTeam = () => (
  <>
    <PageHero title="Our Team" subtitle="200+ skilled professionals driving excellence in cooling technology" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Departments" subtitle="A multidisciplinary team committed to delivering world-class chillers" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {departments.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.1}>
              <GlassCard className="bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10">
                    <d.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{d.title}</h3>
                    <span className="font-heading text-2xl font-bold text-accent">{d.count}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default OurTeam;
