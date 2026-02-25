import { Link, Navigate, useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SeoMeta from "@/components/SeoMeta";
import { productSections } from "@/lib/productData";

const ProductNavigator = () => {
  const { sectionSlug } = useParams();

  if (!sectionSlug) {
    return <Navigate to="/products" replace />;
  }

  const section = productSections.find((entry) => entry.slug === sectionSlug);

  if (!section) {
    return <NotFound />;
  }

  return (
    <>
      <SeoMeta title={`${section.title} | ChillHub Web`} description={section.summary} />
      <PageHero title={section.title} subtitle={section.summary} />

      <section className="py-20">
        <div className="container space-y-16">
          {section.groups.map((group, groupIndex) => (
            <AnimatedSection key={group.slug} delay={groupIndex * 0.05}>
              <article className="rounded-xl border bg-card p-8 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-3xl font-bold text-primary">{group.title}</h2>
                  <Link
                    to={`/products/${section.slug}/${group.slug}`}
                    className="rounded-lg bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]"
                  >
                    Explore Category
                  </Link>
                </div>

                {group.items.length > 0 ? (
                  <ul className="mt-6 grid gap-3 md:grid-cols-2" aria-label={`${group.title} submenu list`}>
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/products/${section.slug}/${group.slug}/${item.slug}`}
                          className="block rounded-lg border bg-muted/20 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-accent"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-muted-foreground">This category is available as a dedicated page without submenu items.</p>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductNavigator;
