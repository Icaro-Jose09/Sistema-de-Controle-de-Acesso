import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUsuarioSchema, type InsertUsuario } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

interface CadastroFormProps {
  onSubmit: (data: InsertUsuario) => void;
  isLoading?: boolean;
}

export default function CadastroForm({ onSubmit, isLoading = false }: CadastroFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsertUsuario>({
    resolver: zodResolver(insertUsuarioSchema),
    defaultValues: {
      nome: "",
      nomeUsuario: "",
      email: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nome" data-testid="label-name">
          Nome Completo
        </Label>
        <Input
          id="nome"
          data-testid="input-name"
          placeholder="Digite seu nome completo"
          {...register("nome")}
          className={errors.nome ? "border-destructive" : ""}
        />
        {errors.nome && (
          <div className="flex items-center gap-1.5 text-destructive text-xs mt-1" data-testid="error-name">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{errors.nome.message}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="nomeUsuario" data-testid="label-username">
          Nome de Usuário
        </Label>
        <Input
          id="nomeUsuario"
          data-testid="input-username"
          placeholder="Digite seu nome de usuário"
          {...register("nomeUsuario")}
          className={errors.nomeUsuario ? "border-destructive" : ""}
        />
        {errors.nomeUsuario && (
          <div className="flex items-center gap-1.5 text-destructive text-xs mt-1" data-testid="error-username">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{errors.nomeUsuario.message}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" data-testid="label-email">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          data-testid="input-email"
          placeholder="Digite seu email"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <div className="flex items-center gap-1.5 text-destructive text-xs mt-1" data-testid="error-email">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{errors.email.message}</span>
          </div>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
        data-testid="button-cadastro"
      >
        {isLoading ? "Aguardando..." : "Cadastrar"}
      </Button>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Já tem conta? </span>
        <Link href="/login" className="text-primary hover:underline" data-testid="link-login">
          Faça login
        </Link>
      </div>
    </form>
  );
}
