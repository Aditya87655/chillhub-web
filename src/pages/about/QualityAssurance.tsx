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

    <section className="py-16 bg-hero-gradient">
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
