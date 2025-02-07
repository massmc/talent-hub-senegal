
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">SenduTalent</span>
            </div>
            
            {/* Main Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Créer un compte
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Se connecter
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Trouvez rapidement les talents offshore pour{" "}
              <span className="text-emerald-400">booster vos projets</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Avec SenduTalent, accédez à la plus grande communauté de freelance et de consultants du digital basé au Sénégal.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 max-w-2xl"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text"
                  placeholder="Essayez 'Java', 'React', 'Python'..."
                  className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-400 w-full"
                />
              </div>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
                Rechercher
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SenduTalent Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi SenduTalent?</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  SenduTalent est une <span className="font-semibold">plateforme en ligne</span> qui permet aux{" "}
                  <span className="font-semibold">entreprises</span> de{" "}
                  <span className="font-semibold">trouver et de travailler</span> avec des 
                  freelancers et des consultants du digital basés au Sénégal.
                </p>
                <p className="text-gray-600">
                  En utilisant SenduTalent, vous pouvez accéder à un large éventail de talents tech 
                  offshore au Sénégal et trouver les professionnels qui répondent le mieux à vos besoins 
                  pour votre projet. La plateforme permet également de gérer les projets et les 
                  communications avec les freelancers et consultants de manière efficace.
                </p>
                <div className="pt-4">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
                    Découvrir les talents
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/4da15a37-aea9-4d3a-b63b-f22070c083ff.png"
                alt="SenduTalent Illustration"
                className="w-full max-w-md mx-auto"
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
