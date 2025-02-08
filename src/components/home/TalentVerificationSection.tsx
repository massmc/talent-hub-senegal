
import { motion } from "framer-motion";
import { CheckCircle, Users } from "lucide-react";

const TalentVerificationSection = () => {
  return (
    <section className="py-8 md:py-12 bg-sand-50 relative overflow-hidden">
      {/* Pattern à droite */}
      <div className="absolute right-0 top-0 h-full w-24 hidden md:block">
        <img 
          src="/lovable-uploads/0f0462ae-75cb-4e4a-9c7d-f553a02b891c.png"
          alt="Motif décoratif"
          className="h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-sand-900 mb-2">Des talents vérifiés et évalués</h2>
          <p className="text-sand-700 text-base md:text-lg max-w-2xl mx-auto">
            Un talent, freelance ou consultant, n'intègre la communauté qu'après une phase de sélection poussée
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 md:order-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-sand-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-sand-500" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-sand-900 mb-2">Processus de vérification rigoureux</h3>
                <p className="text-sand-700 text-base">
                  Nos Talent Managers ont doublement vérifié le niveau de compétences techniques, les références, 
                  les motivations et, le moment venu, de l'intérêt pour votre projet, je reçois les devis et je fais mon choix.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-sand-100 rounded-lg">
                <Users className="w-6 h-6 text-sand-500" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-sand-900 mb-2">Suivi de qualité</h3>
                <p className="text-sand-700 text-base">
                  Le suivi et la qualité des missions sont assurés par leurs soins jusqu'à terme du projet.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-2"
          >
            <img 
              src="/lovable-uploads/0780ef47-9b37-4625-add8-77cf53c70476.png"
              alt="Illustration de feuilles avec checklist"
              className="w-full max-w-sm mx-auto object-contain mix-blend-darken"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentVerificationSection;
