import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="py-20 relative">
      {/* Graffiti background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 to-sand-100 overflow-hidden">
        {/* Graffiti circles */}
        <div className="absolute -right-24 top-0 w-96 h-96 bg-ochre-400/30 rounded-full blur-3xl" />
        <div className="absolute left-12 top-24 w-72 h-72 bg-terracotta-400/30 rounded-full blur-3xl" />
        <div className="absolute right-24 bottom-12 w-80 h-80 bg-sand-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sand-900 text-center mb-12">
            Questions fréquentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/90 backdrop-blur-sm rounded-lg border border-sand-200 shadow-sm hover:shadow-md transition-all duration-300">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Comment trouver un talent sur la plateforme ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6 space-y-2">
                <p>Rien de plus simple ! Vous pouvez :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Explorer notre <strong>marketplace</strong> et sélectionner les profils qui correspondent à vos besoins.</li>
                  <li>Nous confier votre recherche et recevoir une sélection des <strong>meilleurs talents</strong> adaptée à votre projet.</li>
                </ul>
                <p>Une fois votre choix fait, vous pouvez contacter le talent directement via la plateforme et contractualiser en ligne.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/90 backdrop-blur-sm rounded-lg border border-sand-200 shadow-sm hover:shadow-md transition-all duration-300">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Quel type de profils proposez-vous ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                <p className="mb-2">Sendu Talent propose une large gamme de professionnels qualifiés dans les domaines suivants :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Développement web et mobile</strong></li>
                  <li><strong>Design UX/UI</strong></li>
                  <li><strong>Marketing digital & Growth Hacking</strong></li>
                  <li><strong>Gestion de projet & Consulting</strong></li>
                  <li><strong>Data Science & Intelligence Artificielle</strong></li>
                  <li><strong>Cyber-sécurité & Cloud</strong></li>
                </ul>
                <p className="mt-2">…et bien d'autres compétences en fonction de vos besoins.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Existe-t-il une période d'essai ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                Oui, nous pouvons proposer une <strong>période d'essai définie contractuellement</strong> afin que vous puissiez valider la collaboration avec le talent sélectionné avant un engagement à long terme.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Quelle est la durée du préavis pour mettre fin à une mission ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                La durée du préavis dépend des termes du <strong>contrat établi entre vous et le talent</strong>. Nous proposons une flexibilité adaptée aux besoins de chaque projet, avec des conditions claires définies en amont.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Quel type de contrat proposez-vous ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                Nous mettons en place des <strong>Contrats Cadres</strong> sécurisés et conformes à la législation. Chaque mission est ensuite formalisée par un <strong>avenant spécifique</strong>, garantissant la transparence et la sécurité juridique pour toutes les parties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Est-il possible de contractualiser directement avec le talent ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                Non, pour garantir la sécurité et la conformité des missions, <strong>toutes les contractualisations passent par Sendu Talent</strong>. Cela vous permet de bénéficier de notre <strong>gestion administrative simplifiée</strong>, d'un cadre juridique clair et d'un suivi opérationnel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Quelle est la commission de Sendu Talent ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Aucun abonnement, aucun coût pour le Talent.</strong></li>
                  <li><strong>La commission est uniquement à la charge du client et proportionnelle au Tarif Journalier du Talent.</strong></li>
                  <li><strong>Pas de frais cachés : tout est transparent !</strong></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Notre démarche RSE
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6 space-y-4">
                <p>Chez <strong>Sendu Talent</strong>, nous nous engageons à soutenir l'innovation et le développement des talents en Afrique.</p>
                <div className="space-y-2">
                  <p>✅ <strong>Incubation de startups locales</strong> : Nous accompagnons des <strong>jeunes entreprises technologiques</strong> et digitales dans leur croissance.</p>
                  <p>✅ <strong>Implication des talents dans notre communauté</strong> : Chaque talent engagé et impliqué peut bénéficier d'un <strong>modèle participatif</strong> et devenir acteur du développement de la plateforme.</p>
                </div>
                <p>Avec Sendu Talent, vous ne recrutez pas seulement un talent, <strong>vous contribuez à un écosystème durable et innovant !</strong> 🚀</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
