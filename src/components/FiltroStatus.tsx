// src/components/FiltroStatus.tsx
// Importa os componentes ButtonGroup e Button da biblioteca Material UI
import { ButtonGroup, Button } from "@mui/material";
// Importa o hook personalizado useFiltro que acessa o contexto de filtro
import { useFiltro } from "../contexts/FiltroContext";

// Definição do componente funcional FiltroStatus
export default function FiltroStatus() {
  // Extrai o estado atual do filtro e a função para alterá-lo a partir do contexto
  const { filtroStatus, setFiltroStatus } = useFiltro();

  return (
    // ButtonGroup agrupa os botões de filtro em uma linha, com estilo de "contained"
    <ButtonGroup variant="contained" aria-label="Filtro de status">
      {/* Botão para filtrar "Todos" os itens */}
      <Button
        // Se o filtro atual for "Todos", o botão fica com a cor "primary"; senão, cor padrão ("inherit")
        color={filtroStatus === "Todos" ? "primary" : "inherit"}
        // Ao clicar, atualiza o filtro para "Todos"
        onClick={() => setFiltroStatus("Todos")}
      >
        Todos
      </Button>

      {/* Botão para filtrar apenas os itens "Ativo" */}
      <Button
        color={filtroStatus === "Ativo" ? "primary" : "inherit"}
        onClick={() => setFiltroStatus("Ativo")}
      >
        Ativo
      </Button>

      {/* Botão para filtrar apenas os itens "Encerrado" */}
      <Button
        color={filtroStatus === "Encerrado" ? "primary" : "inherit"}
        onClick={() => setFiltroStatus("Encerrado")}
      >
        Encerrado
      </Button>
    </ButtonGroup>
  );
}
