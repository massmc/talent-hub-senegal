
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Star } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

// Mock data with African and Senegalese names
const mockFreelancers: Freelancer[] = [
  {
    id: "1",
    name: "Amadou Diallo",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6",
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
    name: "Fatou Sow",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    specialization: "UX/UI Designer",
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
  {
    id: "3",
    name: "Moussa Ndiaye",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
    specialization: "DevOps Engineer",
    experience: {
      years: 6,
      level: "expert",
    },
    availability: "immediate",
    dailyRate: 600,
    rating: {
      average: 4.9,
      count: 15,
    },
  },
  {
    id: "4",
    name: "Aïcha Ba",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
    specialization: "Data Scientist",
    experience: {
      years: 4,
      level: "confirmed",
    },
    availability: "watching",
    dailyRate: 500,
    rating: {
      average: 4.6,
      count: 10,
    },
  },
  {
    id: "5",
    name: "Omar Sy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    specialization: "Développeur Backend Node.js",
    experience: {
      years: 7,
      level: "expert",
    },
    availability: "one_month",
    dailyRate: 580,
    rating: {
      average: 4.7,
      count: 18,
    },
  },
  {
    id: "6",
    name: "Mariama Touré",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    specialization: "Product Manager",
    experience: {
      years: 5,
      level: "expert",
    },
    availability: "immediate",
    dailyRate: 650,
    rating: {
      average: 4.8,
      count: 14,
    },
  },
  {
    id: "7",
    name: "Ibrahima Fall",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    specialization: "Cloud Architect",
    experience: {
      years: 8,
      level: "expert",
    },
    availability: "one_month",
    dailyRate: 700,
    rating: {
      average: 4.9,
      count: 20,
    },
  },
  {
    id: "8",
    name: "Aminata Diop",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    specialization: "Scrum Master",
    experience: {
      years: 4,
      level: "confirmed",
    },
    availability: "immediate",
    dailyRate: 520,
    rating: {
      average: 4.5,
      count: 9,
    },
  },
  {
    id: "9",
    name: "Modou Faye",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    specialization: "Security Expert",
    experience: {
      years: 6,
      level: "expert",
    },
    availability: "watching",
    dailyRate: 620,
    rating: {
      average: 4.7,
      count: 16,
    },
  },
  {
    id: "10",
    name: "Rama Seck",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
    specialization: "QA Engineer",
    experience: {
      years: 3,
      level: "confirmed",
    },
    availability: "immediate",
    dailyRate: 440,
    rating: {
      average: 4.4,
      count: 6,
    },
  },
  {
    id: "11",
    name: "Cheikh Ndoye",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    specialization: "Développeur Mobile",
    experience: {
      years: 4,
      level: "expert",
    },
    availability: "one_month",
    dailyRate: 680,
    rating: {
      average: 4.6,
      count: 11,
    },
  },
  {
    id: "12",
    name: "Adama Sarr",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    specialization: "AI Engineer",
    experience: {
      years: 5,
      level: "expert",
    },
    availability: "watching",
    dailyRate: 670,
    rating: {
      average: 4.8,
      count: 13,
    },
  },
  {
    id: "13",
    name: "Sokhna Gueye",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    specialization: "Frontend Developer",
    experience: {
      years: 3,
      level: "confirmed",
    },
    availability: "immediate",
    dailyRate: 480,
    rating: {
      average: 4.4,
      count: 7,
    },
  },
  {
    id: "14",
    name: "Ousmane Kane",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6",
    specialization: "Fullstack Developer",
    experience: {
      years: 7,
      level: "expert",
    },
    availability: "watching",
    dailyRate: 580,
    rating: {
      average: 4.7,
      count: 18,
    },
  },
  {
    id: "15",
    name: "Khady Diouf",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
    specialization: "DevOps Engineer",
    experience: {
      years: 5,
      level: "expert",
    },
    availability: "immediate",
    dailyRate: 650,
    rating: {
      average: 4.8,
      count: 14,
    },
  },
  {
    id: "16",
    name: "Babacar Mbaye",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    specialization: "Systems Architect",
    experience: {
      years: 7,
      level: "expert",
    },
    availability: "one_month",
    dailyRate: 690,
    rating: {
      average: 4.9,
      count: 19,
    },
  },
];

const FreelancerGrid = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Changed to 9 items per page

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

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockFreelancers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mockFreelancers.length / itemsPerPage);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((freelancer) => (
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

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={
                currentPage === totalPages ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default FreelancerGrid;
