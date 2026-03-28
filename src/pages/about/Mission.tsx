import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Mission = () => (
  <>
    <PageHero title="The Mission of Drycool Systems" subtitle="Our purpose and core mission" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="The Mission of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            Drycool Systems is having a mission that completely highlights the major reason and the purpose of the company. The mission of the company is inspired by various creative values, movements of optimism, and innovation in the construction of equipment management. We ensure to offer the best possible services and be the best chiller supplier in India. We are completely determined to offer industrial chillers with high-end quality to increase the productivity of every industry and serve every organization.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Delivering Excellence Through Purpose-Driven Engineering" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our mission at Drycool Systems is anchored in the belief that every industrial facility deserves access to reliable, energy-efficient, and precisely engineered cooling solutions. This conviction drives our engineering team to push the boundaries of refrigeration technology, developing chiller systems that not only meet but exceed the demanding performance requirements of modern industrial processes across sectors including manufacturing, pharmaceuticals, food processing, and construction.
            </p>
            <p>
              Central to our mission is the commitment to total customer satisfaction. We achieve this through a comprehensive approach that begins with detailed consultation to understand each client's unique cooling requirements, extends through custom engineering design and manufacturing, and continues with lifetime technical support and maintenance services. This end-to-end ownership of the customer experience has earned us lasting relationships with industry leaders across India and international markets.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Innovation as a Core Mission Pillar" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Innovation is not merely an aspiration at Drycool Systems — it is a fundamental component of our operational mission. Our R&D division continuously evaluates emerging technologies in compressor design, heat exchanger optimization, intelligent control systems, and environmentally friendly refrigerants to ensure our products remain at the technological forefront of the global chiller industry.
            </p>
            <p>
              By integrating variable frequency drive technology, microprocessor-based controllers, and IoT-enabled monitoring capabilities into our chiller platforms, we deliver systems that provide real-time performance visibility and remote diagnostic capabilities. These smart features empower facility managers to optimize their cooling operations for maximum energy efficiency and minimum downtime, directly supporting their operational and sustainability objectives.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Quality, Sustainability & Global Reach" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Quality assurance is integral to fulfilling our mission. Every chiller system manufactured at our ISO 9001:2008 certified facility undergoes rigorous multi-stage quality checks, from incoming raw material inspection through final performance testing. Our testing protocols include extended run trials exceeding 48 hours, pressure integrity verification, electrical safety compliance, and comprehensive vibration analysis to ensure trouble-free field performance.
            </p>
            <p>
              Our mission extends to environmental stewardship through the development of chillers that minimize energy consumption and utilize eco-friendly refrigerants with reduced global warming potential. With exports to over 50 countries and a pan-India service network, our mission is to be the most reliable and responsive chiller manufacturer, delivering consistent quality and innovation to every customer regardless of project scale or geographic location.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Mission;
