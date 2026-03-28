import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Infrastructure = () => (
  <>
    <PageHero title="The Infrastructure of Drycool Systems" subtitle="Learn about our manufacturing capabilities" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="The Infrastructure of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            We have progressed with great success in the competitive market by using our infrastructure which also includes the in-house design and manufacturing of the equipment. We are completely focused on offering high-end products to valuable customers which will give them ultimate satisfaction with our service. There are a few of the best components which are being used by the company for manufacturing cooling products which include double enhanced copper pipes, semi-hermetic screw compressor, microprocessor-based with the advance controlling, etc. Various components are also used by the company to be installed in various machines including building presses, welding machines, fabricating machines, drilling machines, milling machines, etc. We also offer customization on various parameters which include the uses of raw materials, along with the maintenance of proper design, shape, and size.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Manufacturing Facility & Equipment" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Drycool Systems manufacturing facility spans a large industrial complex strategically located in Noida, Uttar Pradesh, providing excellent connectivity to major transportation networks for efficient logistics and delivery across India and international shipping ports. The facility houses dedicated production zones for sheet metal fabrication, copper tube processing, heat exchanger assembly, electrical panel manufacturing, and final chiller integration testing.
            </p>
            <p>
              Our machine shop is equipped with computer numerical control (CNC) lathes, milling machines, and drilling centers that enable precision machining of critical components to exacting tolerances. Automated welding stations including TIG and MIG welding systems ensure consistent joint quality across all structural and pressure-bearing components. Hydraulic bending machines and shearing equipment handle the fabrication of chiller frames, condenser housings, and ducting components with dimensional accuracy.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Quality Testing Laboratories" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our in-house testing laboratory is a cornerstone of the Drycool manufacturing process. Every chiller undergoes comprehensive performance evaluation in our purpose-built testing facility, which simulates real-world operating conditions including variable ambient temperatures, fluctuating cooling loads, and extended continuous operation cycles. Pressure testing rigs verify the structural integrity of all refrigerant circuits and water passages at pressures exceeding design specifications by 50 percent.
            </p>
            <p>
              Advanced leak detection systems using electronic halogen detectors and nitrogen pressure decay methods ensure zero-leak performance across all brazed and mechanical joints. Electrical testing equipment verifies insulation resistance, grounding continuity, and control circuit functionality for every unit before it is cleared for dispatch. Vibration analyzers and noise measurement instruments confirm that each chiller operates within specified levels for smooth, quiet performance in any installation environment.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="R&D and Design Capabilities" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Drycool research and development center drives continuous product improvement and new technology adoption. Our engineering team uses advanced thermal simulation software and computational fluid dynamics tools to optimize heat exchanger designs, airflow patterns, and refrigerant circuit configurations before physical prototyping. This digital-first approach accelerates development cycles and ensures that new products deliver optimal performance from their first production run.
            </p>
            <p>
              Our design capabilities extend to complete customization of chiller systems for specialized applications. Whether a client requires ultra-low temperature operation down to -40 degrees Celsius, explosion-proof construction for hazardous area installations, or compact modular configurations for space-constrained facilities, our engineering team has the expertise and manufacturing infrastructure to deliver purpose-built solutions that precisely match application requirements.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Infrastructure;
