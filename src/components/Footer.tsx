
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-sand-300 py-12 border-t border-sand-700/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sand-100 font-semibold text-lg mb-4">SenduTalent</h3>
            <p className="text-sm">
              La plus grande communauté de freelances et consultants du digital basée au Sénégal.
            </p>
          </div>
          
          <div>
            <h3 className="text-sand-100 font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Développement Web</a>
              </li>
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Design UI/UX</a>
              </li>
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Marketing Digital</a>
              </li>
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Gestion de Projet</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sand-100 font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">À propos</a>
              </li>
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Carrières</a>
              </li>
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-sand-100 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sand-100 font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Restez informé de nos dernières actualités
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-sand-800/30 border border-sand-700/50 rounded px-3 py-2 text-sm flex-1 text-sand-100 placeholder:text-sand-400"
              />
              <Button className="bg-sand-500 hover:bg-sand-600 text-white">
                OK
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-sand-400 hover:text-sand-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-sand-400 hover:text-sand-100 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-sand-400 hover:text-sand-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-sand-400 hover:text-sand-100 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-sand-400 hover:text-sand-100 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-sand-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SenduTalent. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
