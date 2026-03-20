import { Download, FileText, Building2, CheckCircle, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import DownloadModal from "@/components/DownloadModal";
import { useState } from "react";

const highlights = [
  "30+ years of chiller manufacturing excellence",
  "ISO 9001:2008 certified operations",
  "Pan-India & global export network",
  "Complete product range overview",
  "Manufacturing infrastructure details",
  "Key client references and case studies",
];

const pdfUrl = "https://www.drycoolchillers.com/profile.pdf";

const CompanyProfileDownload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <PageHero title="Company Profile" subtitle="Download our comprehensive company profile document" />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
            <AnimatedSection>
              <SectionHeading title="About This Document" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our company profile provides a comprehensive overview of Drycool Systems India — our history, capabilities, product range, manufacturing infrastructure, and client portfolio. Ideal for procurement teams, consultants, and potential partners.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="text-center py-12 bg-card">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-accent/10 mx-auto mb-6">
                  <FileText className="h-10 w-10 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Company Profile</h3>
                <p className="mt-2 text-sm text-muted-foreground mb-6">PDF Document • Drycool Systems</p>
                
                <div className="flex items-center justify-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4" /> View PDF
                  </button>
                </div>

                <DownloadModal 
                  isOpen={isModalOpen} 
                  onClose={() => setIsModalOpen(false)} 
                  onSuccess={handleDownload}
                  title="Company Profile"
                />
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfileDownload;
