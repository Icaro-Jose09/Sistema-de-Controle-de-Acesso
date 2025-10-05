import CadastroForm from '../CadastroForm';

export default function CadastroFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Cadastro submetido:', data);
  };

  return <CadastroForm onSubmit={handleSubmit} />;
}
