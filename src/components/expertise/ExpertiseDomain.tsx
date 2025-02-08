
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ExpertiseDomainItem {
  text: string;
  icon?: React.ReactNode;
}

interface ExpertiseDomainProps {
  title: string;
  icon: React.ReactNode;
  items: (string | { text: string; icon: React.ReactNode })[];
  index: number;
}

const ExpertiseDomain = ({ title, icon, items, index }: ExpertiseDomainProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-sand-700/30 hover:border-sand-500/50 transition-colors"
    >
      <div className="text-center">
        {icon}
        <h3 className="text-xl font-semibold text-sand-100 mb-6">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, itemIndex) => (
          <li key={typeof item === 'string' ? item : item.text} className="text-sand-300 flex items-center">
            {typeof item === 'string' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-sand-500 mr-3"></div>
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
  );
};

export default ExpertiseDomain;
