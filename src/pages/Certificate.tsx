import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { ShieldCheck, Download, FileText } from "lucide-react";

const certifications = [
  { title: "ISO 9001:2008", desc: "Quality Management System certification ensuring consistent product quality and customer satisfaction." },
  { title: "CE Marking", desc: "European conformity marking indicating compliance with health, safety, and environmental protection standards." },
  { title: "BIS Certification", desc: "Bureau of Indian Standards certification for products meeting national quality benchmarks." },
  { title: "AHRI Certified", desc: "Air-Conditioning, Heating, and Refrigeration Institute performance certification." },
];

const downloads = [
  { name: "Company Profile", hash: "company-profile" },
  { name: "Company Flyer", hash: "company-flyer" },
  { name: "Cooling Towers", hash: "cooling-towers" },
  { name: "Energy Saving Process Chiller", hash: "energy-saving" },
  { name: "MEP Design", hash: "mep-design" },
  { name: "Chiller For Plastic Industry", hash: "plastic-chiller" },
  { name: "Hydrogen Chillers", hash: "hydrogen-chillers" },
];

const Certificate = () => (
  <>
    <PageHero title="Certifications & Downloads" subtitle="Quality assurance, compliance, and downloadable resources" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Certifications" subtitle="Committed to international quality standards" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <GlassCard className="text-center py-8 bg-card">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{cert.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Section Divider */}
    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Downloads" subtitle="Access our brochures, catalogs, and technical documents" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {downloads.map((d, i) => (
            <AnimatedSection key={d.hash} delay={i * 0.06}>
              <GlassCard className="flex items-center gap-4 py-4 bg-card cursor-pointer group" id={d.hash}>
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground flex-1">{d.name}</span>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Certificate;
