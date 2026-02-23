import SectionHeading from "@/components/SectionHeading";
import factoryImg from "@/assets/factory-floor.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "ISO 9001:2008 Certified Manufacturing",
  "CFC-Free & Energy Efficient Systems",
  "European Origin Compressors (Bitzer, Frascold)",
  "30+ Years of Industry Experience",
  "Pan-India & Global Export Network",
  "Dedicated Engineering & After-Sales Support",
];

const About = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        <p className="mt-3 text-primary-foreground/70">Learn about our legacy in industrial cooling</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Our Story" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Drycool Systems India Private Limited is one of the oldest and leading chiller manufacturers in India. We are pioneers in manufacturing industrial chillers including screw, scroll, ammonia, inverter, oil, water, and air chillers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our chillers are CFC-free with integrated energy-saving components, ensuring environmental conservation alongside superior performance. We serve industries across India and export globally to the UAE, Saudi Arabia, Qatar, and African nations.
          </p>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden industrial-shadow-lg">
          <img src={factoryImg} alt="Drycool manufacturing facility" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  </>
);

export default About;
