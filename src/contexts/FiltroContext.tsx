import React, { createContext, useContext, useState, ReactNode } from "react";

// Defina o tipo do filtro
type FiltroStatus = "Todos" | "Ativo" | "Encerrado";

// Tipo do contexto
interface FiltroContextType {
  filtroStatus: FiltroStatus;
  setFiltroStatus: React.Dispatch<React.SetStateAction<FiltroStatus>>;
}

// Crie o contexto
const FiltroContext = createContext<FiltroContextType | undefined>(undefined);

// Componente de Provider
export const FiltroProvider = ({ children }: { children: ReactNode }) => {
  const [filtroStatus, setFiltroStatus] = useState<FiltroStatus>("Todos");

  return (
    <FiltroContext.Provider value={{ filtroStatus, setFiltroStatus }}>
      {children}
    </FiltroContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useFiltro = (): FiltroContextType => {
  const context = useContext(FiltroContext);
  if (!context) {
    throw new Error("useFiltro must be used within a FiltroProvider");
  }
  return context;
};
