
import { motion } from "framer-motion";
import { UserCheck, Target, Users, CheckCircle, FileStack, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectStartGuide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-sand-200"
    >
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-sand-900 mb-3 text-center">Comment démarrer un projet sur Sendu Talent ?</h3>
        <p className="text-sand-700 text-lg">
          Sendu Talent vous permet de trouver les meilleurs talents pour vos besoins, en vous connectant directement avec des professionnels qualifiés au sein de notre communauté. Vous pouvez soit sélectionner les talents qui correspondent à vos critères, soit nous confier la recherche du profil idéal. Une fois votre choix fait, la contractualisation s'effectue en ligne en toute simplicité, et vous pouvez suivre l'avancement de votre projet en toute transparence via notre plateforme.
        </p>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-sand-900 text-center mb-12">
        Deux alternatives s'offrent à vous
      </h3>

      <div className="grid md:grid-cols-2 gap-8 relative">
        <div className="absolute top-8 bottom-8 left-1/2 w-px bg-sand-200 -translate-x-1/2 transform -rotate-6 hidden md:block" />
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <div className="inline-block p-4 bg-sand-50 rounded-full mb-4">
              <UserCheck className="w-8 h-8 text-sand-500" />
            </div>
            <h4 className="text-xl font-semibold text-sand-900 mb-2">A. Je suis autonome</h4>
            <p className="text-sand-700">Et je sélectionne la talent ou je constitue mon équipe moi-même.</p>
          </div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
            >
              <Target className="w-6 h-6 text-sand-500 mb-2" />
              <h5 className="font-semibold text-sand-900 mb-2">1. J'utilise la plateforme</h5>
              <p className="text-sand-700">pour trouver simplement et rapidement les talents correspondants à mes attentes.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
            >
              <Users className="w-6 h-6 text-sand-500 mb-2" />
              <h5 className="font-semibold text-sand-900 mb-2">2. Je suis mis en contact avec les talents</h5>
              <p className="text-sand-700">Avec mon Talent Manager, pour valider leur adéquation avec mon projet, je reçois les devis et je fais mon choix.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
            >
              <FileStack className="w-6 h-6 text-sand-500 mb-2" />
              <h5 className="font-semibold text-sand-900 mb-2">3. Je contractualise</h5>
              <p className="text-sand-700">Et je suis l'avancement de mon projet à l'aide des outils de suivi de la plateforme SenduTelent CRM.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <div className="inline-block p-4 bg-sand-50 rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-sand-500" />
            </div>
            <h4 className="text-xl font-semibold text-sand-900 mb-2">B. Je soumets mon brief</h4>
            <p className="text-sand-700">Et je suis accompagné dans ma recherche d'un talent ou la constitution de mon équipe.</p>
          </div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
            >
              <Target className="w-6 h-6 text-sand-500 mb-2" />
              <h5 className="font-semibold text-sand-900 mb-2">1. SenduTalent fait une sélection sur-mesure</h5>
              <p className="text-sand-700">Et me propose une short-list de Talents ou une équipe qui correspond à mes attentes.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-sand-500 mb-2" />
              <h5 className="font-semibold text-sand-900 mb-2">2. Je valide ma sélection</h5>
              <p className="text-sand-700">je fais les entretiens nécessaires avec le talent sélectionné et je valide le devis correspondant.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-4 bg-sand-50/50 rounded-lg hover:bg-sand-50 transition-colors"
            >
              <FileStack className="w-6 h-6 text-sand-500 mb-2" />
              <h5 className="font-semibold text-sand-900 mb-2">3. Je contractualise</h5>
              <p className="text-sand-700">Et je suis l'avancement de mon projet à l'aide des outils de suivi de la plateforme SenduTelent CRM.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <Button className="bg-sand-500 hover:bg-sand-600 text-white px-8 py-3">
          Démarrer un projet
        </Button>
      </div>
    </motion.div>
  );
};
