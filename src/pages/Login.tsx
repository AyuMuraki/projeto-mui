// Importação dos componentes da biblioteca Material-UI (MUI)
import {
  Box, // Componente de layout (tipo uma div com poderes extras de estilo)
  Button, // Botão estilizado
  Container, // Centraliza o conteúdo na tela, com largura máxima
  Paper, // Cartão com sombra (elevação)
  TextField, // Campo de entrada de texto
  Typography, // Texto estilizado (títulos, subtítulos etc.)
  styled, // Função para criar componentes personalizados com estilos
} from "@mui/material";

// Importa o hook useState do React para trabalhar com estados locais
import { useState } from "react";

// Importa o hook useAuth para acessar a função de login
import { useAuth } from "../contexts/AuthContext";

// Cria um componente Box estilizado para cobrir a tela inteira com fundo azul claro
const FullScreenBlueBox = styled(Box)(({ theme }) => ({
  display: "flex", // Define o layout como flexível
  flexDirection: "column", // Organiza os itens na vertical
  justifyContent: "center", // Centraliza verticalmente
  alignItems: "center", // Centraliza horizontalmente
  minHeight: "100vh", // Altura mínima de 100% da altura da tela
  width: "100vw", // Largura de 100% da largura da tela
  backgroundColor: theme.palette.primary.light, // Usa a cor primária clara do tema MUI
}));

// Componente principal da página de login
export default function Login() {
  // Pega a função de login do contexto de autenticação
  const { login } = useAuth();

  // Estados para armazenar o e-mail e a senha digitados pelo usuário
  const [email, setEmail] = useState("karoline@exemplo.com"); // Valor inicial preenchido para testes
  const [senha, setSenha] = useState("123456"); // Valor inicial preenchido para testes

  // Função chamada quando o formulário é enviado
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Impede o recarregamento da página
    login(email, senha); // Chama a função de login passando os dados
  }

  // Estrutura visual (JSX) do componente
  return (
    <FullScreenBlueBox>
      {" "}
      {/* Container externo usando o Box estilizado para ocupar a tela toda */}
      <Container maxWidth="xs">
        {" "}
        {/* Container interno para limitar a largura do formulário */}
        <Paper
          elevation={3} // Sombra para dar "profundidade" ao cartão
          sx={{ p: 4, mt: 3, borderRadius: 2, width: "400px" }} // Estilização usando o sistema do MUI
        >
          {/* Título do formulário */}
          <Typography variant="h5" mb={2} align="center">
            Login
          </Typography>

          {/* Formulário */}
          <Box
            component="form" // Indica que esse Box é um formulário
            onSubmit={handleSubmit} // Define a função que será chamada ao enviar
            display="flex" // Layout flexível
            flexDirection="column" // Organiza os campos em coluna
            gap={2} // Espaçamento entre os elementos
          >
            {/* Campo de e-mail */}
            <TextField
              label="E-mail" // Texto exibido como rótulo
              type="email" // Define o tipo de entrada
              fullWidth // Faz o campo ocupar 100% da largura disponível
              value={email} // Valor atual do campo
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado quando o usuário digita
              required // Torna o campo obrigatório
            />
            {/* Campo de senha */}
            <TextField
              label="Senha"
              type="password" // Esconde o texto digitado
              fullWidth
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {/* Botão de enviar (Entrar) */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Entrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </FullScreenBlueBox>
  );
}
