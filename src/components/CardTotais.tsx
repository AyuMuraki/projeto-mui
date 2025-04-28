// src/components/CardTotais.tsx
// Importação de componentes do Material UI
import { Box, Card, CardContent, Typography } from "@mui/material";

// Definição da tipagem das propriedades esperadas pelo componente
interface CardTotaisProps {
  totalDepositoJudicial: number; // Total de depósitos judiciais
  totalDepositoRecursal: number; // Total de depósitos recursais
  totalValorLevantado: number; // Total de valores já levantados
}

// Definição do componente funcional CardTotais
export const CardTotais = ({
  totalDepositoJudicial,
  totalDepositoRecursal,
  totalValorLevantado,
}: CardTotaisProps) => {
  return (
    // Box do Material UI usado para agrupar os três cards
    // Configurado para exibir os itens em linha (flex) com espaçamento (gap)
    <Box sx={{ display: "flex", gap: 2, marginTop: 2, marginBottom: 2 }}>
      {/* Card para exibir o total de depósito judicial */}
      <Card sx={{ flex: 1 }}>
        <CardContent>
          {/* Título do card */}
          <Typography variant="h6">Total Depósito Judicial</Typography>
          {/* Valor formatado como moeda brasileira */}
          <Typography variant="h4">
            R${" "}
            {totalDepositoJudicial?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
        </CardContent>
      </Card>

      {/* Card para exibir o total de depósito recursal */}
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography variant="h6">Total Depósito Recursal</Typography>
          <Typography variant="h4">
            R${" "}
            {totalDepositoRecursal?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
        </CardContent>
      </Card>

      {/* Card para exibir o total já levantado */}
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography variant="h6">Total Já Levantado</Typography>
          <Typography variant="h4">
            R${" "}
            {totalValorLevantado?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
