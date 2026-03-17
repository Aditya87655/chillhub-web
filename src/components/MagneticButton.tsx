import { useRef, useCallback, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton = ({ children, className, onClick, as = "button", ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    ref.current.style.transition = "transform 0.1s ease-out";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0) scale(1)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }, []);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={cn(
        "relative overflow-hidden group",
        className
      )}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "0 0 20px hsl(var(--industrial-orange) / 0.4), inset 0 0 20px hsl(var(--industrial-orange) / 0.1)" }}
      />
      {children}
    </Tag>
  );
};

export default MagneticButton;
