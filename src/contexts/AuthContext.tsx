// Importa hooks e tipos do React
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
// Importa hook para navegação de rotas
import { useNavigate } from "react-router-dom";

// Define a interface que representa um usuário
interface Usuario {
  nome: string;
  email: string;
}

// Define a interface que representa o formato do contexto de autenticação
interface AuthContextType {
  usuario: Usuario | null;
  login: (email: string, senha: string) => boolean;
  logout: () => void;
}

// Cria o contexto de autenticação com valor inicial undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define um usuário fixo para simular o login (normalmente viria de um banco de dados)
const USUARIO_FIXO = {
  nome: "Karoline Almeida",
  email: "karoline@exemplo.com",
};

// Componente que vai prover o contexto para toda a aplicação
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Estado para armazenar o usuário autenticado (ou null, se não tiver nenhum)
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // Hook para redirecionar o usuário após login/logout
  const navigate = useNavigate();

  // Quando o componente é montado, tenta recuperar o usuário salvo no localStorage
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo)); // Se encontrar, atualiza o estado com o usuário salvo
    }
  }, []);

  // Função para realizar o login
  const login = (email: string, senha: string) => {
    // Valida o e-mail e senha com o usuário fixo
    if (email === USUARIO_FIXO.email && senha === "123456") {
      setUsuario(USUARIO_FIXO); // Atualiza o estado com o usuário fixo
      localStorage.setItem("usuario", JSON.stringify(USUARIO_FIXO)); // Salva no localStorage para persistência
      navigate("/processos"); // Redireciona o usuário para a página de processos
      return true; // Retorna true para indicar sucesso
    }
    return false; // Retorna false se o login falhar
  };

  // Função para realizar o logout
  const logout = () => {
    setUsuario(null); // Limpa o estado de usuário
    localStorage.removeItem("usuario"); // Remove o usuário do localStorage
    navigate("/"); // Redireciona para a página inicial
  };

  // Retorna o Provider do contexto, disponibilizando as informações e funções para os componentes filhos
  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto de autenticação nos componentes
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Se o hook for usado fora do AuthProvider, lança um erro
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context; // Retorna o contexto
};
