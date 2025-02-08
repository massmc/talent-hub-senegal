
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FreelancesPage from "./pages/Freelances";
import AgencesPage from "./pages/Agences";
import ContactPage from "./pages/Contact";
import MarketplacePage from "./pages/Marketplace";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/freelances" element={<FreelancesPage />} />
          <Route path="/agences" element={<AgencesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/inscription" element={<SignUp />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

