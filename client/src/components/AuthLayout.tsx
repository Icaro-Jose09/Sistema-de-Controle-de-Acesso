interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-primary via-primary/90 to-primary/70 p-12 flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            Sistema de Controle de Acesso
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Gerencie seus acessos de forma segura e eficiente
          </p>
        </div>
        
        <div className="space-y-6 text-primary-foreground/90">
          <div className="flex items-start gap-3">
            <div className="w-1 h-12 bg-primary-foreground/30 rounded-full" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Seguro e Confiável</h3>
              <p className="text-sm text-primary-foreground/70">
                Seus dados protegidos com as melhores práticas de segurança
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-1 h-12 bg-primary-foreground/30 rounded-full" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Fácil de Usar</h3>
              <p className="text-sm text-primary-foreground/70">
                Interface intuitiva e moderna para melhor experiência
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-2" data-testid="text-title">
              {title}
            </h2>
            <p className="text-muted-foreground" data-testid="text-subtitle">
              {subtitle}
            </p>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-8 shadow-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
