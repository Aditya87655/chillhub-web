import { Navigate, useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import CTASection from "@/components/product/CTASection";
import FeatureGrid from "@/components/product/FeatureGrid";
import Hero from "@/components/product/Hero";
import ProductBreadcrumb from "@/components/product/Breadcrumb";
import SpecTable from "@/components/product/SpecTable";
import SeoMeta from "@/components/SeoMeta";
import { getCategoryPage, getSubmenuPage, productSections } from "@/lib/productData";

const ProductSubmenuPage = () => {
  const { sectionSlug, categorySlug, itemSlug } = useParams();

  if (!sectionSlug || !categorySlug || !itemSlug) {
    return <Navigate to="/products" replace />;
  }

  const section = productSections.find((entry) => entry.slug === sectionSlug);
  const category = getCategoryPage(sectionSlug, categorySlug);
  const page = getSubmenuPage(sectionSlug, categorySlug, itemSlug);

  if (!section || !category || !page) {
    return <NotFound />;
  }

  return (
    <>
      <SeoMeta title={`${page.title} | ${category.title} | ChillHub Web`} description={page.description} />
      <ProductBreadcrumb
        section={{ title: section.title, slug: section.slug }}
        category={{ title: category.title, slug: category.slug }}
        currentPage={page.title}
      />
      <Hero title={page.title} subtitle={page.description} image={page.image} imageAlt={page.imageAlt} />
      <FeatureGrid title={`${page.title} Capabilities`} items={page.highlights} />
      <SpecTable rows={page.specifications} />
      <FeatureGrid title="Recommended Applications" items={page.applications} />
      <CTASection title={page.title} />
    </>
  );
};

export default ProductSubmenuPage;
