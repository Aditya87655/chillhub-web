interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2
      className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${
        light ? "text-primary-foreground" : "text-gradient-navy"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-16 rounded-full bg-accent ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
