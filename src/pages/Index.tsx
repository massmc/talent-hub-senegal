
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Expertise from "@/components/expertise/Expertise";

const menuItems = [
  "Contactez-nous",
  "Entreprises",
  "Agences / ESN",
  "Freelances",
  "Marketplace",
  "Blog"
];

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-sand-900">
      <Navbar menuItems={menuItems} isMobile={isMobile} />
      <Hero />
      <About />
      <Expertise />
    </div>
  );
};

export default Index;
