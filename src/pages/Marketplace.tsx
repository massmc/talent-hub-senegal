
import { MainNavbar } from "@/components/navigation/MainNavbar";
import SearchSection from "@/components/marketplace/SearchSection";
import { FiltersProvider } from "@/components/marketplace/FiltersContext";

const MarketplacePage = () => {
  return (
    <div className="min-h-screen bg-geometric-pattern bg-fixed bg-cover bg-center bg-sand-50/90 bg-blend-overlay">
      <MainNavbar />
      
      <div className="relative h-[300px] bg-sand-900 mb-8 md:mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png')",
            opacity: 0.3 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900/50 to-sand-900/80" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🌍 Découvrez les meilleurs talents IT sur Sendu Talent
          </h1>
          <p className="text-lg md:text-xl text-sand-100 max-w-3xl">
            🔍 Trouvez le freelance idéal grâce à nos filtres avancés et une présentation claire des profils
          </p>
        </div>
      </div>

      <FiltersProvider>
        <main className="container mx-auto px-4 pb-16">
          <SearchSection />
        </main>
      </FiltersProvider>
    </div>
  );
};

export default MarketplacePage;
