
import { motion } from "framer-motion";
import { Code, Database, FileStack, GraduationCap, Image, Network, Paintbrush, Palette, PenTool, Shield, Shapes, Smartphone, Target, Terminal, UserCheck } from "lucide-react";

const domains = [
  {
    title: "Projet & Coaching",
    icon: <Target className="w-8 h-8 text-[#ecbb7c] mb-4" />,
    items: [
      {
        text: "Chef de projet",
        icon: <Target className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Scrum master",
        icon: <UserCheck className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Product Owner",
        icon: <FileStack className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "AMOA/AMOE",
        icon: <Target className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Consulting",
        icon: <GraduationCap className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      }
    ]
  },
  {
    title: "Tech & Digital",
    icon: <Code className="w-8 h-8 text-[#ecbb7c] mb-4" />,
    items: [
      {
        text: "Développeur Front-End",
        icon: <Terminal className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Développeur back-End",
        icon: <Database className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Développeur Fullstack",
        icon: <Code className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Développeur Mobile",
        icon: <Smartphone className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Tech Lead",
        icon: <Network className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "DevOps",
        icon: <Shield className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Quality Assurance",
        icon: <Target className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      }
    ]
  },
  {
    title: "Design & Création",
    icon: <Palette className="w-8 h-8 text-[#ecbb7c] mb-4" />,
    items: [
      {
        text: "UI/UX Design",
        icon: <PenTool className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Design Graphique",
        icon: <Paintbrush className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Motion Design",
        icon: <Image className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Branding & Identité",
        icon: <Shapes className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Prototypage",
        icon: <PenTool className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      },
      {
        text: "Design System",
        icon: <Shapes className="w-4 h-4 text-[#ecbb7c] inline mr-2" />
      }
    ]
  }
];

const ExpertiseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#ecbb7c] mb-4">Nos domaines d'expertise</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez notre large éventail de services pour répondre à tous vos besoins digitaux
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-[#ecbb7c]/30 hover:border-[#ecbb7c]/50 transition-colors"
            >
              <div className="text-center">
                {domain.icon}
                <h3 className="text-xl font-semibold text-[#ecbb7c] mb-6">{domain.title}</h3>
              </div>
              <ul className="space-y-3">
                {domain.items.map((item, itemIndex) => (
                  <li key={typeof item === 'string' ? item : item.text} className="text-gray-300 flex items-center">
                    {typeof item === 'string' ? (
                      <>
                        <div className="w-2 h-2 rounded-full bg-[#ecbb7c] mr-3"></div>
                        {item}
                      </>
                    ) : (
                      <>
                        {item.icon}
                        {item.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/lovable-uploads/48acf00c-97fc-4c91-bc03-d57944e0f1b4.png" 
          alt="Motif géométrique" 
          className="w-full object-cover h-16"
        />
      </div>
    </section>
  );
};

export default ExpertiseSection;
