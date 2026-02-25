import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureGrid = ({ features }: { features: Feature[] }) => (
  <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {features.map((f, i) => (
      <AnimatedSection key={f.title} delay={i * 0.1}>
        <GlassCard className="flex gap-5 bg-card h-full">
          <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-[hsl(var(--industrial-orange)/0.1)]">
            <f.icon className="h-7 w-7 text-[hsl(var(--industrial-orange))]" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        </GlassCard>
      </AnimatedSection>
    ))}
  </div>
);

export default FeatureGrid;
