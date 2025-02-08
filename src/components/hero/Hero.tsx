
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const slides = [
    "/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png",
    "/lovable-uploads/c50836e1-bdfe-4a04-8582-c239301103f2.png"
  ];

  return (
    <section className="relative min-h-[calc(25vh+300px)] md:min-h-[calc(50vh+300px)] pt-12 md:pt-16 pb-8 md:pb-10 flex items-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={emblaRef} className="h-full">
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="relative flex-none w-full h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide})`,
                    filter: 'brightness(0.4)'
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sand-100 mb-3 md:mb-4 leading-tight"
            >
              Trouvez rapidement les talents offshore pour{" "}
              <span className="text-sand-300">booster vos projets</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-sand-200 mb-4 md:mb-6"
            >
              Avec SenduTalent, accédez à la plus grande communauté de freelance et de consultants du digital basé au Sénégal.
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
                  className="pl-10 py-3 bg-sand-800/30 border-sand-700/50 text-sand-100 placeholder:text-sand-400 w-full"
                />
              </div>
              <Button className="bg-sand-500 hover:bg-sand-600 text-white px-8 py-3 w-full sm:w-auto">
                Rechercher
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
