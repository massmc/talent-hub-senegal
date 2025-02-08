
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhySection = () => {
  return (
    <section className="relative py-12 md:py-20 bg-sand-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-sand-900">Pourquoi SenduTalent?</h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-black text-sm md:text-base">
                SenduTalent est une <span className="font-semibold">plateforme en ligne</span> qui permet aux{" "}
                <span className="font-semibold">entreprises</span> de{" "}
                <span className="font-semibold">trouver et de travailler</span> avec des 
                freelancers et des consultants du digital basés au Sénégal.
              </p>
              <p className="text-black text-sm md:text-base">
                En utilisant SenduTalent, vous pouvez accéder à un large éventail de talents tech 
                offshore au Sénégal et trouver les professionnels qui répondent le mieux à vos besoins 
                pour votre projet. La plateforme permet également de gérer les projets et les 
                communications avec les freelancers et consultants de manière efficace.
              </p>
              <div className="pt-4">
                <Button className="bg-sand-500 hover:bg-sand-600 text-white px-4 md:px-8 w-full sm:w-auto">
                  Découvrir les talents
                </Button>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <img 
              src="/lovable-uploads/c68d2c9d-9e23-48e5-90d9-76e5569af184.png"
              alt="Professional consultant working on a digital project"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-[url('/lovable-uploads/c17a5fb6-c6af-4a4f-b5e9-b977b7ca9108.png')] opacity-60"></div>
    </section>
  );
};

export default WhySection;
