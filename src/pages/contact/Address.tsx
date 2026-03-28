import { MapPin, Phone, Mail, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const offices = [
  {
    name: "Works 1 (Head Office)",
    address: "C-34, Sector 63, Noida – 201307, Uttar Pradesh, India.",
  },
  {
    name: "Works 2",
    address: "Plot No. B-64, M.G. Road, Phase 1, Dasna, Hapur - 201015, Uttar Pradesh, India.",
  },
];

const Address = () => (
  <>
    <PageHero title="Address" subtitle="Our Manufacturing Facilities and Offices" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Address" subtitle="Head Office & Works" />
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {offices.map((o, i) => (
            <AnimatedSection key={o.name} delay={i * 0.1}>
              <GlassCard className="bg-card h-full">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">{o.name}</h3>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="leading-relaxed">{o.address}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <GlassCard className="max-w-5xl mx-auto bg-card p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" /> Head Office
                  </h4>
                  <p className="text-muted-foreground">Noida</p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-2">Branch Offices</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Jaipur, Pune, Ahmedabad, Kolkatta, Rudrapur, Haridwar, Bangalore, Hyderabad, Chandigarh, Chattisgarh.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <span>Mobile : +91-9811134394</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <span>Email id : enquiry@drycoolchillers.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-medium">
                  <User className="h-5 w-5 text-accent shrink-0" />
                  <span>Key person : Mr. Yash Verma (CEO).</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>

    {/* 📍 Interactive Google Map Section */}
    <section className="py-10 pb-24 bg-transparent">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Find Us on the Map" centered={true} />
          
          <div className="mt-8 w-full h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden border border-border/40 shadow-2xl relative bg-card/50 group">
            <div className="absolute inset-0 bg-accent/5 animate-pulse -z-10" />
            
            <iframe
              src="https://maps.google.com/maps?q=Drycool%20Systems%20India%20Pvt%20Ltd,%20C-34,%20Sector%2063,%20Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Strategic Location & Accessibility" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems' headquarters in Sector 63, Noida, is strategically located in the heart of India's industrial and commercial hub of the National Capital Region. This prime location provides excellent connectivity to major highways, the Delhi Metro network, and Indira Gandhi International Airport, facilitating convenient access for clients, suppliers, and partners from across India and international destinations.
            </p>
            <p>
              Our second manufacturing facility at Plot No. B-64, M.G. Road, Phase 1, Dasna, Hapur, expands our production capacity and provides dedicated space for large-scale chiller assembly and testing operations. This facility is equipped with heavy-duty overhead cranes, expanded fabrication areas, and additional testing bays to handle the growing demand for high-capacity industrial chiller systems.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Nationwide Branch Network" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our pan-India branch office network in Jaipur, Pune, Ahmedabad, Kolkata, Rudrapur, Haridwar, Bangalore, Hyderabad, Chandigarh, and Chhattisgarh ensures that Drycool's sales and service teams are always within reach of our clients. Each branch is staffed with technically qualified professionals who provide pre-sales consultation, installation supervision, and after-sales service support for all chiller types in our product portfolio.
            </p>
            <p>
              For site visits, technical consultations, or factory tours, please contact us by phone at +91-9811134394 or email at enquiry@drycoolchillers.com to schedule an appointment. Our team is available Monday through Saturday from 9:00 AM to 6:00 PM. We welcome visits from facility managers, consulting engineers, procurement teams, and potential dealer partners interested in exploring our product range and manufacturing capabilities firsthand.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Address;