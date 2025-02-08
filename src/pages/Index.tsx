
import MainNavbar from "@/components/navigation/MainNavbar";
import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import TalentVerificationSection from "@/components/home/TalentVerificationSection";
import TalentSearchSection from "@/components/home/TalentSearchSection";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-900">
      <MainNavbar />
      <HeroSection />
      <WhySection />
      <ExpertiseSection />
      <TalentVerificationSection />
      <TalentSearchSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
