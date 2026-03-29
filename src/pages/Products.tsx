import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import screwImg from "@/assets/product-screw-chiller.jpg";
import scrollImg from "@/assets/product-scroll-chiller.jpg";
import ammoniaImg from "@/assets/product-ammonia-chiller.jpg";
import oilImg from "@/assets/product-oil-chiller.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const allProducts = [
  { title: "Air Cooled Screw Chiller", slug: "air-cooled-screw-chiller", description: "Efficient air cooled screw chillers for industrial cooling, with capacities ranging from 30 Ton up to 1800 Ton.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/11/Slide011.jpg" },
  { title: "Water Cooled Screw Chiller", slug: "water-cooled-screw-chiller", description: "Specifically designed for extreme tropical weather, using high-quality Bitzer and Frascold compressors.", image: "https://drycoolchillers.com/wp-content/uploads/2015/10/Single-Water-Cooled-Screw-Chiller.jpg" },
  { title: "Air Cooled Scroll Chillers", slug: "air-cooled-scroll-chiller", description: "Highly energy-efficient, separate refrigeration circuits designed for maximum flexibility and performance.", image: "https://drycoolchillers.com/wp-content/uploads/2015/09/Multiple-Air-Cooled-Scroll-Chiller.jpg" },
  { title: "Water Cooled Scroll Chillers", slug: "water-cooled-scroll-chiller", description: "Compact and factory-assembled liquid scroll chillers for comfort and process-cooling applications.", image: "https://drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Scroll-Chiller-3-1.jpg" },
  { title: "Inverter Scroll Chiller", slug: "inverter-scroll-chiller", description: "Integrated inverter technology for precise temperature control and maximum energy savings.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Scroll-Chiller-3-1.jpg" },
  { title: "Air Chiller", slug: "air-chiller", description: "Reliable industrial air chillers with precise temperature control and improved internal air quality.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/Air-cooled-Air-chiller.jpg" },
  { title: "Inverter Screw Chiller", slug: "inverter-screw-chiller", description: "Advanced permanent magnet motor and variable frequency drive for up to 50% energy savings.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-1-2.jpg" },
  { title: "Buy VFD Chiller", slug: "air-cooled-vfd-screw-chiller", description: "Variable frequency drive chillers for optimal pressure control and significant power reduction.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-2-1.jpg" },
  { title: "Water-cooled Reciprocating Chillers", slug: "water-cooled-reciprocating-chillers", description: "We Design and Manufacture Reciprocating chillers nipping shops up to(-) 40 Deg C with Water Cooled Type condensers.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/water-cooled-reciprocating-chillers.jpg" },
  { title: "Air-cooled Reciprocating Chillers", slug: "air-cooled-reciprocating-chillers", description: "We offer a range of Packaged Reciprocating Bite/ nipping Factories with Air cooled Type condensers.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/air-cooled-reciprocating-chillers.jpg" },
  { title: "Industrial Reciprocating Chillers", slug: "industrial-reciprocating-chillers", description: "Reciprocating chillers complete with Control Panel, Expansion Valves, and Interlocking Systems.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/industrial-reciprocating-chillers.jpg" },
];

const Products = () => (
  <>
    <PageHero title="Products & Solutions" subtitle="Complete range of industrial cooling systems engineered for performance" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Product Range" subtitle="Engineered for performance, built for reliability" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <ProductCard {...p} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Enrichment: Product Depth */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Why Choose Drycool Chillers?" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems manufactures a comprehensive range of industrial chillers engineered for diverse applications across multiple sectors. Each chiller system is designed from the ground up using advanced thermal engineering principles, incorporating high-efficiency compressors from globally recognized brands such as Bitzer, Frascold, and Copeland. Our in-house R&D team continuously evaluates new refrigerant technologies, heat exchanger configurations, and control strategies to deliver products that set industry benchmarks for performance and reliability.
            </p>
            <p>
              Our air-cooled chillers are engineered for installations where water availability is limited or where simplified maintenance is preferred. These systems feature large-surface-area condenser coils with optimized fin spacing for maximum heat rejection even in high ambient temperature conditions common across the Indian subcontinent, Middle East, and tropical regions. Water-cooled variants deliver superior energy efficiency for facilities with access to cooling tower infrastructure, achieving coefficient of performance values that significantly reduce operating costs over the equipment lifecycle.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Advanced Technology & Energy Savings" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our inverter and VFD chiller range represents the cutting edge of energy-efficient cooling technology. By modulating compressor speed to precisely match the instantaneous cooling load, these systems eliminate the energy waste associated with traditional on-off cycling. Facilities installing Drycool VFD chillers routinely report energy savings of 30 to 50 percent compared to their previous fixed-speed equipment, with payback periods typically under three years.
            </p>
            <p>
              Every chiller leaving our factory undergoes rigorous quality testing including continuous performance evaluation for more than 48 hours, pressure integrity testing, electrical safety verification, and vibration analysis. Our ISO 9001:2008 certified manufacturing processes ensure consistent quality across every unit, whether it is a compact 5 TR scroll chiller for a laboratory or a 1800 TR screw chiller system for a major industrial complex.
            </p>
            <p>
              With comprehensive after-sales support including preventive maintenance contracts, emergency breakdown assistance, and spare parts availability, Drycool Systems ensures that your cooling investment delivers reliable performance throughout its operational life. Our service network spans across India with branch offices in major industrial cities, supported by factory-trained engineers ready to respond to your maintenance needs.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Comprehensive Industrial Cooling Solutions" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems has established itself as one of India's premier industrial chiller manufacturers, delivering engineered cooling solutions across a product portfolio that spans screw chillers, scroll chillers, reciprocating chillers, and highly specialized custom-built systems. Each product category is designed to address specific cooling challenges, from high-capacity HVAC comfort cooling in commercial buildings to ultra-low-temperature process cooling in pharmaceutical and chemical manufacturing environments. Our screw chillers, available in air cooled and water cooled configurations from 30 TR to 1800 TR, utilize twin-screw compressor technology from leading European manufacturers including Bitzer and Frascold, delivering exceptional energy efficiency with integrated microprocessor controls for precise temperature regulation.
            </p>
            <p>
              The scroll chiller range offers compact, quiet, and vibration-free cooling for applications where space constraints and noise sensitivity are critical considerations. Featuring hermetic scroll compressors with fewer moving parts than reciprocating alternatives, these units deliver superior reliability with minimal maintenance requirements. Our inverter-driven variants incorporate variable frequency drive technology that modulates compressor speed to match real-time cooling demand, achieving energy savings of 30 to 50 percent compared to fixed-speed alternatives. For deep-chilling applications reaching temperatures as low as minus 40 degrees Celsius, our reciprocating chiller range provides robust, field-serviceable performance with stepped capacity control and multi-refrigerant compatibility.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Global Reach & Application Engineering" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Beyond standard product offerings, Drycool Systems excels in application-specific chiller engineering for industries including plastics processing, food and beverage manufacturing, concrete batching, brewery and fermentation, hydrogen refueling infrastructure, and medical device cooling. Our engineering team conducts thorough heat load analysis and process evaluation before recommending solutions, ensuring that every chiller system is optimally sized and configured for maximum efficiency and reliability. Custom configurations include hazardous area chillers with ATEX-certified components, ammonia-based systems for large industrial facilities, and specialized glycol, brine, and methanol chillers for applications requiring secondary coolant circuits.
            </p>
            <p>
              Our manufacturing capabilities are complemented by a global service network spanning across India, the UAE, Africa, Indonesia, Nepal, and Bangladesh, ensuring that customers worldwide receive the same quality of technical support and after-sales service that has defined the Drycool brand for over three decades. Every chiller undergoes rigorous factory testing exceeding 48 hours of continuous operation before dispatch, backed by comprehensive documentation, performance certification, and warranty coverage. With ISO 9001:2008 certified processes, CE marking compliance, and adherence to ASHRAE standards, Drycool Systems delivers cooling solutions that meet the most demanding international quality benchmarks while offering competitive pricing and flexible delivery schedules.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Need a Custom Chiller Solution?
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
            Our engineering team can design a cooling system tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Products;
