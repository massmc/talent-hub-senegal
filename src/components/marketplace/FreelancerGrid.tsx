
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Star } from "lucide-react";

interface Freelancer {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  experience: {
    years: number;
    level: "junior" | "confirmed" | "expert";
  };
  availability: "immediate" | "one_month" | "watching";
  dailyRate: number;
  rating: {
    average: number;
    count: number;
  };
}

// Mock data for development
const mockFreelancers: Freelancer[] = [
  {
    id: "1",
    name: "Sophie Martin",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    specialization: "Développeur Frontend React",
    experience: {
      years: 5,
      level: "expert",
    },
    availability: "immediate",
    dailyRate: 550,
    rating: {
      average: 4.8,
      count: 12,
    },
  },
  {
    id: "2",
    name: "Thomas Bernard",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    specialization: "Développeur Backend Node.js",
    experience: {
      years: 3,
      level: "confirmed",
    },
    availability: "one_month",
    dailyRate: 450,
    rating: {
      average: 4.5,
      count: 8,
    },
  },
  // Add more mock freelancers as needed
];

const FreelancerGrid = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const getAvailabilityBadge = (availability: Freelancer["availability"]) => {
    switch (availability) {
      case "immediate":
        return <Badge variant="success">Disponible immédiatement</Badge>;
      case "one_month":
        return <Badge variant="warning">Disponible sous 1 mois</Badge>;
      case "watching":
        return <Badge variant="secondary">En veille</Badge>;
    }
  };

  const getLevelBadge = (level: Freelancer["experience"]["level"]) => {
    switch (level) {
      case "junior":
        return <Badge variant="default">Junior</Badge>;
      case "confirmed":
        return <Badge variant="secondary">Confirmé</Badge>;
      case "expert":
        return <Badge variant="default">Expert</Badge>;
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.round(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {mockFreelancers.map((freelancer) => (
        <Card
          key={freelancer.id}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <CardHeader className="relative p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                  <AvatarFallback>
                    {freelancer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{freelancer.name}</h3>
                  <p className="text-sm text-sand-600">
                    {freelancer.specialization}
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(freelancer.id)}
                className="text-sand-500 hover:text-sand-600 transition-colors"
              >
                <Heart
                  className={`h-6 w-6 ${
                    favorites.includes(freelancer.id) ? "fill-sand-500" : ""
                  }`}
                />
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-4">
            <div className="flex flex-wrap gap-2">
              {getLevelBadge(freelancer.experience.level)}
              {getAvailabilityBadge(freelancer.availability)}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {renderStars(freelancer.rating.average)}
                <span className="text-sm text-sand-600 ml-2">
                  ({freelancer.rating.count} avis)
                </span>
              </div>
              <div className="text-lg font-semibold text-sand-900">
                {freelancer.dailyRate}€ / jour
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="text-sm text-sand-600">
                {freelancer.experience.years} ans d'expérience
              </div>
              <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <Mail className="h-5 w-5" />
                <span>Contacter</span>
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FreelancerGrid;
