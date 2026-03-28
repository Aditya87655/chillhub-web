import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const WhyChooseUs = () => (
  <>
    <PageHero title="Reason to Choose Drycool Systems" subtitle="Why we are the leading choice" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Reason to Choose Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are always having the age of our competitors in the market as we are offering various attributes which we have mentioned below.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Prompt delivery</li>
            <li>Reliability</li>
            <li>Ethical business policies</li>
            <li>Unmatched quality equipment</li>
            <li>Complete customer satisfaction</li>
            <li>High Team spirit.</li>
          </ul>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Proven Manufacturing Excellence" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems has built its market leadership through over three decades of consistent performance in industrial chiller manufacturing. Our production facility is equipped with advanced CNC machining centers, precision welding stations, and automated assembly lines that ensure every component meets exact engineering specifications. This manufacturing infrastructure allows us to deliver custom-engineered chiller solutions with shorter lead times and higher quality consistency than competitors.
            </p>
            <p>
              Our commitment to prompt delivery is backed by a well-organized supply chain management system that maintains strategic inventory of critical components including compressors, heat exchangers, and control panels. This proactive approach to procurement ensures that even large-capacity custom chillers are manufactured and dispatched within the committed timeframe, minimizing project delays for our clients.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Reliability Backed by Rigorous Testing" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every chiller system produced by Drycool undergoes extensive quality verification including continuous performance trials exceeding 48 hours, pressure integrity testing at 1.5 times the design working pressure, electrical insulation resistance checks, and comprehensive vibration analysis. These testing protocols ensure that each unit delivered to the field is capable of performing reliably under the most demanding industrial conditions.
            </p>
            <p>
              Our ISO 9001:2008 certified quality management system provides a structured framework for continuous improvement across all manufacturing and service operations. Regular internal audits, vendor quality assessments, and customer feedback analysis drive ongoing enhancements to our products and processes, maintaining the high reliability standards that our clients depend upon.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Customer-Centric Support & Service" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Complete customer satisfaction at Drycool extends well beyond the point of sale. Our after-sales support network includes factory-trained service engineers stationed across major Indian cities, providing rapid response for preventive maintenance, breakdown repair, and performance optimization services. Annual maintenance contracts are tailored to each facility's operational schedule and criticality requirements, ensuring maximum equipment uptime.
            </p>
            <p>
              Our ethical business practices are reflected in transparent pricing, honest technical consultations, and genuine commitment to recommending solutions that truly serve the client's best interests. This integrity-first approach has earned us the trust of leading corporations across industries including Reliance, Tata, Adani, Apollo Hospitals, and numerous multinational enterprises operating in India and abroad. When you choose Drycool Systems, you partner with a company that values long-term relationships built on mutual respect and shared success.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default WhyChooseUs;
