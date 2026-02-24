import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Building2, Factory, Utensils, FlaskConical } from "lucide-react";

const clientsByIndustry = [
  {
    icon: Factory,
    sector: "Manufacturing & Industrial",
    clients: ["Hero MotoCorp", "UltraTech Cement", "JK Cement", "Birla Corp", "ACC Cement", "Dalmia Bharat"],
  },
  {
    icon: Utensils,
    sector: "Food & Beverages",
    clients: ["Mother Dairy", "Amul", "Patanjali", "Dabur", "Parle Agro", "Haldirams"],
  },
  {
    icon: FlaskConical,
    sector: "Pharma & Chemicals",
    clients: ["Hindustan Unilever", "Dr. Reddy's", "Cipla", "Sun Pharma", "Ranbaxy", "Cadila Healthcare"],
  },
  {
    icon: Building2,
    sector: "Infrastructure & HVAC",
    clients: ["Delhi Metro", "DMRC", "Airports Authority", "NBCC", "CPWD", "L&T Construction"],
  },
];

const Clients = () => (
  <>
    <PageHero title="Our Clients" subtitle="Trusted by India's leading brands and global enterprises" />

    <section className="py-20">
      <div className="container">
        {clientsByIndustry.map((group, gi) => (
          <div key={group.sector} className={gi > 0 ? "mt-16" : ""}>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                  <group.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">{group.sector}</h3>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {group.clients.map((c, i) => (
                <AnimatedSection key={c} delay={i * 0.05}>
                  <GlassCard className="text-center py-6 bg-card" hover={false}>
                    <span className="font-heading text-sm font-bold text-foreground">{c}</span>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Clients;
