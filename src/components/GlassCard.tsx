import React, { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

const GlassCard = ({ children, className = "", hover = true, tilt = true, ...props }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-6 shadow-md transition-all duration-500",
        hover && "hover:shadow-2xl hover:border-accent/30",
        "relative overflow-hidden group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease, border-color 0.3s ease" }}
      {...props}
    >
      {/* Gradient highlight on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: "linear-gradient(135deg, hsl(var(--industrial-teal) / 0.05) 0%, hsl(var(--industrial-orange) / 0.05) 100%)" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
