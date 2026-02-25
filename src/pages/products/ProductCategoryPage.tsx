import { Navigate, useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import CTASection from "@/components/product/CTASection";
import FeatureGrid from "@/components/product/FeatureGrid";
import Hero from "@/components/product/Hero";
import ProductBreadcrumb from "@/components/product/Breadcrumb";
import SpecTable from "@/components/product/SpecTable";
import SeoMeta from "@/components/SeoMeta";
import { getCategoryPage, productSections } from "@/lib/productData";

const ProductCategoryPage = () => {
  const { sectionSlug, categorySlug } = useParams();

  if (!sectionSlug || !categorySlug) {
    return <Navigate to="/products" replace />;
  }

  const section = productSections.find((entry) => entry.slug === sectionSlug);
  const page = getCategoryPage(sectionSlug, categorySlug);

  if (!section || !page) {
    return <NotFound />;
  }

  return (
    <>
      <SeoMeta title={`${page.title} | ${section.title} | ChillHub Web`} description={page.description} />
      <ProductBreadcrumb
        section={{ title: section.title, slug: section.slug }}
        category={{ title: page.title, slug: page.slug }}
        currentPage={page.title}
        isCategoryPage
      />
      <Hero title={page.title} subtitle={page.description} image={page.image} imageAlt={page.imageAlt} />
      <FeatureGrid title={`${page.title} Highlights`} items={page.highlights} />
      <SpecTable rows={page.specifications} />
      <FeatureGrid title="Ideal Use Cases" items={page.applications} />
      <CTASection title={page.title} />
    </>
  );
};

export default ProductCategoryPage;
