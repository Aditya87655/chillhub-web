import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const offices = [
  {
    name: "Head Office & Factory",
    address: "B-56, Sector-64, Noida, Uttar Pradesh 201301, India",
    phone: "+91-9811134394",
    email: "info@drycoolchillers.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    name: "Regional Office - Mumbai",
    address: "Mumbai, Maharashtra, India",
    phone: "+91-9811134394",
    email: "mumbai@drycoolchillers.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const Address = () => (
  <>
    <PageHero title="Our Locations" subtitle="Find us at our offices across India" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Office Addresses" subtitle="Visit us or get in touch" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {offices.map((o, i) => (
            <AnimatedSection key={o.name} delay={i * 0.1}>
              <GlassCard className="bg-card">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">{o.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {o.address}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    {o.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    {o.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent shrink-0" />
                    {o.hours}
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Address;
