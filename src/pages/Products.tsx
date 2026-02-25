import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SeoMeta from "@/components/SeoMeta";
import AnimatedSection from "@/components/AnimatedSection";
import { productSections } from "@/lib/productData";

const Products = () => (
  <>
    <SeoMeta
      title="Products Mega Menu | ChillHub Web"
      description="Browse every category and submenu page mapped from the Products mega menu hierarchy."
    />
    <PageHero
      title="Products"
      subtitle="Structured product navigation with dedicated pages for every category and submenu from the mega menu."
    />

    <section className="py-20">
      <div className="container grid gap-8 lg:grid-cols-2">
        {productSections.map((section, sectionIndex) => (
          <AnimatedSection key={section.slug} delay={sectionIndex * 0.05}>
            <article className="h-full rounded-xl border bg-card p-8 shadow-md">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                <Link
                  to={`/products/${section.slug}`}
                  className="rounded-lg bg-[#f97316] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]"
                >
                  View Section
                </Link>
              </div>

              <div className="mt-8 space-y-8">
                {section.groups.map((group) => (
                  <div key={group.slug}>
                    <Link
                      to={`/products/${section.slug}/${group.slug}`}
                      className="text-xl font-semibold text-foreground transition-colors hover:text-accent"
                    >
                      {group.title}
                    </Link>
                    {group.items.length > 0 ? (
                      <ul className="mt-3 space-y-2" aria-label={`${group.title} links`}>
                        {group.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              to={`/products/${section.slug}/${group.slug}/${item.slug}`}
                              className="inline-block text-muted-foreground transition-colors hover:text-accent"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-muted-foreground">Dedicated category page available (no submenu links).</p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </>
);

export default Products;
