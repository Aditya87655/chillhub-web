import { MapPin, Phone, Mail, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const offices = [
  {
    name: "Works 1",
    address: "C-34, Sector 63, Noida – 201307, Uttar Pradesh, India.",
  },
  {
    name: "Works 2",
    address: "Plot No. B-64, M.G. Road, Phase 1, Dasna, Hapur -201015, Uttar Pradesh, India.",
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
  </>
);

export default Address;
