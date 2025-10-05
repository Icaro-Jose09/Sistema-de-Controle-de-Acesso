import { useState } from "react";
import { useLocation } from "wouter";
import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";
import { useToast } from "@/hooks/use-toast";
import type { LoginUsuario } from "@shared/schema";

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: LoginUsuario) => {
    setIsLoading(true);
    
    try {
      console.log('Login:', data);
      
      // Simulação de login bem-sucedido
      setTimeout(() => {
        // Armazenar dados do usuário
        const usuarioMock = {
          id: "1",
          nome: "Usuário Teste",
          nomeUsuario: data.nomeUsuario,
          email: data.email,
        };
        
        localStorage.setItem("usuario", JSON.stringify(usuarioMock));
        
        toast({
          title: "Login realizado!",
          description: "Bem-vindo ao sistema.",
        });
        
        setLocation("/home");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
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
