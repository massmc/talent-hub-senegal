
import MainNavbar from "@/components/navigation/MainNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Handshake, Lightbulb, MessageSquare, Users } from "lucide-react";

const benefits = [
  {
    icon: <Handshake className="w-8 h-8 text-sand-500" />,
    title: "Missions de qualité",
    description: "Accédez à des missions challengeantes auprès de grandes entreprises et startups innovantes."
  },
  {
    icon: <Users className="w-8 h-8 text-sand-500" />,
    title: "Communauté active",
    description: "Rejoignez une communauté de freelances talentueux et participez à des événements exclusifs."
  },
  {
    icon: <Award className="w-8 h-8 text-sand-500" />,
    title: "Rémunération attractive",
    description: "Bénéficiez de taux journaliers compétitifs et d'un paiement garanti et rapide."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-sand-500" />,
    title: "Accompagnement personnalisé",
    description: "Profitez d'un suivi dédié et de conseils pour développer votre activité."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-sand-500" />,
    title: "Développement professionnel",
    description: "Évoluez grâce à des formations et au partage d'expérience entre pairs."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-sand-500" />,
    title: "Support administratif",
    description: "Concentrez-vous sur vos missions pendant que nous gérons l'administratif."
  }
];

const FreelancesPage = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-sand-500 to-terracotta-500">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Donnez un nouvel élan à votre carrière de freelance
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez SenduTalent et accédez aux meilleures opportunités du marché tout en bénéficiant d'un accompagnement sur mesure.
          </p>
          <Button className="bg-white text-sand-500 hover:bg-sand-100 text-lg px-8 py-6">
            Rejoindre la communauté
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi rejoindre SenduTalent ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-sand-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Créez votre profil gratuitement et commencez à recevoir des opportunités de missions adaptées à vos compétences.
          </p>
          <Button className="bg-sand-500 text-white hover:bg-sand-600 text-lg px-8 py-6">
            Créer mon profil
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FreelancesPage;
