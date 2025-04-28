// src/App.tsx

// Importa as rotas (Routes e Route) do React Router para navegação entre páginas
import { Routes, Route } from "react-router-dom";

// Importa o AuthProvider, que gerencia o estado de autenticação no contexto da aplicação
import { AuthProvider } from "./contexts/AuthContext";

// Importa o FiltroProvider, que gerencia o estado dos filtros aplicados na listagem de processos
import { FiltroProvider } from "./contexts/FiltroContext";

// Importa as páginas que serão exibidas conforme a rota
import Login from "./pages/Login";
import Processos from "./pages/Processos";

// Função principal do App (componente raiz)
function App() {
  return (
    // AuthProvider engloba toda a aplicação para fornecer acesso ao contexto de autenticação
    <AuthProvider>
      {/* FiltroProvider engloba as rotas para fornecer o contexto de filtros a quem precisar */}
      <FiltroProvider>
        {/* Define as rotas que a aplicação vai utilizar */}
        <Routes>
          {/* Quando o usuário acessar a URL "/", será exibido o componente Login */}
          <Route path="/" element={<Login />} />

          {/* Quando o usuário acessar a URL "/processos", será exibido o componente Processos */}
          <Route path="/processos" element={<Processos />} />
        </Routes>
      </FiltroProvider>
    </AuthProvider>
  );
}

// Exporta o componente App para ser usado no resto da aplicação
export default App;
