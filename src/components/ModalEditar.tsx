// src/components/ModalEditar.tsx

// Importa os componentes visuais do Material UI para montar o modal de edição
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

// Importa hooks do React
import { useEffect, useState } from "react";

// Define a tipagem de um Processo para garantir que o objeto tenha essas propriedades
export interface Processo {
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

// Tipagem das propriedades que o componente ModalEditar irá receber
interface ModalEditarProps {
  open: boolean; // Se o modal está aberto ou não
  processo: Processo | null; // Processo que será editado (pode ser nulo)
  onClose: () => void; // Função para fechar o modal
  onSave: (processo: Processo) => void; // Função para salvar as alterações
}

// Componente principal do modal de edição de processo
export default function ModalEditar({
  open,
  processo,
  onClose,
  onSave,
}: ModalEditarProps) {
  // Estado interno para armazenar os dados que estão sendo editados
  const [editedProcesso, setEditedProcesso] = useState<Processo | null>(null);

  // Hook useEffect que roda toda vez que o modal abre ou o processo muda
  useEffect(() => {
    if (open && processo) {
      // Se o modal abrir e houver um processo, copia os dados para o estado local
      setEditedProcesso(processo);
    }
  }, [open, processo]); // Dependências: "open" e "processo"

  // Função que atualiza o estado editedProcesso conforme o usuário altera os campos
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editedProcesso) {
      setEditedProcesso({
        ...editedProcesso, // Copia os dados antigos
        [event.target.name]: event.target.value, // Atualiza somente o campo alterado
      });
    }
  };

  // Função que salva as alterações feitas
  const handleSave = () => {
    if (editedProcesso) {
      onSave(editedProcesso); // Chama a função recebida via props para salvar o processo editado
    }
    onClose(); // Fecha o modal após salvar
  };

  return (
    // Dialog é o modal do Material UI, controlado pela propriedade "open"
    <Dialog open={open} onClose={onClose}>
      {/* Título do modal */}
      <DialogTitle>Editar Processo</DialogTitle>

      {/* Área de conteúdo do modal */}
      <DialogContent>
        {/* Renderiza os campos de edição somente se o processo estiver carregado */}
        {editedProcesso && (
          <>
            {/* Cada TextField representa um campo de edição */}
            <TextField
              label="Número"
              name="numero"
              value={editedProcesso.numero}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Reclamante"
              name="reclamante"
              value={editedProcesso.reclamante}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Reclamada"
              name="reclamada"
              value={editedProcesso.reclamada}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Status"
              name="status"
              value={editedProcesso.status}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Valor da Causa"
              name="valorCausa"
              value={editedProcesso.valorCausa}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="number" // Define que só pode digitar números
            />
            <TextField
              label="Data de Ajuizamento"
              name="dataAjuizamento"
              value={editedProcesso.dataAjuizamento}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="date" // Campo do tipo data
            />
            <TextField
              label="Cidade"
              name="cidade"
              value={editedProcesso.cidade}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="UF"
              name="uf"
              value={editedProcesso.uf}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Vara"
              name="vara"
              value={editedProcesso.vara}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
      </DialogContent>

      {/* Área de ações do modal: botões de Cancelar e Salvar */}
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
