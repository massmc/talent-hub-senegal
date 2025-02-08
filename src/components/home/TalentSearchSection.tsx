
import { motion } from "framer-motion";
import { Search, Shield, Euro } from "lucide-react";

const TalentSearchSection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <div className="group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 bg-sand-900/50 p-8 rounded-2xl backdrop-blur-sm border border-sand-700/30 hover:border-sand-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100 flex items-center gap-3">
                <Search className="w-8 h-8 text-sand-300" />
                Comment trouver un Talent sur Sendu Talent ?
              </h2>
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
              className="order-1 md:order-2 relative flex justify-center items-center"
            >
              <img 
                src="/lovable-uploads/dc4dfc1b-ab05-4198-a47c-35e896b99361.png"
                alt="Illustration de recherche de talents"
                className="w-3/4 md:w-2/3 h-auto object-contain"
              />
            </motion.div>
          </div>

          <div className="group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1 relative flex justify-center items-center"
            >
              <img 
                src="/lovable-uploads/6c48325c-97f5-486f-bfef-6443e28d190e.png"
                alt="Illustration de sécurité et conformité"
                className="w-3/4 md:w-4/5 h-auto object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2 bg-sand-900/50 p-8 rounded-2xl backdrop-blur-sm border border-sand-700/30 hover:border-sand-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100 flex items-center gap-3">
                <Shield className="w-8 h-8 text-sand-300" />
                Sécurité et conformité
              </h2>
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

          <div className="group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 bg-sand-900/50 p-8 rounded-2xl backdrop-blur-sm border border-sand-700/30 hover:border-sand-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sand-100 flex items-center gap-3">
                <Euro className="w-8 h-8 text-sand-300" />
                Combien ça coûte ?
              </h2>
              <div className="space-y-4">
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
              <p className="text-sand-300 mt-4">
                Inscrivez-vous, soumettez votre besoin et recevez gratuitement les <span className="text-sand-100">3 meilleurs profils</span> sélectionnés pour vous. Notre commission, transparente et proportionnelle au Tarif Journalier du Talent, est uniquement à la charge du client en cas de mission validée.
              </p>
              <p className="text-sand-300 mt-4">
                Avec <span className="text-sand-100">Sendu Talent</span>, aucun frais caché, tout est clair et équitable. 🚀
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative flex justify-center items-center"
            >
              <img 
                src="/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png"
                alt="Illustration de tarification"
                className="w-3/4 md:w-2/3 h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentSearchSection;
