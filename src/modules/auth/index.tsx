// Localização: src/features/autenticacao/index.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Importando os componentes do Shadcn
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Importando o logo
import logoSrc from '@/assets/images/logo.svg';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Chamar a função de login do AuthContext/serviço de API
    console.log({ email, password });
    alert('Login submetido! (Lógica a ser implementada)');
  };

  return (
    // Div principal que ocupa a tela inteira e centraliza o conteúdo
    <div className="flex min-h-screen items-center justify-center bg-background-muted p-4">
      
      {/* O Card branco centralizado */}
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <img src={logoSrc} alt="Logo da Plataforma" className="mx-auto mb-4 h-12 w-auto" />
          <CardTitle className="text-2xl">Bem-vindo de volta!</CardTitle>
          <CardDescription>Acesse sua conta para gerenciar sua frota.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              
              {/* Campo de Email */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu.email@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              {/* Campo de Senha */}
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link to="/esqueci-minha-senha" className="text-sm text-blue-600 hover:underline">
                    Esqueceu sua senha?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Botão de Entrar */}
              <Button type="submit" className="w-full">
                Entrar
              </Button>
              
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}