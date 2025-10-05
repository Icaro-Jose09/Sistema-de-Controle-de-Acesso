import LoginForm from '../LoginForm';

export default function LoginFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Login submetido:', data);
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
