import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle, Wrench, Thermometer, Wind } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import factoryImg from "@/assets/factory-floor.jpg";

const services = [
  { icon: Thermometer, title: "HVAC System Design", desc: "Complete load calculation, duct design, piping layout, and equipment selection for commercial & industrial buildings." },
  { icon: Wrench, title: "Installation & Commissioning", desc: "Professional installation of central AC, VRV/VRF, chilled water systems, and AHU/FCU networks." },
  { icon: Wind, title: "Ductwork & Piping", desc: "GI/pre-insulated duct fabrication, chilled water piping, and insulation work with leak-proof execution." },
  { icon: Building2, title: "AMC & Maintenance", desc: "Annual maintenance contracts covering preventive maintenance, breakdown service, and performance audits." },
];

const projectTypes = [
  "Commercial Office Buildings",
  "Shopping Malls & Retail Spaces",
  "Hospitals & Healthcare Facilities",
  "Hotels & Hospitality",
  "Data Centers",
  "Industrial Manufacturing Plants",
  "Pharmaceutical Clean Rooms",
  "Educational Institutions",
];

const HVACContractor = () => (
  <>
    <PageHero
      title="Hvac Contractor"
      subtitle="Leading provider of comprehensive HVAC solutions"
      backgroundImage="https://www.drycoolchillers.com/wp-content/uploads/2015/10/Single-Air-Cooled-Screw-Chiller.jpg"
    />

    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <SectionHeading title="HVAC Contractors" centered={false} />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Drycool is a leading provider of comprehensive HVAC (Heating, Ventilation, and Air Conditioning) solutions, dedicated to delivering exceptional comfort, efficiency, and indoor air quality. With a strong commitment to quality and customer satisfaction, we have become a trusted partner for residential, commercial, and industrial clients.
              </p>
              <p>
                Our team of experienced professionals is equipped with the knowledge and expertise to handle all your HVAC needs. Here's why you should choose us as your HVAC contractors:
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src="https://www.drycoolchillers.com/wp-content/uploads/2023/09/hvac-contractors-in-noida.jpg"
                alt="HVAC Contractors In Noida"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expertise and Experience",
              desc: "Our team consists of highly skilled technicians and engineers with years of experience in the HVAC industry. We stay up-to-date with the latest technologies and industry best practices to provide the best solutions for our clients.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2023/09/hvac-contractor.jpg"
            },
            {
              title: "Comprehensive Services",
              desc: "From system design and installation to routine maintenance and emergency repairs, we offer a full range of HVAC services. Whether you need a new air conditioning system for your home or complex HVAC solutions for a large industrial facility, we have you covered.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2023/09/hvac-contractors.jpg"
            },
            {
              title: "Tailored Solutions",
              desc: "We understand that every client's needs are unique. That's why we take a customized approach to every project. We work closely with you to design and implement HVAC systems that meet your specific requirements and budget.",
              img: "https://www.drycoolchillers.com/wp-content/uploads/2022/11/system-integration-services.jpg"
            }
          ].map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <GlassCard className="h-full overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">HVAC Contractors:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Energy Efficiency</h4>
                  <p className="text-xs text-muted-foreground">We are committed to helping our clients reduce their energy consumption and carbon footprint.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Reliability</h4>
                  <p className="text-xs text-muted-foreground">Prompt and reliable emergency repair services to minimize downtime.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <div className="bg-card/50 border border-border p-8 rounded-3xl backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed italic">
                "Our HVAC systems are designed and installed to maximize energy efficiency, which not only lowers utility bills but also benefits the environment. We offer a wide range of high-efficiency HVAC equipment and solutions. We understand that HVAC emergencies can happen at any time. Our technicians are available for prompt and reliable repairs, ensuring that your comfort is restored quickly."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">Drycool Systems</p>
                  <p className="text-xs text-muted-foreground">Quality HVAC Infrastructure</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Ready to start your HVAC project?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Connect with Experts <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default HVACContractor;
