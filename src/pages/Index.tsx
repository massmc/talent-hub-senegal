
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sand-900">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-sand-700/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-sand-100">SenduTalent</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-sand-300 hover:text-sand-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

            {/* Main Menu - Desktop */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sand-300 hover:text-sand-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu - Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black/95 py-4 md:hidden">
                <div className="container mx-auto px-4 space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sand-300 hover:text-sand-100 transition-colors py-2"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2 md:space-x-4">
              <Button 
                variant="outline" 
                className="bg-black text-white border-2 border-white hover:bg-black/80 text-sm md:text-base px-2 md:px-4"
              >
                {isMobile ? "Créer" : "Créer un compte"}
              </Button>
              <Button className="bg-sand-500 hover:bg-sand-600 text-white text-sm md:text-base px-2 md:px-4">
                {isMobile ? "Login" : "Se connecter"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image and African Pattern Overlay */}
      <section className="relative min-h-[25vh] md:min-h-[50vh] pt-12 md:pt-16 pb-8 md:pb-10 flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/c68d2c9d-9e23-48e5-90d9-76e5569af184.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* African pattern overlay */}
          <div className="absolute inset-0 bg-sand-900/90 mix-blend-multiply" />
          <div 
            className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C17817' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
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

            {/* Search Bar */}
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
      </section>

      {/* Why SenduTalent Section */}
      <section className="py-12 md:py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-sand-900">Pourquoi SenduTalent?</h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-sand-800 text-sm md:text-base">
                  SenduTalent est une <span className="font-semibold">plateforme en ligne</span> qui permet aux{" "}
                  <span className="font-semibold">entreprises</span> de{" "}
                  <span className="font-semibold">trouver et de travailler</span> avec des 
                  freelancers et des consultants du digital basés au Sénégal.
                </p>
                <p className="text-sand-800 text-sm md:text-base">
                  En utilisant SenduTalent, vous pouvez accéder à un large éventail de talents tech 
                  offshore au Sénégal et trouver les professionnels qui répondent le mieux à vos besoins 
                  pour votre projet. La plateforme permet également de gérer les projets et les 
                  communications avec les freelancers et consultants de manière efficace.
                </p>
                <div className="pt-4">
                  <Button className="bg-sand-500 hover:bg-sand-600 text-white px-4 md:px-8 w-full sm:w-auto">
                    Découvrir les talents
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img 
                src="/lovable-uploads/c68d2c9d-9e23-48e5-90d9-76e5569af184.png"
                alt="Professional consultant working on a digital project"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const menuItems = [
  "Contactez-nous",
  "Entreprises",
  "Agences / ESN",
  "Freelances",
  "Marketplace",
  "Blog"
];

export default Index;
