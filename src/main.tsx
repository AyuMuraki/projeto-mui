// src/main.tsx

// Importa o React, necessário para a renderização de componentes no React
import React from "react";

// Importa o ReactDOM, responsável por renderizar o React no DOM do navegador
import ReactDOM from "react-dom/client";

// Importa o componente principal App, que será a base de nossa aplicação
import App from "./App";

// Importa os componentes do Material-UI para configurar o tema e aplicar estilo global
import { CssBaseline, ThemeProvider } from "@mui/material";

// Importa o tema customizado que foi definido no arquivo "theme/theme.ts"
import { theme } from "./theme/theme";

// Importa o BrowserRouter do React Router, para habilitar a navegação entre páginas
import { BrowserRouter } from "react-router-dom";

// Importa o AuthProvider, que provê o contexto de autenticação para a aplicação
import { AuthProvider } from "./contexts/AuthContext";

// O ReactDOM.render vai "renderizar" a nossa aplicação na página HTML
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* StrictMode é um recurso do React para detectar erros e ajudar no desenvolvimento */}

    {/* ThemeProvider aplica o tema global da aplicação */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline aplica um estilo de normalização e configurações globais (como fontes) */}
      <CssBaseline />

      {/* BrowserRouter permite a navegação entre páginas usando o React Router */}
      <BrowserRouter>
        {/* AuthProvider fornece o contexto de autenticação para os componentes internos */}
        <AuthProvider>
          {/* O App é o componente principal da nossa aplicação e será renderizado dentro do AuthProvider */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
