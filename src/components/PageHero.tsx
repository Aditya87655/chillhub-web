import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const words = title.split(" ");

  return (
    <section className="relative min-h-[40vh] py-20 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <motion.img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground flex flex-wrap gap-x-3">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-4 text-lg text-primary-foreground/70 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-6 h-1 w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(var(--industrial-orange)), hsl(var(--industrial-teal)))" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
