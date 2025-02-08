
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sand-900 text-center mb-12">
            Questions fréquentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Comment fonctionne SenduTalent ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                SenduTalent met en relation les entreprises avec les meilleurs talents freelances du Sénégal. Nous vérifions rigoureusement les compétences et l'expérience de chaque freelance pour garantir des collaborations de qualité.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Quels types de profils peut-on trouver ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                Nous proposons une large gamme de profils spécialisés : développeurs, designers UI/UX, experts marketing digital, chefs de projet et bien d'autres. Tous nos talents sont des professionnels expérimentés dans leur domaine.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Comment sont sélectionnés les freelances ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                Notre processus de sélection comprend plusieurs étapes : vérification des références, tests techniques, entretiens approfondis et évaluation continue des performances. Seuls les meilleurs talents sont admis dans notre réseau.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 backdrop-blur-sm rounded-lg border border-sand-200">
              <AccordionTrigger className="text-sand-900 hover:text-sand-500 hover:no-underline px-6">
                Quels sont les délais pour trouver un freelance ?
              </AccordionTrigger>
              <AccordionContent className="text-sand-700 px-6">
                En général, nous pouvons vous proposer des profils correspondants à vos besoins en moins de 48 heures. Le processus complet de recrutement peut prendre entre 1 et 2 semaines selon vos critères spécifiques.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
