import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, BarChart, FileCheck, Rocket, Target, CheckCircle2, PanelTopOpen, UserCheck, Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: <Building2 className="w-12 h-12 text-sand-500" />,
    title: "Accédez à de nouvelles opportunités",
    description: "Accédez à un large réseau d'entreprises : PME, ETI, start-ups et grands comptes, sans besoin de prospection.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-sand-500" />,
    title: "Optimisez vos intercontrats",
    description: "Proposez à vos consultants en intercontrat des missions adaptées à leurs compétences et aspirations.",
  },
  {
    icon: <Target className="w-12 h-12 text-sand-500" />,
    title: "Missions de qualité",
    description: "Des missions en parfaite adéquation avec le profil de vos collaborateurs et leurs compétences.",
  },
  {
    icon: <PanelTopOpen className="w-12 h-12 text-sand-500" />,
    title: "Gestion centralisée",
    description: "Pilotez vos équipes avec des outils modernes : dashboard, signature électronique, et plus encore !",
  },
];

const workflowSteps = [
  {
    icon: <Building2 className="w-8 h-8 text-sand-500" />,
    title: "Référencement de votre agence / ESN",
    description: "Intégration à notre plateforme et proposition de missions adaptées à vos consultants.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-sand-500" />,
    title: "Qualification de vos consultants",
    description: "Évaluation des compétences techniques et des aspirations professionnelles.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-sand-500" />,
    title: "Tests techniques",
    description: "Évaluation technique rigoureuse sur notre plateforme pour tous les consultants IT.",
  },
  {
    icon: <Users className="w-8 h-8 text-sand-500" />,
    title: "Évaluation du savoir-être",
    description: "Évaluation des compétences comportementales pour une intégration fluide.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-sand-500" />,
    title: "Accompagnement et suivi",
    description: "Précision des préférences et disponibilités avant la mise en relation client.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-sand-500" />,
    title: "Sélection et démarrage de mission",
    description: "Mise en relation et accompagnement tout au long de la mission.",
  },
];

const benefits = [
  {
    icon: <Rocket className="w-16 h-16 text-sand-500" />,
    title: "Accélérez votre business",
    description: "Développez votre activité rapidement grâce à notre réseau.",
  },
  {
    icon: <PanelTopOpen className="w-16 h-16 text-sand-500" />,
    title: "Gestion simplifiée",
    description: "Pilotez vos consultants en toute simplicité.",
  },
  {
    icon: <BarChart className="w-16 h-16 text-sand-500" />,
    title: "Maximisez l'occupation",
    description: "Optimisez le taux d'occupation de vos talents.",
  },
  {
    icon: <Briefcase className="w-16 h-16 text-sand-500" />,
    title: "Missions qualifiées",
    description: "Accédez à des missions de qualité pour vos experts IT.",
  },
];

const faqs = [
  {
    question: "Mon agence / ESN est-elle en contact avec le client final ?",
    answer: "Non, Sendu Talent joue le rôle de tiers de confiance entre votre agence et le client. Nous gérons l'ensemble du processus de collaboration et nous assurons le suivi qualitatif des missions tout au long de la prestation."
  },
  {
    question: "Quelle est la nature du contrat entre Sendu Talent et mon agence ?",
    answer: "Le contrat établit les modalités de collaboration, de mise en relation et de gestion administrative entre votre agence / ESN et Sendu Talent. Nous nous occupons des contrats de mission, de la facturation et des paiements, pour une relation fluide et sécurisée."
  },
  {
    question: "Quel est le coût du référencement de mon agence sur Sendu Talent ?",
    answer: "Le référencement est totalement gratuit. Notre rémunération est basée uniquement sur le succès, vous ne payez que lorsque vos consultants sont engagés sur une mission."
  }
];

const AgencesPage = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-geometric-pattern bg-cover bg-center bg-opacity-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sand-900 mb-6">
            Rejoignez la plus grande communauté Tech en Afrique !
          </h1>
          <p className="text-xl text-sand-700 mb-8 max-w-3xl mx-auto">
            Sendu Talent vous aide à développer votre business et à gérer vos consultants. 
            Nous prenons en charge la gestion des plannings, le suivi des missions et tous les aspects administratifs.
          </p>
          <Button className="bg-sand-500 hover:bg-sand-600 text-white">
            Rejoindre Sendu Talent
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sand-900 text-center mb-12">
            Pourquoi collaborer avec Sendu Talent ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="african-card">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sand-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sand-900 text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="african-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-sand-100 rounded-full p-3 mr-4">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-sand-500">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sand-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sand-900 mb-4">
            Pourquoi choisir Sendu Talent ?
          </h2>
          <p className="text-xl text-sand-700 mb-12">
            La plateforme N°1 pour les agences et ESN en Afrique !
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="african-card">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sand-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button className="bg-sand-500 hover:bg-sand-600 text-white text-lg px-8 py-6">
              Développez votre activité avec Sendu Talent
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-sand-900 text-center mb-8">
            FAQ - Sendu Talent pour les Agences & ESN
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/90 backdrop-blur-sm rounded-lg border border-sand-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sand-700 px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg text-sand-700 mb-6">
              🚀 Rejoignez dès maintenant Sendu Talent et développez votre activité avec les meilleurs freelances IT !
            </p>
            <Button className="bg-sand-500 hover:bg-sand-600 text-white text-lg px-8 py-6">
              Commencer maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgencesPage;
