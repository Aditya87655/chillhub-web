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

const extractedPdfs = [
  { name: "Company Profile", url: "https://www.drycoolchillers.com/profile.pdf", hash: "company-profile" },
  { name: "Drycool Chiller Flyer", url: "https://www.drycoolchillers.com/Drycool-chiller-flyer.pdf", hash: "drycool-chiller-flyer" },
  { name: "Cooling Tower Flyer", url: "https://www.drycoolchillers.com/Cooling-Tower-Flyer.pdf", hash: "cooling-tower-flyer" },
  { name: "Energy Saving Process Chiller", url: "https://www.drycoolchillers.com/Energy-Saving-Process-Chiller.pdf", hash: "energy-saving" },
  { name: "Chiller For Plastic Industry", url: "https://www.drycoolchillers.com/chiller-for-plastic-industry.pdf", hash: "plastic-chiller" },
  { name: "Hydrogen Chillers", url: "https://www.drycoolchillers.com/hydrogen-chiller.pdf", hash: "hydrogen-chillers" },
  { name: "Batching Plant Chiller", url: "https://www.drycoolchillers.com/batching-plant-chiller.pdf", hash: "batching-plant-chiller" },
  { name: "Food & Beverages Chiller", url: "https://www.drycoolchillers.com/food-and-beverages-chiller.pdf", hash: "food-and-beverages-chiller" },
  { name: "Chiller For Printing & Packaging", url: "https://www.drycoolchillers.com/Chiller-For-Printing-and-Packaging.pdf", hash: "printing-packaging" },
  { name: "Chemical & Pharmaceutical Chiller", url: "https://www.drycoolchillers.com/Chemical-and-Pharmaceutical-Chiller.pdf", hash: "chemical-pharmaceutical" },
  { name: "R410a Air Cooled Chiller Series", url: "https://www.drycoolchillers.com/R410a-air-cooled-chiller-series.pdf", hash: "r410a-air-cooled" },
  { name: "Building Management System", url: "https://drycoolchillers.com/building-management-system.pdf", hash: "bms" },
  { name: "Chiller For MRI Machine", url: "https://www.drycoolchillers.com/chiller-for-mri-machine.pdf", hash: "mri-machine" },
  { name: "Air Chiller", url: "https://www.drycoolchillers.com/Air-chiller.pdf", hash: "air-chiller" },
  { name: "Dehumidifier", url: "https://www.drycoolchillers.com/dehumidifier.pdf", hash: "dehumidifier" },
];

const DocumentItem = ({ name, url, hash }: { name: string, url: string, hash: string }) => {
  return (
    <GlassCard className="flex flex-col gap-4 p-5 bg-card group" id={hash}>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
          <FileText className="h-6 w-6 text-accent" />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-bold text-foreground line-clamp-1">{name}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">PDF • Drycool Systems</p>
        </div>
      </div>
      <div className="flex justify-end mt-2 pt-4 border-t border-border">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
        >
          View PDF
        </a>
      </div>
    </GlassCard>
  );
};

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
              <GlassCard className="text-center py-8 bg-card h-full flex flex-col items-center justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto mb-4 shrink-0">
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
          <SectionHeading title="Downloads" subtitle="Access our complete catalog of brochures and PDFs directly from drycoolchillers.com" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {extractedPdfs.map((d, i) => (
            <AnimatedSection key={d.hash} delay={i * 0.05}>
              <DocumentItem name={d.name} url={d.url} hash={d.hash} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Certificate;
