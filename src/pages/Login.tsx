
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
import MainNavbar from "@/components/navigation/MainNavbar";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      console.log("Form data:", data);
      
      toast({
        title: "Connexion réussie !",
        description: "Vous allez être redirigé vers la page d'accueil.",
      });
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Email ou mot de passe incorrect.",
      });
    } finally {
      setIsLoading(false);
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
            Connexion à SenduTalent
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Accédez à votre espace personnel
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Se connecter</CardTitle>
            <CardDescription className="text-center text-white">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

                <div className="flex justify-end">
                  <Link to="#" className="text-sand-400 hover:text-sand-300 text-sm">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sand-500 hover:bg-sand-600 text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-sand-400 hover:border-sand-300 backdrop-blur-sm"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                      <span>Connexion en cours...</span>
                    </div>
                  ) : (
                    "Se connecter"
                  )}
                </Button>

                <div className="text-center mt-4">
                  <p className="text-white">
                    Pas encore de compte ?{" "}
                    <Link to="/inscription" className="text-sand-400 hover:text-sand-300">
                      Créer un compte
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
