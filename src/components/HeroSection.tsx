import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Simplified version without problematic 3D components
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background with pure CSS instead of 3D */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Floating animated particles with CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-neon-green rounded-full animate-ping opacity-50" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 glow-text gradient-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Web Developers 
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            A Computer Science student passionate about building intelligent systems and bringing tomorrow's technology to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Button 
              size="lg"
              
              className="bg-primary text-primary-foreground ring-1 ring-primary/25 hover:shadow-glow transition-all duration-300 px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/30 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 px-8 py-3"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full opacity-60"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-accent rounded-full opacity-40"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-neon-green rounded-full opacity-50"
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
