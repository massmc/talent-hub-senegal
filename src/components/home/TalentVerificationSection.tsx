
import { motion } from "framer-motion";
import { CheckCircle, Users } from "lucide-react";

const TalentVerificationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-sand-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-sand-900 mb-4">Des talents vérifiés et évalués</h2>
          <p className="text-sand-700 text-lg max-w-2xl mx-auto">
            Un talent, freelance ou consultant, n'intègre la communauté qu'après une phase de sélection poussée
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-2"
          >
            <img 
              src="/lovable-uploads/0780ef47-9b37-4625-add8-77cf53c70476.png"
              alt="Illustration de feuilles avec checklist"
              className="w-full object-contain mix-blend-darken"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 md:order-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sand-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-sand-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sand-900 mb-2">Processus de vérification rigoureux</h3>
                <p className="text-sand-700">
                  Nos Talent Managers ont doublement vérifié le niveau de compétences techniques, les références, 
                  les motivations et, le moment venu, de l'intérêt pour votre projet, je reçois les devis et je fais mon choix.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-sand-100 rounded-lg">
                <Users className="w-6 h-6 text-sand-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sand-900 mb-2">Suivi de qualité</h3>
                <p className="text-sand-700">
                  Le suivi et la qualité des missions sont assurés par leurs soins jusqu'à terme du projet.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentVerificationSection;
