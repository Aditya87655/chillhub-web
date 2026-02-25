import { useParams, Navigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { getProductBySlug } from "@/data/productPages";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import SpecTable from "@/components/SpecTable";
import CTASection from "@/components/CTASection";
import GlassCard from "@/components/GlassCard";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/products" replace />;

  return (
    <>
      <PageHero title={product.title} subtitle={product.subtitle} />

      {/* Description */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {product.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

      {/* Features */}
      <section className="py-20 bg-section-gradient">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Key Features" subtitle="What makes our solution stand out" />
          </AnimatedSection>
          <FeatureGrid features={product.features} />
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Technical Specifications" subtitle="Engineering excellence in every detail" />
          </AnimatedSection>
          <SpecTable specs={product.specs} />
        </div>
      </section>

      <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

      {/* Applications */}
      <section className="py-20 bg-section-gradient">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Applications" subtitle="Industries and use cases we serve" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {product.applications.map((a, i) => (
              <AnimatedSection key={a} delay={i * 0.05}>
                <GlassCard className="flex items-center gap-3 py-4 bg-card" hover={false}>
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--industrial-orange))] shrink-0" />
                  <span className="text-sm font-medium text-foreground">{a}</span>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Why Choose Drycool" subtitle="Advantages that set us apart" />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {product.advantages.map((adv, i) => (
              <AnimatedSection key={adv} delay={i * 0.05}>
                <div className="rounded-lg border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground industrial-shadow">
                  {adv}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Get a Quote for ${product.title}`}
        subtitle="Contact our engineering team for custom specifications and competitive pricing."
        buttonText="Request Quote"
      />
    </>
  );
};

export default ProductDetailPage;
