import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const QualityAssurance = () => (
  <>
    <PageHero 
      title="Quality Assurance" 
      subtitle="Uncompromising Commitment to Manufacturing Excellence" 
      backgroundImage="https://drycoolchillers.com/wp-content/uploads/2015/10/quality-m-1.jpg"
    />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Quality Assurance" centered={false} />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-4xl">
            <p>
              We are committed to ensure total quality or our products and services. we ensure total quality by choosing the highest grade and latest technology components and processes, ensuring that the final product is what our customer had desired. to ensure that most efficient after sales-service to our customers we employ technically sound engineers and train them to solve the problems independently, efficiently and timely.
            </p>
            <p>
              For us the quality means convenience and benefit, also. we always ensure that the breakdowns are kept to minimum, the parameters are accurate and the total cost, i.e. capital cost + running cost + maintenance cost, is the least. all the working people of the organisation would be fully comitted for the continual improvement of the effectiveness of the quality management system.
            </p>
            <p>
              The above said quality policy is appropriate to the purpose of the organisation and is communicated and understood within the organisation. the above stated quality policy would be reviewed for continuing suitability to the organisation. in order to implement and maintain an effective and efficient quality management system, the top management has assigned the responsibility and authority to the people to enable them to contribute to the achievement of the quality objectives and to establish their involvement, motivation and commitment.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Quality Assurance by Drycool Systems:" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            Our company is certified under ISO 9001:2000 and we are completely quality conscious and we are determined to provide a high-quality structured control program with the entire production process. You are completely focusing to deliver flawless equipment to the clients with a regular basis up-gradation of the Technologies using the skill of our workforce. We will make sure to confirm all the products have the latest industrial standards which will be maintained by proper quality testing of the equipment. We will offer various range of refrigeration system which is tested on various parameters which we have listed below.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Reliable and smooth operation.",
              "Rapid cooling will offer high efficiency.",
              "Dimensional accuracy.",
              "Resistant to corrosion.",
              "Energy consumption.",
              "Airflow.",
              "Constant cooling temperature maintenance."
            ].map((param, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 h-5 w-5 rounded-full bg-[hsl(var(--industrial-orange))/10] flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--industrial-orange))]" />
                  </div>
                  <span className="text-muted-foreground font-medium">{param}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="End-to-End Quality Control Process" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Quality assurance at Drycool Systems begins at the procurement stage, where incoming raw materials and bought-out components undergo thorough inspection against documented specifications. Compressors from leading manufacturers such as Bitzer and Frascold are verified for performance certificates, while copper tubing, steel sheets, and electrical components are checked for dimensional accuracy, material composition, and surface quality before being released to the production floor.
            </p>
            <p>
              During the manufacturing process, multiple in-process inspection checkpoints ensure that fabrication, welding, brazing, and assembly operations meet our engineering standards. Weld quality is verified through visual inspection and, where required, non-destructive testing methods including dye penetrant testing and radiographic examination. Pressure vessels and heat exchangers are hydrostatically tested at pressures exceeding design specifications to confirm structural integrity before integration into the final chiller assembly.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Performance Verification & Certification" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every completed chiller undergoes a comprehensive final testing sequence that includes continuous performance operation for a minimum of 48 hours under monitored conditions. During this extended run test, parameters including cooling capacity, power consumption, refrigerant pressures, temperatures, oil levels, and vibration levels are continuously recorded and compared against design specifications. Any deviation triggers investigation and corrective action before the unit is approved for dispatch.
            </p>
            <p>
              Our quality management system maintains complete documentation for each chiller manufactured, including material test certificates, welding procedure qualifications, pressure test records, performance test data, and electrical safety test results. This documentation package accompanies every unit, providing our clients with full traceability and confidence in the quality of their investment. Our commitment to continuous improvement drives regular review of quality metrics and implementation of process enhancements that further elevate our manufacturing standards.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Quality You Can Trust</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Every chiller is backed by our zero-defect commitment and international quality standards.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default QualityAssurance;
