import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductBreadcrumbProps {
  section: { title: string; slug: string };
  category: { title: string; slug: string };
  currentPage: string;
  isCategoryPage?: boolean;
}

const ProductBreadcrumb = ({ section, category, currentPage, isCategoryPage = false }: ProductBreadcrumbProps) => (
  <nav aria-label="Product breadcrumb" className="border-b bg-muted/40">
    <div className="container flex flex-wrap items-center gap-2 py-3 text-sm text-muted-foreground">
      <Link to="/" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
        <Home className="h-3.5 w-3.5" /> Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link to="/products" className="transition-colors hover:text-accent">Products</Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link to={`/products/${section.slug}`} className="transition-colors hover:text-accent">{section.title}</Link>
      <ChevronRight className="h-3.5 w-3.5" />
      {isCategoryPage ? (
        <span className="font-semibold text-foreground">{category.title}</span>
      ) : (
        <>
          <Link to={`/products/${section.slug}/${category.slug}`} className="transition-colors hover:text-accent">{category.title}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{currentPage}</span>
        </>
      )}
    </div>
  </nav>
);

export default ProductBreadcrumb;
