import { useState } from "react";
import { useLocation } from "wouter";
import AuthLayout from "@/components/AuthLayout";
import CadastroForm from "@/components/CadastroForm";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertUsuario, Usuario } from "@shared/schema";

export default function Cadastro() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async (data: InsertUsuario) => {
    setIsLoading(true);
    
    try {
      await apiRequest<Usuario>("/api/usuarios", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      toast({
        title: "Cadastro realizado!",
        description: "Sua conta foi criada com sucesso. Faça login para continuar.",
      });
      
      setLocation("/login");
    } catch (error: any) {
      toast({
        title: "Erro ao cadastrar",
        description: error.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
