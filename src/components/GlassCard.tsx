import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true, ...props }: GlassCardProps) => (
  <div
    className={cn(
      "rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-md",
      hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
