import { Download, FileText, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

interface DownloadPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pdfUrl?: string;
}

const DownloadPage = ({ title, subtitle, description, features, pdfUrl }: DownloadPageProps) => {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-gradient-navy mb-4">About This Document</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="text-center py-12 bg-card">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-accent/10 mx-auto mb-6">
                  <FileText className="h-10 w-10 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground mb-6">PDF Document • Drycool Systems</p>

                {pdfUrl ? (
                  <div className="flex items-center justify-center">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4" /> View PDF
                    </a>
                  </div>
                ) : (
                  <button disabled className="inline-flex items-center gap-2 rounded-lg bg-muted px-7 py-3.5 font-semibold text-muted-foreground cursor-not-allowed">
                    Document Unavailable
                  </button>
                )}
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadPage;
