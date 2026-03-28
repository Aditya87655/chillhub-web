import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const Profile = () => (
  <>
    <PageHero 
      title="Our Profile" 
      subtitle="A Legacy of Excellence in Industrial Cooling Since 1989" 
      backgroundImage="https://drycoolchillers.com/wp-content/uploads/2015/10/Amonia-Based-Milk-Chiller.jpg"
    />

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionHeading title="Our Profile" centered={false} />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems India Pvt. Ltd. having the business objective which is also associated with having higher benefits ensured for the customers. We are having our business Goodwill along with outstanding market credibility which is appreciated by all. Our company was established in the year of 1989, since then our organization is one of the front-line developer, designer, fabricator and also the delivery service of innovative and hybrid Technology designed chiller equipment.
            </p>
            <p>
              We are the experts of chiller plant manufacturer along with the designer of cold rooms to offer customized chillers according to the requirement of the customer in India. We are also involved in various markets including African countries and South East Asia. Drycool Systems is one of the best chiller manufacturers in India along with the exporting and supplying services for FRP Cooling Towers, Scroll Chillers, Screw Chillers, chilling plants, and various other equipment which are being manufactured by using cutting-edge technology.
            </p>
            <p>
              We ensure the complete delivery of the best cooling requirements with the involvement of optimum operation which is including less maintenance cost along with less operative. We’re extremely valuable clients and we ensure the best chillers in India supply to them with highly competitive advantages which will help them increase productivity along with profitability.
            </p>
            <p>
              Over the years we have developed expertise to offer the unquestionable array of industrial refrigeration services. Our experienced management team is completely equipped with proper knowledge and understanding to assist you with various products and services. We ensure the international grade equipment which is appropriate for the productivity increment in various industries. Drycool Systems will install and supply the industrial refrigeration process by manufacturing it completely from the scratch. We will also offer maintenance, consultancy services, and repair to every client.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src="https://drycoolchillers.com/wp-content/uploads/2015/10/Amonia-Based-Milk-Chiller.jpg" 
              alt="Industrial Chiller" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container grid md:grid-cols-2 gap-12">
        <AnimatedSection>
          <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-xl h-full">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">The Vision of Drycool Systems</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are determined to serve as the framework to increase sustainable growth and also it objectively describes the business. Drycool Systems is having the vision of threefold duty for portfolio, people, and productivity which will help us to have the most effective and progressive organization.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-xl h-full">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">The Mission of Drycool Systems</h3>
            <p className="text-muted-foreground leading-relaxed">
              Drycool Systems is having a mission that completely highlights the major reason and the purpose of the company. The mission of the company is inspired by various creative values, movements of optimism, and innovation in the construction of equipment management. We ensure to offer the best possible services and be the best chiller supplier in India.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Turnkey Projects of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            We are having a team of professional experts and our company is completely capable of offering turnkey solutions to every client in the best possible way along with preliminary reports. We will also offer to frame technical specifications, erection and commissioning, preparing for site layout, equipment selection, etc.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Manufacturing Capabilities & Technology" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our manufacturing plant is equipped with advanced CNC machinery, precision fabrication tools, and automated assembly lines that enable production of chiller systems ranging from compact 5 TR units for small-scale applications to high-capacity 1800 TR systems for major industrial installations. The facility includes dedicated areas for copper tube processing, shell-and-tube heat exchanger assembly, electrical control panel fabrication, and comprehensive final testing.
            </p>
            <p>
              Drycool Systems has invested significantly in quality testing infrastructure including performance testing rigs capable of simulating full-load and part-load operating conditions, pressure testing equipment for verifying refrigerant circuit integrity, and advanced vibration and noise measurement instruments. This commitment to thorough verification ensures every chiller delivered to a client site performs reliably from the day of commissioning.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Service Network & Customer Commitment" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Beyond manufacturing excellence, Drycool Systems distinguishes itself through a comprehensive service network spanning all major industrial cities in India. Factory-trained service engineers provide rapid response for preventive maintenance, emergency repair, and performance optimization services. Our annual maintenance contracts are designed to maximize equipment uptime and minimize total cost of ownership for our clients.
            </p>
            <p>
              For international clients across Africa, Southeast Asia, and the Middle East, we provide remote diagnostic support, on-site commissioning supervision, and efficient spare parts logistics. Our global service capabilities have been instrumental in building lasting client relationships across more than 50 countries, establishing Drycool Systems as a trusted partner for critical industrial cooling infrastructure worldwide.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Want to Know More About Us?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Profile;
