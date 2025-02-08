import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Award, 
  Briefcase, 
  CheckCircle2,
  Gift,
  Handshake,
  Laptop,
  Lightbulb, 
  LineChart,
  Lock,
  MessageSquare, 
  Target, 
  UserPlus, 
  Users 
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const slides = [
    '/lovable-uploads/9ba9017d-756d-4cda-98bb-e0bbfa7bdc86.png',
    '/lovable-uploads/b454b838-12ff-4220-9c89-fecc87613dd2.png',
    '/lovable-uploads/a5950a02-ec7f-43f3-a19e-9d8f5f37f352.png'
  ];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-sand-50">
      <MainNavbar />
      
      {/* Hero Section avec dégradé marron-orange */}
      <section className="relative pt-32 pb-16 px-4 min-h-[600px]">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/lovable-uploads/a5950a02-ec7f-43f3-a19e-9d8f5f37f352.png')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sand-500/80 via-terracotta-500/80 to-sand-700/80" />
        </div>

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

      {/* Nos avantages pour la communauté Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos avantages pour la communauté
          </h2>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="bg-sand-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-sand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Accès à une communauté IT dynamique
                  </h3>
                  <p className="text-gray-600">
                    Échangez avec d'autres freelances, partagez des opportunités et évoluez ensemble.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sand-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Laptop className="w-8 h-8 text-sand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Location d'équipements informatiques
                  </h3>
                  <p className="text-gray-600">
                    Besoin d'un ordinateur ou d'un équipement réseau ? Nous mettons à disposition du matériel en location pour vous aider à mener à bien vos missions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sand-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <LineChart className="w-8 h-8 text-sand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Tableau de bord financier intuitif
                  </h3>
                  <p className="text-gray-600">
                    Suivez vos revenus, paiements et contrats en temps réel depuis votre espace personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple en trois étapes pour trouver votre prochaine mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sand-200 transition-colors">
                <UserPlus className="w-8 h-8 text-sand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Inscrivez-vous gratuitement</h3>
              <p className="text-gray-600 min-h-[4rem]">
                Créez votre profil en quelques minutes et complétez nos tests de qualification technique.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sand-200 transition-colors">
                <Target className="w-8 h-8 text-sand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Définissez vos critères</h3>
              <p className="text-gray-600 min-h-[4rem]">
                Précisez vos préférences en termes de mission, durée et taux journalier souhaité.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sand-200 transition-colors">
                <Gift className="w-8 h-8 text-sand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Recevez des opportunités</h3>
              <p className="text-gray-600 min-h-[4rem]">
                Découvrez des missions parfaitement adaptées à votre profil avec un accompagnement personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            FAQ - Sendu Talent
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="importance-profil" className="bg-sand-50 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-sand-500">
                  Pourquoi est-il important de bien compléter votre profil sur Sendu Talent ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <p>Nous vous rappelons l'importance de soigner l'enregistrement de votre profil et la rédaction de votre CV sur <strong>Sendu Talent</strong>.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">1️⃣ Visibilité accrue</h4>
                      <p>Un <strong>profil complet et bien rédigé</strong> augmente considérablement vos chances d'être remarqué par nos entreprises partenaires. Un <strong>CV détaillé</strong>, mettant en avant vos compétences techniques, expériences et réalisations, aide les clients à mieux comprendre votre expertise et votre valeur ajoutée.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">2️⃣ Crédibilité professionnelle</h4>
                      <p>Votre <strong>profil est votre vitrine</strong> sur la plateforme. Il reflète votre sérieux, votre professionnalisme et votre engagement. En renseignant des informations <strong>claires, précises et actualisées</strong>, vous démontrez que vous êtes un candidat fiable et compétent.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">3️⃣ Mise en valeur de vos compétences</h4>
                      <p>En enregistrant votre profil, vous avez l'opportunité de <strong>mettre en avant</strong> vos spécialités : développement web, data science, cybersécurité, UX/UI design, etc. Décrivez vos <strong>connaissances techniques, certifications et projets réussis</strong> pour capter l'attention des clients.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">4️⃣ Se démarquer des autres freelances</h4>
                      <p>Un <strong>profil unique et personnalisé</strong> vous permet de <strong>sortir du lot</strong>. Mettez en avant vos réalisations, votre capacité à résoudre des problèmes complexes, vos compétences linguistiques ou toute autre spécificité qui pourrait séduire un client.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5️⃣ Développement professionnel</h4>
                      <p>Sendu Talent n'est pas seulement une plateforme de mise en relation, c'est aussi un <strong>accélérateur de carrière</strong>. Décrivez vos <strong>objectifs professionnels et aspirations</strong>, et attirez des missions qui correspondent à votre vision.</p>
                    </div>
                    
                    <div className="bg-sand-100 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-sand-500" />
                        <span><strong>Conseil :</strong> Prenez le temps d'optimiser votre présentation, ajoutez un portfolio et une vidéo de présentation. Cela augmentera <strong>considérablement vos chances</strong> d'obtenir des missions de qualité !</span>
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="postuler-sans-inscription" className="bg-sand-50 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-sand-500">
                  Puis-je postuler à une mission sans être inscrit sur Sendu Talent ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <p>Oui, vous pouvez proposer votre candidature même si vous n'êtes pas encore enregistré sur Sendu Talent.</p>
                  
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span>Si votre <strong>profil est retenu</strong> après notre sélection, nous vous accompagnerons dans le processus d'inscription et d'intégration.</span>
                    </p>
                    
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span>Une fois votre <strong>première mission gagnée</strong>, nous vous guiderons dans la formalisation de votre statut et les démarches nécessaires pour exercer en toute sécurité.</span>
                    </p>
                  </div>
                  
                  <div className="bg-sand-100 p-4 rounded-lg">
                    <p className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-sand-500" />
                      <span><strong>Sendu Talent vous aide à structurer votre activité, du statut administratif à la facturation.</strong></span>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="processus-selection" className="bg-sand-50 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-sand-500">
                  Quel est le processus de sélection ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-sand-500" />
                      1. Complétez votre profil
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ajoutez vos <strong>compétences technologiques</strong> et domaines d'expertise.</li>
                      <li>Décrivez vos expériences professionnelles de manière détaillée.</li>
                      <li>Téléchargez un CV à jour et, si possible, une <strong>vidéo de présentation</strong> pour capter l'attention.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-sand-500" />
                      2. Entretien avec notre équipe
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Un échange téléphonique ou visio sera organisé avec notre équipe.</li>
                      <li>Nous discuterons de <strong>votre parcours, de vos compétences et préférences</strong> en matière de missions.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      3. Tests techniques et validation
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Des <strong>tests techniques</strong> peuvent être demandés en fonction de votre domaine d'expertise.</li>
                      <li>Notre équipe analyse ensuite votre <strong>profil en fonction des demandes des clients</strong>.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-sand-500" />
                      4. Processus évolutif
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Selon le volume de candidatures et les besoins des entreprises, le processus de sélection peut s'adapter.</li>
                      <li>Nous vous tenons informé à chaque étape !</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="visibilite-profil" className="bg-sand-50 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-sand-500">
                  Mon profil est-il visible par tout le monde ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <p className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-sand-500" />
                    <strong>Non.</strong> Votre profil est <strong>anonymisé</strong> sur la plateforme.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span>Seules <strong>vos compétences clés et expériences</strong> sont visibles par les entreprises.</span>
                    </p>
                    
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span><strong>Votre identité complète</strong> n'est révélée qu'après votre <strong>sélection pour une mission et votre accord</strong>.</span>
                    </p>
                    
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span>Les clients ne peuvent voir votre CV complet <strong>que si vous acceptez de postuler à une mission proposée</strong>.</span>
                    </p>
                  </div>
                  
                  <div className="bg-sand-100 p-4 rounded-lg">
                    <p className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-sand-500" />
                      <span><strong>Confidentialité garantie !</strong></span>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delais-paiement" className="bg-sand-50 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-sand-500">
                  Quels sont les délais de paiement de mes prestations ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <p className="font-semibold">💰 <strong>Sendu Talent vous paie chaque mois</strong>, à réception de votre <strong>compte rendu d'activité signé par le client et de votre facture</strong>.</p>
                  
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span><strong>Paiements sécurisés</strong> et garantis par Sendu Talent.</span>
                    </p>
                    
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sand-500" />
                      <span><strong>Pas d'attente excessive</strong>, nous nous assurons que vous soyez réglé dans les délais convenus avec l'entreprise.</span>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="niveau-experience" className="bg-sand-50 rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold hover:text-sand-500">
                  Quel niveau d'expérience est requis pour rejoindre Sendu Talent ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <p className="font-semibold">📢 <strong>Sendu Talent est ouvert à tous les freelances IT, du junior au senior !</strong></p>
                  
                  <p className="bg-sand-100 p-4 rounded-lg flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-sand-500" />
                    <span><strong>Que vous soyez débutant ou expert</strong>, vous pouvez postuler.</span>
                  </p>
                  
                  <div>
                    <p className="font-semibold mb-2">👉 Facteurs clés pour être retenu :</p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sand-500" />
                        <span><strong>Compétences et expérience détaillées</strong></span>
                      </p>
                      
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sand-500" />
                        <span><strong>Attitude et professionnalisme</strong></span>
                      </p>
                      
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sand-500" />
                        <span><strong>Capacité d'adaptation et rigueur</strong></span>
                      </p>
                    </div>
                  </div>
                  
                  <p>Nous cherchons des talents motivés, engagés et prêts à travailler sur des missions <strong>de qualité</strong>.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FreelancesPage;
