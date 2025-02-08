
import { createContext, useContext, useState, ReactNode } from "react";

export type Skill = {
  id: string;
  name: string;
  category: string;
};

export type ExperienceLevel = "junior" | "confirmed" | "expert";
export type Availability = "immediate" | "one_month" | "watching";
export type WorkType = "remote" | "onsite" | "hybrid";
export type Language = "french" | "english" | "other";

type FiltersContextType = {
  search: string;
  setSearch: (search: string) => void;
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
  experienceLevel: ExperienceLevel | null;
  setExperienceLevel: (level: ExperienceLevel | null) => void;
  availability: Availability | null;
  setAvailability: (availability: Availability | null) => void;
  location: string;
  setLocation: (location: string) => void;
  workType: WorkType | null;
  setWorkType: (type: WorkType | null) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel | null>(null);
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [location, setLocation] = useState("");
  const [workType, setWorkType] = useState<WorkType | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([300, 1500]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [minRating, setMinRating] = useState(0);

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch,
        selectedSkills,
        setSelectedSkills,
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
        languages,
        setLanguages,
        minRating,
        setMinRating,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
