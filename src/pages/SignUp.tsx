
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainNavbar from "@/components/navigation/MainNavbar";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/Footer";

const baseSchema = {
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string(),
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
};

const freelanceSchema = z.object({
  ...baseSchema,
  profileType: z.literal("freelance"),
  expertise: z.string().min(2, "Veuillez indiquer votre domaine d'expertise"),
  yearsOfExperience: z.string().min(1, "Veuillez indiquer vos années d'expérience"),
});

const agencySchema = z.object({
  ...baseSchema,
  profileType: z.literal("agency"),
  companyName: z.string().min(2, "Le nom de l'entreprise est requis"),
  siret: z.string().min(14, "Le numéro SIRET doit contenir 14 chiffres"),
});

const clientSchema = z.object({
  ...baseSchema,
  profileType: z.literal("client"),
  company: z.string().optional(),
});

type FreelanceForm = z.infer<typeof freelanceSchema>;
type AgencyForm = z.infer<typeof agencySchema>;
type ClientForm = z.infer<typeof clientSchema>;

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("freelance");

  const freelanceForm = useForm<FreelanceForm>({
    resolver: zodResolver(freelanceSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      profileType: "freelance",
      firstName: "",
      lastName: "",
      expertise: "",
      yearsOfExperience: "",
    },
  });

  const agencyForm = useForm<AgencyForm>({
    resolver: zodResolver(agencySchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      profileType: "agency",
      firstName: "",
      lastName: "",
      companyName: "",
      siret: "",
    },
  });

  const clientForm = useForm<ClientForm>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      profileType: "client",
      firstName: "",
      lastName: "",
      company: "",
    },
  });

  const onSubmit = async (data: FreelanceForm | AgencyForm | ClientForm) => {
    setIsLoading(true);
    try {
      console.log("Form data:", data);
      
      toast({
        title: "Compte créé avec succès!",
        description: "Vous allez être redirigé vers la page de connexion.",
      });
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du compte.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = (formType: string) => {
    const commonFields = (form: any) => (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} className="text-white" />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} className="text-white" />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} className="text-white" />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" {...field} className="text-white" />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Confirmer le mot de passe</FormLabel>
              <FormControl>
                <Input type="password" {...field} className="text-white" />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
      </>
    );

    switch (formType) {
      case "freelance":
        return (
          <Form {...freelanceForm}>
            <form onSubmit={freelanceForm.handleSubmit(onSubmit)} className="space-y-6">
              {commonFields(freelanceForm)}
              <FormField
                control={freelanceForm.control}
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Domaine d'expertise</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: Développement web" {...field} className="text-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <FormField
                control={freelanceForm.control}
                name="yearsOfExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Années d'expérience</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} className="text-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-sand-500 hover:bg-sand-600 text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-sand-400 hover:border-sand-300 backdrop-blur-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    <span>Création en cours...</span>
                  </div>
                ) : (
                  "Créer mon compte freelance"
                )}
              </Button>
            </form>
          </Form>
        );

      case "agency":
        return (
          <Form {...agencyForm}>
            <form onSubmit={agencyForm.handleSubmit(onSubmit)} className="space-y-6">
              {commonFields(agencyForm)}
              <FormField
                control={agencyForm.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nom de l'entreprise</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre agence" {...field} className="text-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <FormField
                control={agencyForm.control}
                name="siret"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Numéro SIRET</FormLabel>
                    <FormControl>
                      <Input placeholder="12345678901234" maxLength={14} {...field} className="text-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-sand-500 hover:bg-sand-600 text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-sand-400 hover:border-sand-300 backdrop-blur-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    <span>Création en cours...</span>
                  </div>
                ) : (
                  "Créer mon compte agence"
                )}
              </Button>
            </form>
          </Form>
        );

      case "client":
        return (
          <Form {...clientForm}>
            <form onSubmit={clientForm.handleSubmit(onSubmit)} className="space-y-6">
              {commonFields(clientForm)}
              <FormField
                control={clientForm.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Entreprise (optionnel)</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre entreprise" {...field} className="text-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-sand-500 hover:bg-sand-600 text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-sand-400 hover:border-sand-300 backdrop-blur-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    <span>Création en cours...</span>
                  </div>
                ) : (
                  "Créer mon compte client"
                )}
              </Button>
            </form>
          </Form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-sand-900">
      <MainNavbar />
      
      <div 
        className="relative h-64 w-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/f1e77d49-33a3-4c32-9778-f57dbf50c71a.png")',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rejoignez SenduTalent
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Créez votre compte et accédez à une communauté de talents exceptionnels
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Créer un compte</CardTitle>
            <CardDescription className="text-center text-white">
              Sélectionnez votre profil et remplissez le formulaire correspondant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="freelance" className="text-white">Freelance</TabsTrigger>
                <TabsTrigger value="agency" className="text-white">Agence</TabsTrigger>
                <TabsTrigger value="client" className="text-white">Client</TabsTrigger>
              </TabsList>
              <TabsContent value="freelance">
                {renderForm("freelance")}
              </TabsContent>
              <TabsContent value="agency">
                {renderForm("agency")}
              </TabsContent>
              <TabsContent value="client">
                {renderForm("client")}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
