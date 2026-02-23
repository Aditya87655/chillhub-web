import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="relative bg-hero-gradient py-20 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
    </div>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
          {title}
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl">{subtitle}</p>
        <div className="mt-6 h-1 w-20 rounded-full bg-accent" />
      </motion.div>
    </div>
  </section>
);

export default PageHero;
