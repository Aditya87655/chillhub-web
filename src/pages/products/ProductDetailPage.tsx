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
      <PageHero
        title={product.title.replace(/[:]$/, '')}
        subtitle={product.category}
        backgroundImage={product.heroImage}
      />

      {/* Hero Image / Section image & Primary Description */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="space-y-6">
                {product.paragraphs.slice(0, 3).map((p, i) => (
                  p !== "&nbsp;" && (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                      {p.replace(/&amp;/g, '&').replace(/&#8211;/g, '-').replace(/&nbsp;/g, ' ')}
                    </p>
                  )
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--industrial-orange)/0.2)] to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <GlassCard className="relative overflow-hidden aspect-[4/3] flex items-center justify-center p-0 border-primary/20">
                  {product.heroImage ? (
                    <img
                      src={product.heroImage}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-1-2.jpg"; // fallback
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Product Image</span>
                    </div>
                  )}
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specifications Table if present */}
      {product.specificationText && product.specificationText.length > 0 && (
        <section className="py-20 bg-muted/20">
          <div className="container">
            <AnimatedSection>
              <SectionHeading
                title="Technical Specifications"
                subtitle="Detailed engineering parameters and performance metrics"
              />
            </AnimatedSection>

            {/* If it's the simple label|value format */}
            {product.specificationText[0].includes('|') ? (
              <SpecTable specs={product.specificationText.map(line => {
                const [label, value] = line.split('|').map(s => s.trim());
                return { label, value: value || '' };
              })} />
            ) : (
              /* If it's just a list of strings */
              <div className="max-w-3xl mx-auto space-y-4">
                {product.specificationText.map((spec, i) => (
                  <GlassCard key={i} className="p-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-foreground">{spec}</span>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Additional Description */}
      {product.paragraphs.length > 3 && (
        <section className="py-10 bg-muted/10">
          <div className="container">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto space-y-4">
                {product.paragraphs.slice(3).map((p, i) => (
                  p.length > 10 && p !== "&nbsp;" && !p.includes("Your Name:") && (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {p.replace(/&amp;/g, '&').replace(/&#8211;/g, '-').replace(/&nbsp;/g, ' ')}
                    </p>
                  )
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Features List */}
      {product.featureList.length > 0 && (
        <section className="py-20 bg-section-gradient">
          <div className="container">
            <AnimatedSection>
              <SectionHeading title="Product Details & Features" subtitle="Technical capabilities and specifications" />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {product.featureList.map((feature, i) => (
                feature.length > 5 && (
                  <AnimatedSection key={i} delay={i * 0.05}>
                    <GlassCard className="flex items-start gap-3 p-5 h-full bg-card" hover={true}>
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--industrial-orange))] shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {feature.replace(/&amp;/g, '&').replace(/&#8211;/g, '-').replace(/&nbsp;/g, ' ')}
                      </span>
                    </GlassCard>
                  </AnimatedSection>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery / More Images if any */}
      {product.galleryImages.length > 0 && (
        <section className="py-20">
          <div className="container">
            <AnimatedSection>
              <SectionHeading title="Product Gallery" subtitle="Visual overview of the system" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.galleryImages.map((img, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="aspect-square rounded-xl overflow-hidden border border-border group">
                    <img
                      src={img}
                      alt={`${product.title} gallery ${i}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title={`Request for ${product.title.replace(/[:]$/, '')}`}
        subtitle="Contact our engineering team for custom specifications and global delivery options."
        buttonText="Request Quote"
      />
    </>
  );
};

export default ProductDetailPage;
