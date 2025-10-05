import AuthLayout from '../AuthLayout';
import { Button } from '@/components/ui/button';

export default function AuthLayoutExample() {
  return (
    <AuthLayout
      title="Exemplo de Layout"
      subtitle="Este é um exemplo de como o layout de autenticação funciona"
    >
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Este é o conteúdo que será renderizado dentro do card de autenticação.
        </p>
        <Button className="w-full">Botão de Exemplo</Button>
      </div>
    </AuthLayout>
  );
}
