import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => (
  <section className="relative min-h-[40vh] py-20 overflow-hidden flex items-center">
    {/* Background Image with Overlay */}
    {backgroundImage ? (
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>
    ) : (
      <div className="absolute inset-0 bg-hero-gradient" />
    )}
    
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
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
