import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Briefcase, CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 w-full h-full">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent>
              {backgroundImages.map((image, index) => (
                <CarouselItem key={index} className="w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-sand-100 text-sand-500 rounded-full text-sm font-medium mb-6 animate-fade-up">
              Bienvenue sur SenduTalent
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
              Découvrez les Meilleurs Talents du Sénégal
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-up">
              La première plateforme de mise en relation entre talents sénégalais et opportunités professionnelles
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="inline-flex items-center px-8 py-4 bg-emerald-300 text-white rounded-lg hover:bg-emerald-400 transition-colors duration-200 font-medium text-lg group">
                Commencer maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sand-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-lg text-gray-600">
              Un processus simple et efficace pour connecter les talents aux meilleures opportunités
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-sand-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages</h2>
            <p className="text-lg text-gray-600">
              Ce que disent nos talents et entreprises partenaires
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-sand-300"
                      fill="#F5B971"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sand-500 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sand-500">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à rejoindre la communauté SenduTalent ?
            </h2>
            <p className="text-xl text-sand-100 mb-8">
              Inscrivez-vous maintenant et découvrez les meilleures opportunités professionnelles au Sénégal
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-sand-500 rounded-lg hover:bg-sand-50 transition-colors duration-200 font-medium text-lg">
              S'inscrire gratuitement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const backgroundImages = [
  "/slides/talent-1.jpg",
  "/slides/talent-2.jpg",
  "/slides/talent-3.jpg",
  "/slides/talent-4.jpg",
  "/slides/talent-5.jpg",
  "/slides/talent-6.jpg",
];

const features = [
  {
    icon: Users,
    title: "Créez votre profil",
    description: "Mettez en avant vos compétences et expériences pour vous démarquer",
  },
  {
    icon: Briefcase,
    title: "Trouvez des opportunités",
    description: "Accédez à des offres d'emploi exclusives adaptées à votre profil",
  },
  {
    icon: CheckCircle,
    title: "Développez votre carrière",
    description: "Bénéficiez d'un accompagnement personnalisé pour atteindre vos objectifs",
  },
];

const testimonials = [
  {
    name: "Fatou Diallo",
    role: "Développeuse Full Stack",
    text: "Grâce à SenduTalent, j'ai trouvé un poste qui correspond parfaitement à mes compétences et à mes aspirations. Le processus était simple et efficace.",
  },
  {
    name: "Mamadou Sow",
    role: "Directeur RH, TechSen",
    text: "La qualité des profils sur SenduTalent est exceptionnelle. Nous avons recruté plusieurs talents qui ont significativement contribué à notre croissance.",
  },
];

export default Index;
