import UserDisplay from '../UserDisplay';

export default function UserDisplayExample() {
  const handleLogout = () => {
    console.log('Logout clicado');
  };

  return (
    <UserDisplay
      nome="João Silva Santos"
      nomeUsuario="joaosilva"
      email="joao.silva@email.com"
      onLogout={handleLogout}
    />
  );
}
