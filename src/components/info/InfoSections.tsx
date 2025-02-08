
import { motion } from "framer-motion";
import { Search, Shield, Briefcase, CheckCircle } from "lucide-react";

export const InfoSections = () => {
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
              className="order-1 md:order-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sand-500/20 to-sand-500/10 rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Recherche de talents en ligne"
                  className="w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Collaboration d'équipe"
                  className="w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>

          <div className="group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-sand-500/20 to-sand-500/10 rounded-2xl" />
              <img 
                src="/lovable-uploads/c68d2c9d-9e23-48e5-90d9-76e5569af184.png"
                alt="Sécurité et conformité"
                className="w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 bg-sand-900/50 p-8 rounded-2xl backdrop-blur-sm border border-sand-700/30 hover:border-sand-500/50 transition-all duration-300"
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
                    <span className="text-sand-100 font-semibold">Protection juridique :</span> Notre contrat cadre vous protège contre le prêt illicite de main-d'œuvre, le débauchage et la requalification.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
