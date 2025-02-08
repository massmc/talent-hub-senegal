
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  "/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png",
  "/lovable-uploads/c50836e1-bdfe-4a04-8582-c239301103f2.png"
];

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="relative min-h-[calc(25vh+300px)] md:min-h-[calc(50vh+300px)] pt-12 md:pt-16 pb-8 md:pb-10 flex items-center bg-sand-900">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={emblaRef} className="h-full">
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="relative flex-none w-full h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backgroundBlendMode: 'multiply'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center max-w-4xl">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight"
            >
              <span className="text-white">Trouvez rapidement les meilleurs talents africains pour </span>
              <span className="text-ochre-300">accélérer vos projets</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white mb-4 md:mb-6 leading-relaxed"
            >
              Avec <span className="text-ochre-300 font-semibold">Sendu Talent</span>, accédez à une vaste communauté de freelances et consultants digitaux, principalement basés au Sénégal, et profitez d'une expertise locale avec une portée internationale. 🚀
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-400 h-5 w-5" />
                <Input 
                  type="text"
                  placeholder="Essayez 'Java', 'React', 'Python'..."
                  className="pl-10 py-3 bg-sand-800/30 border-sand-700/50 text-sand-100 placeholder:text-sand-400 w-full african-border"
                />
              </div>
              <Button className="african-button">
                Rechercher
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
