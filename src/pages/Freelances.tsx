
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
      <section className="relative pt-32 pb-16 px-4">
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/d5e9024b-ee43-4972-a507-6b180bf93b22.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}
        />

        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Développez votre carrière avec Sendu Talent
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-white/90">
              Trouvez des missions adaptées à vos compétences et disponibilités, tout en bénéficiant d'un accompagnement personnalisé.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-white/90 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Missions de qualité</h3>
                <p className="text-sm">Accédez à des projets IT ambitieux auprès d'entreprises sérieuses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Zéro frais</h3>
                <p className="text-sm">Service 100% gratuit pour les freelances</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Gestion administrative</h3>
                <p className="text-sm">On s'occupe de tout, concentrez-vous sur votre expertise</p>
              </div>
            </div>
            <Button className="bg-white text-sand-500 hover:bg-sand-100 text-lg px-8 py-6 mt-8">
              Rejoindre gratuitement
            </Button>
          </div>
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
