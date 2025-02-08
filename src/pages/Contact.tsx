
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Building2, UserRound, Building, MapPin, Phone } from "lucide-react";
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

type FreelanceFormData = z.infer<typeof freelanceSchema>;
type AgencyFormData = z.infer<typeof agencySchema>;
type EnterpriseFormData = z.infer<typeof enterpriseSchema>;

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

  const form = useForm<FreelanceFormData | AgencyFormData | EnterpriseFormData>({
    resolver: zodResolver(getFormSchema()),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: FreelanceFormData | AgencyFormData | EnterpriseFormData) => {
    console.log(values);
    toast({
      title: "Formulaire envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-geometric-pattern bg-fixed bg-cover bg-center bg-sand-50/90 bg-blend-overlay">
      <MainNavbar />
      
      <div className="relative h-[300px] bg-sand-900 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/b2ac4bb8-3988-4e2e-9caa-c7bf13c65010.png')",
            opacity: 0.3 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-900/50 to-sand-900/80" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-sand-100 max-w-2xl">
            Nous sommes là pour vous accompagner dans vos projets digitaux
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {userTypes.map(({ id, title, icon: Icon, description }) => (
            <Card
              key={id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                userType === id 
                  ? "border-2 border-sand-500 bg-sand-50" 
                  : "border border-sand-200 hover:border-sand-300"
              }`}
              onClick={() => {
                setUserType(id as UserType);
                form.reset();
              }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <Icon className="w-12 h-12 text-sand-500" />
                <h3 className="text-xl font-semibold text-sand-900">{title}</h3>
                <p className="text-sand-600">{description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="max-w-2xl">
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
                      name={"expertise" as keyof FreelanceFormData}
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
                      name={"experience" as keyof FreelanceFormData}
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
                    name={"company" as keyof (AgencyFormData | EnterpriseFormData)}
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
                    name={"consultantsCount" as keyof AgencyFormData}
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
                    name={"projectDescription" as keyof EnterpriseFormData}
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

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
              <div className="flex items-center gap-3 text-sand-900">
                <MapPin className="w-5 h-5 text-sand-500" />
                <p>Fann Résidence x Mermoz</p>
              </div>
              <div className="flex items-center gap-3 text-sand-900">
                <Phone className="w-5 h-5 text-sand-500" />
                <p>+221 33 800 00 88</p>
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0674991673164!2d-17.4816223!3d14.7074463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4dc11c8e96bd025d%3A0x89bc766588c8afb9!2sFann%20R%C3%A9sidence%2C%20Dakar%2C%20Senegal!5e0!3m2!1sen!2sfr!4v1710876469811!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
