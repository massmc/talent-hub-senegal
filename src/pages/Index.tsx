import { motion } from "framer-motion";
import { Search, Menu, Briefcase, UserCheck, Target, FileStack, GraduationCap, Code, Smartphone, Database, Terminal, Network, Shield, Palette, Paintbrush, Image, Shapes, PenTool, CheckCircle, Users } from "lucide-react";
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
                src="/lovable-uploads/0780ef47-9b37-4625-add8-77cf53c70476.png"
                alt="Illustration de feuilles avec checklist"
                className="w-full object-contain mix-blend-darken"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-sand-200"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-sand-900 mb-3 text-center">Comment démarrer un projet sur Sendu Talent ?</h3>
              <p className="text-sand-700 text-lg">
                Sendu Talent vous permet de trouver les meilleurs talents pour vos besoins, en vous connectant directement avec des professionnels qualifiés au sein de notre communauté. Vous pouvez soit sélectionner les talents qui correspondent à vos critères, soit nous confier la recherche du profil idéal. Une fois votre choix fait, la contractualisation s'effectue en ligne en toute simplicité, et vous pouvez suivre l'avancement de votre projet en toute transparence via notre plateforme.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-sand-900 text-center mb-12">
              Deux alternatives s'offrent à vous
            </h3>

            <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="absolute top-8 bottom-8 left-1/2 w-px bg-sand-200 -translate-x-1/2 transform -rotate-6 hidden md:block" />
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <div className="inline-block p-4 bg-sand-50 rounded-full mb-4">
                    <UserCheck className="w-8 h-8 text-sand-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-sand-900 mb-2">A. Je suis autonome</h4>
                  <p className="text-sand-700">Et je sélectionne la talent ou je constitue mon équipe moi-même.</p>
                </div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
                  >
                    <Target className="w-6 h-6 text-sand-500 mb-2" />
                    <h5 className="font-semibold text-sand-900 mb-2">1. J'utilise la plateforme</h5>
                    <p className="text-sand-700">pour trouver simplement et rapidement les talents correspondants à mes attentes.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
                  >
                    <Users className="w-6 h-6 text-sand-500 mb-2" />
                    <h5 className="font-semibold text-sand-900 mb-2">2. Je suis mis en contact avec les talents</h5>
                    <p className="text-sand-700">Avec mon Talent Manager, pour valider leur adéquation avec mon projet, je reçois les devis et je fais mon choix.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
                  >
                    <FileStack className="w-6 h-6 text-sand-500 mb-2" />
                    <h5 className="font-semibold text-sand-900 mb-2">3. Je contractualise</h5>
                    <p className="text-sand-700">Et je suis l'avancement de mon projet à l'aide des outils de suivi de la plateforme SenduTalent CRM.</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <div className="inline-block p-4 bg-sand-50 rounded-full mb-4">
                    <Briefcase className="w-8 h-8 text-sand-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-sand-900 mb-2">B. Je soumets mon brief</h4>
                  <p className="text-sand-700">Et je suis accompagné dans ma recherche d'un talent ou la constitution de mon équipe.</p>
                </div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
                  >
                    <Target className="w-6 h-6 text-sand-500 mb-2" />
                    <h5 className="font-semibold text-sand-900 mb-2">1. SenduTalent fait une sélection sur-mesure</h5>
                    <p className="text-sand-700">Et me propose une short-list de Talents ou une équipe qui correspond à mes attentes.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-sand-500 mb-2" />
                    <h5 className="font-semibold text-sand-900 mb-2">2. Je valide ma sélection</h5>
                    <p className="text-sand-700">je fais les entretiens nécessaires avec le talent sélectionné et je valide le devis correspondant.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
                  >
                    <FileStack className="w-6 h-6 text-sand-500 mb-2" />
                    <h5 className="font-semibold text-sand-900 mb-2">3. Je contractualise</h5>
                    <p className="text-sand-700">Et je suis l'avancement de mon projet à l'aide des outils de suivi de la plateforme SenduTelent CRM.</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-sand-500 hover:bg-sand-600 text-white px-8 py-3">
                Démarrer un projet
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100">Comment trouver un Talent sur Sendu Talent ?</h2>
                <p className="text-sand-300 mb-4">
                  Rien de plus simple ! Depuis votre espace client, accédez à la <span className="text-sand-100">marketplace</span> et sélectionnez les profils qui correspondent à vos besoins. Vous pouvez ensuite leur envoyer une invitation directement via notre <span className="text-sand-100">Talent Manager</span> pour entamer les discussions.
                </p>
                <p className="text-sand-300">
                  Avec <span className="text-sand-100">Sendu Talent</span>, le recrutement devient plus rapide et efficace.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <img 
                  src="/lovable-uploads/4da15a37-aea9-4d3a-b63b-f22070c083ff.png"
                  alt="Trouver un talent sur Sendu Talent"
                  className="w-full rounded-lg shadow-xl"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2"
              >
                <img 
                  src="/lovable-uploads/c68d2c9d-9e23-48e5-90d9-76e5569af184.png"
                  alt="Sécurité et conformité"
                  className="w-full rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100">Sécurité et conformité</h2>
                <p className="text-sand-300 mb-6">
                  Chez <span className="text-sand-100">Sendu Talent</span>, nous garantissons une gestion conforme et sécurisée de vos missions. Nous vérifions et centralisons les documents légaux de chaque talent pour assurer leur conformité et nous nous chargeons de la contractualisation dans le respect des réglementations en vigueur.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Protection juridique :</span> Notre contrat cadre vous protège contre le prêt illicite de main-d'œuvre, le délit de marchandage et le risque de requalification.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Propriété intellectuelle sécurisée :</span> Vous bénéficiez d'un <span className="text-sand-100">coffre-fort numérique</span> où sont stockés tous les documents relatifs à l'obligation de vigilance et aux droits d'exploitation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100">Gestion simplifiée et contractualisation</h2>
                <p className="text-sand-300 mb-6">
                  Avec <span className="text-sand-100">Sendu Talent</span>, tout est centralisé :
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Un seul fournisseur référencé :</span> Simplifiez la gestion administrative grâce à un contrat unique.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Réduction des coûts de gestion :</span> Gagnez du temps avec un interlocuteur unique pour la gestion des contrats et des paiements.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Flexibilité contractuelle :</span> Un <span className="text-sand-100">Contrat Cadre unique</span>, puis un simple avenant pour chaque mission.
                    </p>
                  </div>
                </div>
                <p className="text-sand-300 mt-6">
                  Vous suivez tout en temps réel via un <span className="text-sand-100">tableau de bord détaillé</span>.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <img 
                  src="/lovable-uploads/c50836e1-bdfe-4a04-8582-c239301103f2.png"
                  alt="Gestion simplifiée"
                  className="w-full rounded-lg shadow-xl"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2"
              >
                <img 
                  src="/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png"
                  alt="Tarification"
                  className="w-full rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100">Combien ça coûte ?</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Aucun abonnement, aucun coût pour le Talent.</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sand-500 flex-shrink-0 mt-1" />
                    <p className="text-sand-300">
                      <span className="text-sand-100 font-semibold">Ne payez qu'en cas de succès !</span>
                    </p>
                  </div>
                </div>
                <p className="text-sand-300 mb-4">
                  Inscrivez-vous, soumettez votre besoin et recevez gratuitement <span className="text-sand-100">les 3 meilleurs profils</span> sélectionnés pour vous. Notre commission, transparente et proportionnelle au <span className="text-sand-100">Tarif Journalier du Talent</span>, est uniquement à la charge du client en cas de mission validée.
                </p>
                <p className="text-sand-300">
                  Avec <span className="text-sand-100">Sendu Talent</span>, aucun frais caché, tout est clair et équitable. 🚀
                </p>
              </motion.div>
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
