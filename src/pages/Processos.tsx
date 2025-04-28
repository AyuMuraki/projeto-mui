// Importações de componentes do Material UI e de outros arquivos
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import TabelaProcessos from "../components/TabelaProcessos"; // Importa o componente da tabela
import { CardTotais } from "../components/CardTotais"; // Importa o componente dos cards de totais
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação entre rotas

// Componente principal da página de processos
const Processos = () => {
  const navigate = useNavigate(); // Função para redirecionar o usuário de rota

  // Estado para armazenar o filtro de status selecionado
  const [filtroStatus, setFiltroStatus] = useState<
    "Todos" | "Ativo" | "Encerrado"
  >("Todos");

  // Estado para armazenar os processos carregados
  const [processos, setProcessos] = useState<any[]>([]);

  // Estado para armazenar os totais financeiros calculados
  const [totais, setTotais] = useState({
    totalDepositoJudicial: 0,
    totalDepositoRecursal: 0,
    totalValorLevantado: 0,
  });

  // useEffect para carregar os processos uma única vez ao abrir a página
  useEffect(() => {
    fetch("/processos.json") // Faz a requisição para buscar o arquivo de processos
      .then((res) => res.json()) // Converte a resposta para JSON
      .then((dados) => {
        setProcessos(dados.processos); // Salva os processos no estado
      })
      .catch((error) => {
        console.error("Erro ao carregar processos:", error); // Captura e mostra erros no console
      });
  }, []); // [] indica que será executado apenas uma vez

  // useEffect para recalcular os totais sempre que o filtro ou processos mudarem
  useEffect(() => {
    // Filtra os processos com base no filtro selecionado
    const processosFiltrados = processos.filter((processo) =>
      filtroStatus === "Todos" ? true : processo.status === filtroStatus
    );

    // Calcula o total de depósito judicial
    const depositoJudicial = processosFiltrados.reduce(
      (acc: number, processo: any) => acc + (processo.depositoJudicial || 0),
      0
    );

    // Calcula o total de depósito recursal
    const depositoRecursal = processosFiltrados.reduce(
      (acc: number, processo: any) => acc + (processo.depositoRecursal || 0),
      0
    );

    // Calcula o total de valores levantados
    const valorLevantado = processosFiltrados.reduce(
      (acc: number, processo: any) => acc + (processo.valorLevantado || 0),
      0
    );

    // Atualiza os totais no estado
    setTotais({
      totalDepositoJudicial: depositoJudicial,
      totalDepositoRecursal: depositoRecursal,
      totalValorLevantado: valorLevantado,
    });
  }, [filtroStatus, processos]); // Executa sempre que o filtro ou processos mudarem

  // Função para atualizar o filtro de status
  const handleFiltroChange = (event: SelectChangeEvent) => {
    setFiltroStatus(event.target.value as "Todos" | "Ativo" | "Encerrado");
  };

  // Função para realizar o logout do usuário
  const handleSair = () => {
    localStorage.removeItem("token"); // Remove o token de autenticação
    navigate("/"); // Redireciona para a página de login
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra superior com saudação e botão de sair */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Olá, Karoline Almeida
          </Typography>
          <Button color="inherit" onClick={handleSair}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      {/* Conteúdo principal da página */}
      <Box sx={{ p: 3 }}>
        {/* Card com os totais financeiros */}
        <Box sx={{ mt: 2, mb: 2 }}>
          <CardTotais
            totalDepositoJudicial={totais.totalDepositoJudicial}
            totalDepositoRecursal={totais.totalDepositoRecursal}
            totalValorLevantado={totais.totalValorLevantado}
          />
        </Box>

        {/* Campo para filtrar processos por status */}
        <FormControl sx={{ minWidth: 200, mb: 2 }}>
          <InputLabel>Filtrar por Status</InputLabel>
          <Select
            value={filtroStatus}
            label="Filtrar por Status"
            onChange={handleFiltroChange}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Ativo">Ativo</MenuItem>
            <MenuItem value="Encerrado">Encerrado</MenuItem>
          </Select>
        </FormControl>

        {/* Tabela de processos filtrados */}
        <TabelaProcessos filtroStatus={filtroStatus} />
      </Box>
    </Box>
  );
};

export default Processos;
