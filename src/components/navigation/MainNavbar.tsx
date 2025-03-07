
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Agences / ESN", path: "/agences" },
  { label: "Freelances", path: "/freelances" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "Contact", path: "/contact" }
];

const MainNavbar = () => {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-sand-700/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold text-sand-100">
              SenduTalent
            </Link>
          </div>
          
          <button 
            className="md:hidden text-sand-300 hover:text-sand-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sand-300 hover:text-sand-100 transition-colors ${
                  location.pathname === item.path ? "text-sand-100" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/95 py-4 md:hidden">
              <div className="container mx-auto px-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block text-sand-300 hover:text-sand-100 transition-colors py-2 ${
                      location.pathname === item.path ? "text-sand-100" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/inscription" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      className="w-full bg-black text-white border-2 border-white hover:bg-black/80"
                    >
                      Créer un compte
                    </Button>
                  </Link>
                  <Link to="/connexion" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-sand-500 hover:bg-sand-600 text-white">
                      Se connecter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            <Link to="/inscription">
              <Button 
                variant="outline" 
                className="bg-black text-white border-2 border-white hover:bg-black/80 text-sm md:text-base px-2 md:px-4"
              >
                {isMobile ? "Créer" : "Créer un compte"}
              </Button>
            </Link>
            <Link to="/connexion">
              <Button className="bg-sand-500 hover:bg-sand-600 text-white text-sm md:text-base px-2 md:px-4">
                {isMobile ? "Login" : "Se connecter"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
