import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => (
  <div className="group bg-card rounded-lg overflow-hidden industrial-shadow hover:industrial-shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{description}</p>
      <Link
        to="/products"
        className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent hover:underline"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default ProductCard;
