
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TalentVerificationSection from "@/components/TalentVerificationSection";

const menuItems = [
  "Contactez-nous",
  "Entreprises",
  "Agences / ESN",
  "Freelances",
  "Marketplace",
  "Blog"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-900">
      <NavBar menuItems={menuItems} />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <TalentVerificationSection />
    </div>
  );
};

export default Index;
