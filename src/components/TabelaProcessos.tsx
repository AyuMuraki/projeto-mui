// src/components/TabelaProcessos.tsx

// Importando componentes do MUI (Material UI) e hooks do React
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ModalEditar from "./ModalEditar";

// Interface que define a estrutura de um processo
interface Processo {
  id: number;
  numero: string;
  reclamante: string;
  reclamada: string;
  status: "Ativo" | "Encerrado";
  valorCausa: number;
  depositoJudicial: number;
  depositoRecursal: number;
  valorLevantado: number;
  dataAjuizamento: string;
  cidade: string;
  uf: string;
  vara: string;
}

// Props que o componente TabelaProcessos recebe
interface TabelaProcessosProps {
  filtroStatus: "Todos" | "Ativo" | "Encerrado"; // Filtro para exibir processos
}

// Componente principal que renderiza a tabela
const TabelaProcessos: React.FC<TabelaProcessosProps> = ({ filtroStatus }) => {
  // Estado para armazenar todos os processos
  const [processos, setProcessos] = useState<Processo[]>([]);
  // Estado para controlar se o modal de edição está aberto
  const [openModal, setOpenModal] = useState(false);
  // Estado para armazenar qual processo está sendo editado
  const [processoEditando, setProcessoEditando] = useState<Processo | null>(
    null
  );
  // Estados para controle de paginação da tabela
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);

  // useEffect para carregar os processos do arquivo JSON ao abrir o componente
  useEffect(() => {
    fetch("/processos.json") // Faz uma requisição para pegar os dados
      .then((res) => res.json())
      .then((dados) => {
        // Formata cada processo para adicionar um ID (obrigatório para o DataGrid)
        const processosFormatados = dados.processos.map(
          (proc: any, index: number) => ({
            ...proc,
            id: index + 1, // Gera um id único baseado no índice
          })
        ) as Processo[];
        setProcessos(processosFormatados); // Atualiza o estado
      });
  }, []);

  // Filtra os processos conforme o filtroStatus selecionado
  const processosFiltrados = processos.filter((processo) =>
    filtroStatus === "Todos" ? true : processo.status === filtroStatus
  );

  // Função que abre o modal e define qual processo será editado
  const handleEdit = (processo: Processo) => {
    setProcessoEditando(processo);
    setOpenModal(true);
  };

  // Função para salvar o processo editado
  const handleSave = (processoEditado: Processo) => {
    setProcessos((prevProcessos) =>
      prevProcessos.map((processo) =>
        processo.id === processoEditado.id ? processoEditado : processo
      )
    );
    setOpenModal(false); // Fecha o modal após salvar
  };

  // Definição das colunas da tabela (DataGrid)
  const columns: GridColDef[] = [
    {
      field: "numero",
      headerName: "Número",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "reclamante",
      headerName: "Reclamante",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "reclamada",
      headerName: "Reclamada",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      align: "center",
      // Formata a célula para colorir conforme o status
      renderCell: (params) => (
        <div
          style={{
            backgroundColor:
              params.row.status === "Ativo" ? "lightgreen" : "lightcoral",
            padding: "5px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "valorCausa",
      headerName: "Valor da Causa",
      width: 180,
      // Formata o valor como moeda brasileira
      valueFormatter: ({ value }: { value: number }) =>
        `R$ ${value?.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dataAjuizamento",
      headerName: "Data de Juizamento",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cidade",
      headerName: "Cidade",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "uf",
      headerName: "UF",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "vara",
      headerName: "Vara",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "editar",
      headerName: "Editar",
      width: 120,
      sortable: false, // Desativa ordenação nessa coluna
      filterable: false, // Desativa filtragem nessa coluna
      headerAlign: "center",
      align: "center",
      // Botão para editar o processo
      renderCell: (params) => (
        <Button variant="contained" onClick={() => handleEdit(params.row)}>
          Editar
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ height: 500 }}>
        {/* Componente que renderiza a tabela */}
        <DataGrid
          rows={processosFiltrados} // Linhas filtradas conforme o filtroStatus
          columns={columns} // Colunas configuradas acima
          paginationModel={{ page, pageSize }} // Controle de paginação
          onPaginationModelChange={({ page, pageSize }) => {
            setPage(page);
            setPageSize(pageSize);
          }}
          pageSizeOptions={[5, 10, 20]} // Tamanhos de página disponíveis
          disableRowSelectionOnClick // Impede seleção ao clicar na linha
          getRowId={(row) => row.id} // Especifica qual campo usar como ID
        />
      </Box>

      {/* Modal de edição */}
      <ModalEditar
        open={openModal && processoEditando !== null} // Abre o modal se houver processo editando
        processo={processoEditando ?? ({} as Processo)} // Passa o processo para o modal
        onClose={() => setOpenModal(false)} // Fecha o modal ao cancelar
        onSave={handleSave} // Salva as alterações
      />
    </Box>
  );
};

export default TabelaProcessos;
