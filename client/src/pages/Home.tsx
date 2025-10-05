import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import UserDisplay from "@/components/UserDisplay";
import type { Usuario } from "@shared/schema";

export default function Home() {
  const [, setLocation] = useLocation();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioData = localStorage.getItem("usuario");
    if (usuarioData) {
      setUsuario(JSON.parse(usuarioData));
    } else {
      setLocation("/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setLocation("/login");
  };

  if (!usuario) {
    return null;
  }

  return (
    <UserDisplay
      nome={usuario.nome}
      nomeUsuario={usuario.nomeUsuario}
      email={usuario.email}
      onLogout={handleLogout}
    />
  );
}
