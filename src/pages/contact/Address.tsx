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
            {/* Loading glow behind the map */}
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
  </>
);

export default Address;