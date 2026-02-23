import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/products": "Products",
  "/industries": "Industries",
  "/infrastructure": "Drycool Intelligence",
  "/certificate": "Download",
  "/contact": "Contact Us",
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const name = routeNames[pathname] || pathname.replace("/", "");

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/50 border-b border-border">
      <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{name}</span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
