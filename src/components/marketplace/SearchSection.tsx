
import { Search, MapPin, Star, Languages, Euro, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilters } from "./FiltersContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import FreelancerGrid from "./FreelancerGrid";

const SearchSection = () => {
  const {
    search,
    setSearch,
    experienceLevel,
    setExperienceLevel,
    availability,
    setAvailability,
    location,
    setLocation,
    workType,
    setWorkType,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
  } = useFilters();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Rechercher par compétence, technologie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 py-6 bg-white/80 backdrop-blur-sm border-sand-200"
          />
        </div>
        
        <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:w-auto w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filtres avancés
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-lg bg-white">
            <SheetHeader>
              <SheetTitle>Filtres de recherche</SheetTitle>
            </SheetHeader>
            
            <div className="py-6 space-y-6">
              <div className="space-y-4">
                <Label>Niveau d'expérience</Label>
                <Select
                  value={experienceLevel || ""}
                  onValueChange={(value: any) => setExperienceLevel(value || null)}
                >
                  <SelectTrigger className="bg-white border-sand-200">
                    <SelectValue placeholder="Sélectionnez un niveau" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-sand-200 shadow-lg">
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="confirmed">Confirmé</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Disponibilité</Label>
                <Select
                  value={availability || ""}
                  onValueChange={(value: any) => setAvailability(value || null)}
                >
                  <SelectTrigger className="bg-white border-sand-200">
                    <SelectValue placeholder="Sélectionnez une disponibilité" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-sand-200 shadow-lg">
                    <SelectItem value="immediate">Disponible immédiatement</SelectItem>
                    <SelectItem value="one_month">Sous 1 mois</SelectItem>
                    <SelectItem value="watching">En veille</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Type de travail</Label>
                <Select
                  value={workType || ""}
                  onValueChange={(value: any) => setWorkType(value || null)}
                >
                  <SelectTrigger className="bg-white border-sand-200">
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-sand-200 shadow-lg">
                    <SelectItem value="remote">Télétravail</SelectItem>
                    <SelectItem value="onsite">Présentiel</SelectItem>
                    <SelectItem value="hybrid">Hybride</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Localisation</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Ville ou pays..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 bg-white border-sand-200"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Tarif journalier (€)</Label>
                <div className="pt-2 bg-white p-4 rounded-lg border border-sand-200">
                  <Slider
                    defaultValue={[priceRange[0], priceRange[1]]}
                    max={2000}
                    min={0}
                    step={50}
                    onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  />
                  <div className="flex justify-between mt-2 text-sm text-sand-600 font-medium">
                    <span>{priceRange[0]}€</span>
                    <span>{priceRange[1]}€</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Note minimale</Label>
                <Select
                  value={minRating.toString()}
                  onValueChange={(value) => setMinRating(Number(value))}
                >
                  <SelectTrigger className="bg-white border-sand-200">
                    <SelectValue placeholder="Sélectionnez une note minimale" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-sand-200 shadow-lg">
                    <SelectItem value="0">Toutes les notes</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ et plus</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ et plus</SelectItem>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ uniquement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <FreelancerGrid />
    </div>
  );
};

export default SearchSection;
