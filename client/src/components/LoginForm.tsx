import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUsuarioSchema, type LoginUsuario } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

interface LoginFormProps {
  onSubmit: (data: LoginUsuario) => void;
  isLoading?: boolean;
}

export default function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUsuario>({
    resolver: zodResolver(loginUsuarioSchema),
    defaultValues: {
      nomeUsuario: "",
      email: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        data-testid="button-login"
      >
        {isLoading ? "Aguardando..." : "Entrar"}
      </Button>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Não tem conta? </span>
        <Link href="/cadastro" className="text-primary hover:underline" data-testid="link-cadastro">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
}
