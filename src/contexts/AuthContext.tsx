// Localização: src/contexts/AuthContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definindo os "formatos" (tipos) dos nossos dados
interface User {
  id: number;
  nome: string;
  permissao: 'SuperAdmin' | 'Admin' | 'Operador';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  // No futuro, aqui entrarão as funções de login() e logout()
}

// 2. Criando o Contexto
const AuthContext = createContext<AuthContextType | null>(null);

// 3. Criando o "Provedor" que vai "abraçar" nossa aplicação
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // 4. Simulação inicial de um usuário logado PARA TESTES
  // Quando a API de login estiver pronta, isso começará como 'null'
  const [user, setUser] = useState<User | null>({ 
    id: 1, 
    nome: 'SuperAdmin (Simulado)', 
    permissao: 'SuperAdmin' 
  });

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// 5. Criando um "atalho" (hook customizado) para facilitar o uso do contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};