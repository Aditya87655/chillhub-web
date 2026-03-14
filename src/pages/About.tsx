import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

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
          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
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
      </div>
    </section>
  </>
);

export default About;
