import { useState } from "react";
import { useLocation } from "wouter";
import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { LoginUsuario, Usuario } from "@shared/schema";

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: LoginUsuario) => {
    setIsLoading(true);
    
    try {
      const usuario = await apiRequest<Usuario>("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      localStorage.setItem("usuario", JSON.stringify(usuario));
      
      toast({
        title: "Login realizado!",
        description: "Bem-vindo ao sistema.",
      });
      
      setLocation("/home");
    } catch (error: any) {
      toast({
        title: "Erro ao fazer login",
        description: error.message || "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Bem-vindo"
      subtitle="Faça login para acessar o sistema"
    >
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </AuthLayout>
  );
}
