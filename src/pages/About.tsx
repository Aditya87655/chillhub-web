import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const About = () => (
  <>
    <PageHero 
      title="About Our Industrial Chillers" 
      subtitle="Excellence in Industrial Cooling Solutions Since 1989" 
      backgroundImage="https://drycoolchillers.com/wp-content/uploads/2013/08/about2.jpg"
    />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionHeading title="About Us" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Drycool Systems is one of the best chiller suppliers in India for commercial refrigeration and air conditioning companies. We are equipped with proper HVAC system integration, investment management, core integration air conditioning production, and contract energy Management. We are completely dedicated to properly using geothermal, thermal power generation, industrial waste heat recovery, and various other new energy fields. We will be completely dedicated to the production and system development of the central air conditioning systems, solutions, and services.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src="https://drycoolchillers.com/wp-content/uploads/2013/08/about2.jpg"
              alt="About Our Industrial Chillers" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container space-y-16">
        <AnimatedSection>
          <SectionHeading title="Our Approach" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems will not only follow the industry standards but we will define them for others.
            </p>
            <p>
              Drycool Systems will improve the life of industry and building by collaborating with industry and building owners with the best industrial chillers. We will also contribute with the operators to the high-performance industry and building by contributing measurable conditions. We will offer over the year benefits along with proper support to the critical objective to fulfill the mission. We are determined to explore all the missions of the organization which includes industry and building itself by using financial and strategic objectives.
            </p>
            <p>
              We will take various steps and take the challenges to improve the industry and building performance. We will ensure to determine the better ways to the industry and building environment which could impact the organization for a better cause. Drycool Systems is completely committed to delivering the best sustainable performance along with knowledge and innovation for increasing life and high performance in the industry and building the organization with chillers in India.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Our Innovation" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Innovation is our objective and it is also our identity.
            </p>
            <p>
              Drycool Systems completely believe in the beginning of innovation is with the customer’s requirement. Complete usage of cutting-edge concepts and aggressive designs completely innovates from the challenges which are existing in the marketplace. It will completely use the infrastructure and all the changing regulations to fuel the fluctuating cost along with innovation. Our location will help various organizations to achieve their objectives and machines by receiving unique environmental needs. Customized Chillers technology is completely improved and changed over the years and Drycool Systems is proud to be a part of it. The majority of the consumers trust Drycool Systems’ innovation and expertise solutions to achieve the organizational mission.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <SectionHeading title="Our Sustainability" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We are completely committed to sustainability. Drycool Systems being the best chiller manufacturers in India completely understand the requirement for sustainable business practices due to the changes in the environment that has grown rapidly. Every customer is expecting the company’s home they are engaging with the business is aggressively committed towards sustainability. This is not only a gesture towards being a responsible environment concerned company but it is one of the future concern approaches towards various businesses. Drycool Systems will not only help the organization to achieve the industry and building mission but it is also having the goal of having energy efficiency solutions for the generations to come.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <SectionHeading title="Our Diversity" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Drycool Systems are completely operational in various divisions which will ensure a better impact on the environmental and industrial aspects.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground mb-16">
            {[
              "Manufacturing, planning, procurement, and R & D.",
              "Administration and finance.",
              "Sales and marketing strategy.",
              "Parts and supplies.",
              "HVAC maintenance along with rental chiller services."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-[hsl(var(--industrial-orange))]" />
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <SectionHeading title="Why Us" centered={false} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Quality Assurance", desc: "Rigorous testing and international standards for every chiller." },
              { title: "Industry Experience", desc: "Over 35 years of excellence in industrial cooling solutions." },
              { title: "Customer Satisfaction", desc: "Dedicated support and tailored solutions for global clients." },
              { title: "Advanced Technology", desc: "Energy-efficient and innovative refrigeration systems." },
              { title: "Reliable Support", desc: "After-sales services and technical assistance around the clock." }
            ].map((item, i) => (
              <GlassCard key={i} className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment: Technical Depth */}
    <section className="py-20">
      <div className="container space-y-16">
        <AnimatedSection>
          <SectionHeading title="Comprehensive Industrial Cooling Expertise" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With over three decades of operational excellence, Drycool Systems has established itself as a cornerstone of the Indian industrial cooling landscape. Our manufacturing facility, located in the industrial hub of Noida, Uttar Pradesh, is equipped with state-of-the-art CNC machining centers, automated assembly lines, and precision testing laboratories that ensure every chiller meets stringent international quality benchmarks before leaving our production floor.
            </p>
            <p>
              Our engineering team brings together mechanical, electrical, and refrigeration specialists who collaborate on each project from initial concept through final commissioning. This integrated approach allows us to deliver turnkey cooling solutions that address the specific thermal management challenges faced by industries ranging from pharmaceutical manufacturing and food processing to petrochemical refining and data center operations.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Technology & Performance Standards" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every Drycool chiller incorporates advanced refrigeration technologies including variable frequency drives for energy optimization, microprocessor-based control systems for precise temperature regulation, and shell-and-tube heat exchangers designed for maximum thermal transfer efficiency. Our systems utilize environmentally responsible refrigerants and are designed to comply with the latest international environmental regulations.
            </p>
            <p>
              Our testing protocols exceed industry standards, with each unit undergoing more than 48 hours of continuous performance testing under simulated load conditions. Pressure testing, leak detection, electrical safety verification, and vibration analysis are performed systematically to guarantee reliable operation across demanding industrial environments. This rigorous quality control process has earned us the trust of major corporations across more than 50 countries worldwide.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Global Service Network & Support" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems maintains a comprehensive after-sales support network with branch offices across major Indian cities including Jaipur, Pune, Ahmedabad, Kolkata, Bangalore, and Hyderabad. Our service engineers are factory-trained and equipped to handle preventive maintenance, emergency breakdown support, and performance optimization for all chiller types in our product portfolio.
            </p>
            <p>
              For our international clients, we provide remote diagnostic support, spare parts logistics management, and on-site commissioning assistance. Our annual maintenance contracts are designed to maximize equipment uptime and extend the operational lifespan of cooling systems, delivering measurable return on investment for facility owners and operators across diverse industrial sectors.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default About;
