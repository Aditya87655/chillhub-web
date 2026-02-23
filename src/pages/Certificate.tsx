import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck } from "lucide-react";

const certifications = [
  { title: "ISO 9001:2008", desc: "Quality Management System certification ensuring consistent product quality and customer satisfaction." },
  { title: "CE Marking", desc: "European conformity marking indicating compliance with health, safety, and environmental protection standards." },
  { title: "BIS Certification", desc: "Bureau of Indian Standards certification for products meeting national quality benchmarks." },
  { title: "AHRI Certified", desc: "Air-Conditioning, Heating, and Refrigeration Institute performance certification." },
];

const Certificate = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Certifications</h1>
        <p className="mt-3 text-primary-foreground/70">Quality assurance & compliance</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Our Certifications" subtitle="Committed to international quality standards" />
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="p-8 rounded-lg bg-card industrial-shadow text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Certificate;
