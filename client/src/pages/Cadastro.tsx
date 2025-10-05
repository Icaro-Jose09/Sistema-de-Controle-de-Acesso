import { useState } from "react";
import { useLocation } from "wouter";
import AuthLayout from "@/components/AuthLayout";
import CadastroForm from "@/components/CadastroForm";
import { useToast } from "@/hooks/use-toast";
import type { InsertUsuario } from "@shared/schema";

export default function Cadastro() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async (data: InsertUsuario) => {
    setIsLoading(true);
    
    try {
      console.log('Cadastro:', data);
      
      // Simulação de cadastro bem-sucedido
      setTimeout(() => {
        toast({
          title: "Cadastro realizado!",
          description: "Sua conta foi criada com sucesso. Faça login para continuar.",
        });
        
        setLocation("/login");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Erro ao cadastrar",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthLayout
      title="Criar Conta"
      subtitle="Preencha os dados para se cadastrar"
    >
      <CadastroForm onSubmit={handleCadastro} isLoading={isLoading} />
    </AuthLayout>
  );
}
