import AnimatedSection from "@/components/AnimatedSection";

interface FeatureGridProps {
  title: string;
  items: string[];
}

const FeatureGrid = ({ title, items }: FeatureGridProps) => (
  <section className="py-20">
    <div className="container">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      </AnimatedSection>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <AnimatedSection key={item} delay={index * 0.06}>
            <article className="h-full rounded-xl border bg-card p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-foreground">{item}</h3>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
