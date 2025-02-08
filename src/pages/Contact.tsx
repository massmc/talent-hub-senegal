
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Building2, UserRound, Building } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type UserType = "freelance" | "agency" | "enterprise";

const baseSchema = {
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
};

const freelanceSchema = z.object({
  ...baseSchema,
  expertise: z.string().min(2, "Veuillez préciser votre expertise"),
  experience: z.string().min(1, "Veuillez indiquer vos années d'expérience"),
  message: z.string().optional(),
});

const agencySchema = z.object({
  ...baseSchema,
  company: z.string().min(2, "Nom de l'entreprise requis"),
  consultantsCount: z.string().min(1, "Nombre de consultants requis"),
  message: z.string().optional(),
});

const enterpriseSchema = z.object({
  ...baseSchema,
  company: z.string().min(2, "Nom de l'entreprise requis"),
  projectDescription: z.string().min(10, "Description du projet requise"),
  message: z.string().optional(),
});

const userTypes = [
  {
    id: "freelance",
    title: "Freelance",
    icon: UserRound,
    description: "Vous êtes un professionnel indépendant",
  },
  {
    id: "agency",
    title: "Agence / ESN",
    icon: Building2,
    description: "Vous représentez une agence ou une ESN",
  },
  {
    id: "enterprise",
    title: "Entreprise",
    icon: Building,
    description: "Vous cherchez des talents pour votre entreprise",
  },
];

const ContactPage = () => {
  const [userType, setUserType] = useState<UserType>("freelance");
  const { toast } = useToast();

  const getFormSchema = () => {
    switch (userType) {
      case "freelance":
        return freelanceSchema;
      case "agency":
        return agencySchema;
      case "enterprise":
        return enterpriseSchema;
    }
  };

  const form = useForm({
    resolver: zodResolver(getFormSchema()),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof freelanceSchema> | z.infer<typeof agencySchema> | z.infer<typeof enterpriseSchema>) => {
    console.log(data);
    toast({
      title: "Formulaire envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-geometric-pattern bg-fixed bg-cover bg-center bg-sand-50/90 bg-blend-overlay">
      <MainNavbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-sand-900 text-center mb-8">
          Contactez-nous
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {userTypes.map(({ id, title, icon: Icon, description }) => (
            <Card
              key={id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                userType === id 
                  ? "border-2 border-sand-500 bg-sand-50" 
                  : "border border-sand-200 hover:border-sand-300"
              }`}
              onClick={() => setUserType(id as UserType)}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <Icon className="w-12 h-12 text-sand-500" />
                <h3 className="text-xl font-semibold text-sand-900">{title}</h3>
                <p className="text-sand-600">{description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="+221 xx xxx xx xx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {userType === "freelance" && (
                <>
                  <FormField
                    control={form.control}
                    name="expertise"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expertise principale</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Développeur Full-Stack" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Années d'expérience</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Ex: 5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {(userType === "agency" || userType === "enterprise") && (
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de l'entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de votre entreprise" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {userType === "agency" && (
                <FormField
                  control={form.control}
                  name="consultantsCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de consultants</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {userType === "enterprise" && (
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description du projet</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez brièvement votre projet et vos besoins"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Votre message"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-sand-500 hover:bg-sand-600 text-white"
                size="lg"
              >
                Envoyer
              </Button>
            </form>
          </Form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
