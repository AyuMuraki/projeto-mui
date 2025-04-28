// src/components/Header.tsx

// Importa componentes visuais do Material UI
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// Importa o hook useAuth para acessar informações de autenticação do usuário
import { useAuth } from "../contexts/AuthContext";

// Criação do componente Header
export const Header = () => {
  // Obtém o usuário logado (se existir) e a função de logout a partir do contexto de autenticação
  const { usuario, logout } = useAuth();

  return (
    // AppBar é a barra de navegação superior fixa
    <AppBar position="static">
      {/* Toolbar organiza os elementos dentro da AppBar de forma horizontal */}
      <Toolbar>
        {/* Título principal do sistema */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sistema de Processos
        </Typography>

        {/* Se o usuário estiver logado, mostra o nome e o botão "Sair" */}
        {usuario ? (
          <>
            {/* Exibe o nome do usuário */}
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              {usuario.nome}
            </Typography>

            {/* Botão para sair do sistema, chamando a função logout */}
            <Button color="inherit" onClick={logout}>
              Sair
            </Button>
          </>
        ) : (
          // Se o usuário não estiver logado, exibe o botão "Login"
          <Button color="inherit" onClick={() => alert("Faça login!")}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
