
import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe, MapPin } from "lucide-react";

const agencies = [
  {
    name: "Tech Solutions Dakar",
    description: "Agence spécialisée dans le développement web et mobile, avec une expertise particulière dans les solutions e-commerce et les applications métier.",
    size: "15-30 employés",
    location: "Dakar, Sénégal",
    expertise: ["Développement Web", "Applications Mobiles", "E-commerce", "UI/UX Design"],
  },
  {
    name: "Digital Senegal",
    description: "Expert en transformation digitale et solutions cloud pour les entreprises sénégalaises. Nous accompagnons votre croissance numérique.",
    size: "30-50 employés",
    location: "Dakar, Sénégal",
    expertise: ["Cloud Computing", "Transformation Digitale", "Big Data", "IA"],
  },
  {
    name: "Creative Hub Africa",
    description: "Studio créatif spécialisé dans le design, le branding et le marketing digital. Nous donnons vie à vos projets avec une touche africaine unique.",
    size: "10-20 employés",
    location: "Saint-Louis, Sénégal",
    expertise: ["Design Graphique", "Marketing Digital", "Branding", "Social Media"],
  },
];

const features = [
  {
    icon: <Building2 className="w-12 h-12 text-sand-500" />,
    title: "Expertise Locale",
    description: "Des agences sénégalaises comprenant parfaitement les enjeux et la culture locale.",
  },
  {
    icon: <Users className="w-12 h-12 text-sand-500" />,
    title: "Équipes Qualifiées",
    description: "Des talents formés aux dernières technologies et méthodologies de travail.",
  },
  {
    icon: <Globe className="w-12 h-12 text-sand-500" />,
    title: "Vision Internationale",
    description: "Une approche globale avec des standards internationaux.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-sand-500" />,
    title: "Proximité",
    description: "Un accompagnement de proximité pour vos projets digitaux.",
  },
];

const AgencesPage = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sand-900 mb-6">
            Les Meilleures Agences Digitales du Sénégal
          </h1>
          <p className="text-xl text-sand-700 mb-8 max-w-3xl mx-auto">
            Découvrez notre sélection d'agences digitales de premier plan, offrant des services tech de qualité internationale
          </p>
          <Button className="bg-sand-500 hover:bg-sand-600 text-white">
            Contactez une agence
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sand-900 text-center mb-12">
            Pourquoi Choisir nos Agences Partenaires ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 african-card">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sand-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies List Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sand-900 text-center mb-12">
            Nos Agences Partenaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencies.map((agency, index) => (
              <Card key={index} className="african-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sand-800 mb-3">
                    {agency.name}
                  </h3>
                  <p className="text-sand-600 mb-4">
                    {agency.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-sand-500">
                      <Users className="inline-block w-4 h-4 mr-2" />
                      {agency.size}
                    </p>
                    <p className="text-sm text-sand-500">
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      {agency.location}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {agency.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-sand-100 text-sand-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-sand-500 hover:bg-sand-600 text-white">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgencesPage;
