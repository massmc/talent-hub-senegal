
import { motion } from "framer-motion";
import { Search, Menu, Briefcase, UserCheck, Target, FileStack, GraduationCap, Code, Smartphone, Database, Terminal, Network, Shield, Palette, Paintbrush, Image, Shapes, PenTool, CheckCircle, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Index = () => {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const slides = [
    "/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png",
    "/lovable-uploads/c50836e1-bdfe-4a04-8582-c239301103f2.png"
  ];

  return (
    <div className="min-h-screen bg-sand-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-sand-700/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-sand-100">SenduTalent</span>
            </div>
            
            <button 
              className="md:hidden text-sand-300 hover:text-sand-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

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

      <section className="py-12 md:py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-sand-900">Pourquoi SenduTalent?</h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-black text-sm md:text-base">
                  SenduTalent est une <span className="font-semibold">plateforme en ligne</span> qui permet aux{" "}
                  <span className="font-semibold">entreprises</span> de{" "}
                  <span className="font-semibold">trouver et de travailler</span> avec des 
                  freelancers et des consultants du digital basés au Sénégal.
                </p>
                <p className="text-black text-sm md:text-base">
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-sand-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-sand-100 mb-4">Nos domaines d'expertise</h2>
            <p className="text-sand-300 text-lg max-w-2xl mx-auto">
              Découvrez notre large éventail de services pour répondre à tous vos besoins digitaux
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-sand-700/30 hover:border-sand-500/50 transition-colors"
              >
                <div className="text-center">
                  {domain.icon}
                  <h3 className="text-xl font-semibold text-sand-100 mb-6">{domain.title}</h3>
                </div>
                <ul className="space-y-3">
                  {domain.items.map((item, itemIndex) => (
                    <li key={typeof item === 'string' ? item : item.text} className="text-sand-300 flex items-center">
                      {typeof item === 'string' ? (
                        <>
                          <div className="w-2 h-2 rounded-full bg-sand-500 mr-3"></div>
                          {item}
                        </>
                      ) : (
                        <>
                          {item.icon}
                          {item.text}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">Des talents vérifiés et évalués</h2>
            <p className="text-sand-700 text-lg max-w-2xl mx-auto">
              Un talent, freelance ou consultant, n'intègre la communauté qu'après une phase de sélection poussée
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sand-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-sand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Processus de vérification rigoureux</h3>
                  <p className="text-sand-700">
                    Nos Talent Managers ont doublement vérifié le niveau de compétences techniques, les références, 
                    les motivations et, le moment venu, de l'intérêt pour votre mission.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sand-100 rounded-lg">
                  <Users className="w-6 h-6 text-sand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Suivi de qualité</h3>
                  <p className="text-sand-700">
                    Le suivi et la qualité des missions sont assurés par leurs soins jusqu'à terme du projet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/lovable-uploads/c68d2c9d-9e23-48e5-90d9-76e5569af184.png"
                alt="Illustration de feuilles avec checklist"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-sand-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-sand-100 rounded-lg">
                <FileCheck className="w-6 h-6 text-sand-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-sand-900 mb-3">Comment démarrer un projet ?</h3>
                <p className="text-sand-700 text-lg">
                  La plateforme vous permet de trouver les meilleurs talents malgaches au sein de notre communauté IT, 
                  ou de nous confier vos recherches ! Nous pourrons ensuite contractualiser en ligne et suivre 
                  l'ensemble de vos projets.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-sand-500 hover:bg-sand-600 text-white px-8 py-3">
                Démarrer un projet
              </Button>
            </div>
          </motion.div>
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

const domains = [
  {
    title: "Projet & Coaching",
    icon: <Briefcase className="w-8 h-8 text-sand-300 mb-4" />,
    items: [
      {
        text: "Chef de projet",
        icon: <Target className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Scrum master",
        icon: <UserCheck className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Product Owner",
        icon: <FileStack className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "AMOA/AMOE",
        icon: <Target className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Consulting",
        icon: <GraduationCap className="w-4 h-4 text-sand-500 inline mr-2" />
      }
    ]
  },
  {
    title: "Tech & Digital",
    icon: <Code className="w-8 h-8 text-sand-300 mb-4" />,
    items: [
      {
        text: "Développeur Front-End",
        icon: <Terminal className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Développeur back-End",
        icon: <Database className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Développeur Fullstack",
        icon: <Code className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Développeur Mobile",
        icon: <Smartphone className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Tech Lead",
        icon: <Network className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "DevOps",
        icon: <Shield className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Quality Assurance",
        icon: <Target className="w-4 h-4 text-sand-500 inline mr-2" />
      }
    ]
  },
  {
    title: "Design & Création",
    icon: <Palette className="w-8 h-8 text-sand-300 mb-4" />,
    items: [
      {
        text: "UI/UX Design",
        icon: <PenTool className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Design Graphique",
        icon: <Paintbrush className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Motion Design",
        icon: <Image className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Branding & Identité",
        icon: <Shapes className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Prototypage",
        icon: <PenTool className="w-4 h-4 text-sand-500 inline mr-2" />
      },
      {
        text: "Design System",
        icon: <Shapes className="w-4 h-4 text-sand-500 inline mr-2" />
      }
    ]
  }
];

export default Index;
