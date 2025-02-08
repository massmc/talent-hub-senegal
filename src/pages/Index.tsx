
import MainNavbar from "@/components/navigation/MainNavbar";
import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import TalentVerificationSection from "@/components/home/TalentVerificationSection";
import TalentSearchSection from "@/components/home/TalentSearchSection";
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
      <Footer />
    </div>
  );
};

export default Index;

