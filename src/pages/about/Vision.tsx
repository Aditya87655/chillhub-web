import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Vision = () => (
  <>
    <PageHero title="The Vision of Drycool Systems" subtitle="Our vision for sustainable growth" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="The Vision of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            We are determined to serve as the framework to increase sustainable growth and also it objectively describes the business. Drycool Systems is having the vision of threefold duty for portfolio, people, and productivity which will help us to have the most effective and progressive organization.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Strategic Vision for Industrial Cooling Leadership" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The vision of Drycool Systems extends beyond manufacturing excellence to encompass a holistic approach to industrial cooling that balances technological innovation with environmental responsibility. As global industries face increasing pressure to reduce energy consumption and carbon emissions, our vision positions Drycool as a driving force behind the adoption of energy-efficient cooling technologies across diverse industrial sectors.
            </p>
            <p>
              Our threefold commitment to portfolio expansion, workforce development, and productivity enhancement forms the strategic foundation upon which we build lasting partnerships with clients worldwide. By investing in research and development of next-generation refrigeration technologies, we aim to continuously improve the energy performance of our chiller systems while reducing their environmental impact through the adoption of low-GWP refrigerants and innovative heat recovery solutions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="People-Centered Growth Philosophy" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At the heart of our vision lies a deep commitment to our people — the engineers, technicians, and support staff who bring our products to life. We invest continuously in training and professional development to ensure our team stays at the forefront of HVAC technology, control system integration, and sustainable engineering practices. This investment in human capital directly translates into superior product quality and customer service.
            </p>
            <p>
              Our productivity vision focuses on leveraging advanced manufacturing technologies including CNC machining, automated welding systems, and computer-aided quality inspection to increase production efficiency while maintaining the highest standards of craftsmanship. By streamlining our manufacturing processes, we are able to deliver custom-engineered chiller solutions with shorter lead times and competitive pricing, making world-class cooling technology accessible to businesses of all sizes across India and international markets.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Sustainable Future Through Innovation" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Looking ahead, Drycool Systems envisions a future where intelligent cooling systems powered by IoT sensors, predictive analytics, and machine learning algorithms deliver unprecedented levels of energy efficiency and operational reliability. Our roadmap includes the development of smart chiller platforms that can autonomously optimize their performance based on real-time load conditions, ambient weather data, and utility tariff structures, delivering maximum cooling output with minimum energy input.
            </p>
            <p>
              We are committed to establishing Drycool as a global benchmark for sustainable industrial refrigeration, contributing to a cleaner environment while enabling our clients to achieve their production goals with confidence. Through strategic partnerships, continuous innovation, and unwavering quality standards, our vision is to be the most trusted name in industrial cooling solutions worldwide.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Vision;
