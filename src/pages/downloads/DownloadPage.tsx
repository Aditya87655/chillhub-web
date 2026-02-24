import { Download, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

interface DownloadPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const DownloadPage = ({ title, subtitle, description, features }: DownloadPageProps) => (
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
              <p className="mt-2 text-sm text-muted-foreground">PDF Brochure • Drycool Systems</p>
              <button className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
                <Download className="h-4 w-4" /> Download PDF
              </button>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
);

export default DownloadPage;
