// Localização: src/routes/index.tsx

import { Routes, Route } from 'react-router-dom';

// Importando os componentes de PÁGINA que vamos criar em breve
import   Dashboard  from '@/modules/dashboard/index'; 
//import { LoginPage } from '@/features/autenticacao';

export function AppRoutes() {
  return (
    <Routes>
      {/* A URL '/login' vai mostrar o componente LoginPage 
      <Route path="/login" element={<LoginPage />} />*/}

      {/* A URL principal '/' (raiz do site) vai mostrar o DashboardPage */}
      <Route path="/" element={<Dashboard />} />

      {/* No futuro, você adicionará outras rotas aqui */}
      {/* <Route path="/veiculos" element={<VeiculosPage />} /> */}
    </Routes>
  );
}