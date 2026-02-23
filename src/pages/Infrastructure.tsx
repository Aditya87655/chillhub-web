import SectionHeading from "@/components/SectionHeading";
import factoryImg from "@/assets/factory-floor.jpg";
import heroImg from "@/assets/hero-chiller.jpg";
import { CheckCircle } from "lucide-react";

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
    <section className="bg-primary py-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Infrastructure</h1>
        <p className="mt-3 text-primary-foreground/70">World-class manufacturing facilities</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Manufacturing Excellence" subtitle="State-of-the-art facilities in Noida, India" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden industrial-shadow-lg">
            <img src={factoryImg} alt="Manufacturing facility" className="w-full h-72 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden industrial-shadow-lg">
            <img src={heroImg} alt="Chiller production" className="w-full h-72 object-cover" />
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div key={c} className="flex items-center gap-3 p-4 rounded-lg bg-card industrial-shadow">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Infrastructure;
