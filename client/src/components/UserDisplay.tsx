import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail } from "lucide-react";

interface UserDisplayProps {
  nome: string;
  nomeUsuario: string;
  email: string;
  onLogout?: () => void;
}

export default function UserDisplay({ nome, nomeUsuario, email, onLogout }: UserDisplayProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold">Sistema de Controle de Acesso</h1>
          <Button 
            variant="outline" 
            onClick={onLogout}
            data-testid="button-logout"
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </header>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4" data-testid="text-welcome">
              Bem-vindo(a), {nome}!
            </h2>
            <p className="text-muted-foreground">
              Você está autenticado no sistema. Abaixo estão suas informações de perfil.
            </p>
          </div>

          <Card className="p-8">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20 text-xl">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {getInitials(nome)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Informações do Perfil</h3>
                  <p className="text-sm text-muted-foreground">
                    Dados cadastrados no sistema
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Nome Completo</div>
                      <div className="font-medium" data-testid="text-nome">{nome}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Nome de Usuário</div>
                      <div className="font-medium font-mono" data-testid="text-username">{nomeUsuario}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-medium font-mono" data-testid="text-email">{email}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
