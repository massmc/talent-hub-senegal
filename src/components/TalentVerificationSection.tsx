
import { motion } from "framer-motion";
import { CheckCircle, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sand-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-sand-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sand-900 mb-2">Processus de vérification rigoureux</h3>
                <p className="text-sand-700">
                  Nos Talent Managers ont doublement vérifié le niveau de compétences techniques, les références, 
                  les motivations et, le moment venu, de l'intérêt pour votre mission.
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/bce8db6b-a464-4f38-b94a-86d3c7ee062c.png"
              alt="Liste de vérification avec stylo"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-sand-200"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-sand-100 rounded-lg">
              <FileCheck className="w-6 h-6 text-sand-500" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sand-900 mb-3">Comment démarrer un projet ?</h3>
              <p className="text-sand-700 text-lg">
                La plateforme vous permet de trouver les meilleurs talents malgaches au sein de notre communauté IT, 
                ou de nous confier vos recherches ! Nous pourrons ensuite contractualiser en ligne et suivre 
                l'ensemble de vos projets.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-sand-500 hover:bg-sand-600 text-white px-8 py-3">
              Démarrer un projet
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TalentVerificationSection;
