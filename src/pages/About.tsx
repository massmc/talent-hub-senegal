
import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <MainNavbar />
      
      <div className="relative h-[300px] bg-sand-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1627913434632-2d49f7e48fff')",
            opacity: 0.5 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900/80 to-sand-900" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de Sendu Talent
          </h1>
          <p className="text-lg text-white max-w-2xl">
            Découvrez notre mission et notre engagement envers le développement des talents africains
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-sand-900 mb-4">Notre Mission</h2>
            <p className="text-sand-700">
              Sendu Talent est née d'une vision simple mais ambitieuse : créer des opportunités 
              significatives pour les talents africains dans le domaine du numérique tout en 
              fournissant aux entreprises l'accès à un vivier de professionnels hautement qualifiés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sand-900 mb-4">Notre Engagement</h2>
            <ul className="space-y-4 text-sand-700">
              <li className="flex items-start gap-3">
                <span className="text-ochre-500 font-bold">✦</span>
                <span>Promouvoir l'excellence technique et l'innovation en Afrique</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ochre-500 font-bold">✦</span>
                <span>Faciliter les connexions entre talents et opportunités internationales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ochre-500 font-bold">✦</span>
                <span>Assurer une expérience professionnelle enrichissante pour tous</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sand-900 mb-4">Pourquoi Nous Choisir ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-sand-900 mb-3">Pour les Talents</h3>
                <ul className="space-y-2 text-sand-700">
                  <li>• Accès à des projets internationaux</li>
                  <li>• Rémunération compétitive</li>
                  <li>• Développement professionnel</li>
                  <li>• Communauté dynamique</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-sand-900 mb-3">Pour les Entreprises</h3>
                <ul className="space-y-2 text-sand-700">
                  <li>• Talents vérifiés et qualifiés</li>
                  <li>• Processus de recrutement simplifié</li>
                  <li>• Support dédié</li>
                  <li>• Flexibilité contractuelle</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

