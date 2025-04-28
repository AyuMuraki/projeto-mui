# 🎨 Descomplicando Interface com MUI (Material-UI) no React.
## 📌 Sobre o Projeto

Este projeto tem como objetivo ensinar, de forma simples e prática, como utilizar o MUI (Material UI) para construir uma interface de processos financeiros em React, aplicando temas personalizados e utilizando componentes prontos, estilizados de forma profissional e responsiva.

**📖 Entendendo as Tecnologias.**


Antes de começar, entenda o papel de cada ferramenta:


Tecnologia	Para que serve
MUI (Material UI)	Biblioteca de componentes prontos com design limpo e responsivo baseado no Google Material Design.
TailwindCSS	Framework de classes utilitárias para estilização rápida (não utilizado neste projeto).
TypeScript	Superset de JavaScript que adiciona tipagem estática, aumentando a segurança e legibilidade do código.
Bootstrap	Biblioteca tradicional de UI baseada em grid e componentes (não utilizado aqui).
jQuery	Biblioteca antiga para manipular DOM (pouco utilizada em projetos modernos com React).
✅ Neste projeto: React + TypeScript + MUI.

## 🔍 O que é o MUI?
**O MUI (antigo Material UI)** é uma biblioteca de componentes React baseados no Material Design (aquele design criado pelo Google).
Ele facilita a criação de layouts modernos, responsivos e bonitos sem precisar **criar tudo do zero.**

**Por que foi usado aqui?**

🚀 Agilidade para criar interfaces profissionais.

📱 Responsividade automática.

🧱 Componentes prontos para tabela, modal, botão, cards e mais.

🎨 Permite personalização via tema (ThemeProvider).


## 🧩 O que foi feito neste projeto
Durante o desenvolvimento deste projeto, as seguintes práticas foram aplicadas:

✅ Criar e aplicar um ThemeProvider customizado

✅ Definir cores primárias/secundárias

✅ Usar a fonte Poppins ou Roboto como padrão

✅ Ajustar o borderRadius global para 8px

✅ Refatorar a tela de processos trabalhistas

✅ Utilizar componentes do MUI:


| Componente            | Finalidade                                                                                                |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| AppBar                | Cabeçalho com nome do usuário e botão "Sair"                                                              |
| Card                  | Exibir totais financeiros (depósitos judiciais, recursais e valores levantados)                           |
| DataGrid              | Exibir lista de processos com paginação, ordenação e chips de status                                     |
| Dialog                | Modal para editar informações dos processos                                                             |
| TextField, Select, Button | Inputs e botões para formulários e ações.                                                               |




# 🎨 Como foi criado e aplicado o tema

**Criamos um `theme.ts` 📂 para isolar o tema e aplicar configurações globais:**

**Cores principais:**

* 💙 Primary: tons de azul


**Fonte padrão:** ✍️ Poppins ou Roboto

**Border radius global:** 📐 8px para deixar os componentes mais arredondados

**Aplicação do tema:**

* 🖌️ `ThemeProvider` foi usado para encapsular toda a aplicação
* 🧹 `CssBaseline` foi adicionado para garantir um reset básico de estilos
# 

```
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
});
```

E aplicado em main.tsx:

```

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>


```


## 🧩 Componentes Utilizados

### Componentes do MUI que usamos neste projeto:

| Componente            | Para que serve                                                                                                                                                                                                                                                           |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AppBar                | Barra no topo com saudação ("Olá, Karoline Almeida") e botão "Sair"                                                                                                                                                                                                     |
| Card                  | Exibir totais financeiros (Depósitos, Valores levantados)                                                                                                                                                                                                                |
| DataGrid              | Tabela de processos, com paginação, ordenação, renderização customizada                                                                                                                                                                                                  |
| Chip                  | Pequenos "badges" coloridos indicando o status dos processos (Ativo, Encerrado)                                                                                                                                                                                          |
| Dialog                | Modal para edição de processos                                                                                                                                                                                                                                          |
| TextField, Select, Button | Campos e botões do formulário dentro do Dialog                                                                                                                                                                                                                         |
| Box, Stack, Grid, Paper, Typography | Componentes de layout e estrutura para organização e estilização                                                                                                                                                                                          |

### 🛣️ Estrutura de Tela Esperada

* 👤 **Header**: ⬆️ AppBar com nome do usuário e botão sair 🚪
* 💳 **Cards**: ↔️ Dois cards lado a lado mostrando totais financeiros 💰
* 📊 **Tabela**: 📄 DataGrid exibindo os processos
* ✏️ **Dialog**: 💬 Modal de edição ao clicar "Editar" na tabela


🧱 Estrutura do Projeto


```
//
├── public/
│   └── processos.json             # Dados simulados dos processos
│
└── src/
    ├── App.css                    # Estilos específicos da aplicação
    ├── App.tsx                    # Componente principal e rotas
    ├── index.css                  # Estilos globais
    ├── main.tsx                   # Ponto de entrada, renderiza ThemeProvider
    ├── vite-env.d.ts              # Tipagens automáticas do Vite
    │
    ├── components/
    │   ├── CardTotais.tsx         # Cards financeiros de totais
    │   ├── FiltroStatus.tsx       # Filtro por status dos processos
    │   ├── Header.tsx             # Header da aplicação com AppBar
    │   ├── ModalEditar.tsx        # Modal de edição dos processos
    │   └── TabelaProcessos.tsx    # Tabela de processos usando DataGrid
    │
    ├── contexts/
    │   ├── AuthContext.tsx        # Gerenciamento de autenticação
    │   └── FiltroContext.tsx      # Gerenciamento do filtro de status
    │
    ├── pages/
    │   ├── Login.tsx              # Tela de login
    │   └── Processos.tsx          # Tela principal dos processos
    │
    └── theme/
        └── theme.ts               # Tema customizado do Material UI


```
## 📂 Principais Componentes Utilizados.

* ⬆️ **AppBar**: Cabeçalho com nome do usuário e botão de logout
* 📊 **Card**: Exibição dos totais financeiros
* 📄 **DataGrid**: Tabela de processos com paginação e ordenação
* ✏️ **Dialog**: Modal de edição de processo
* ✍️ **TextField**: Campos de formulário
*  **Button**: Botões de ações (Entrar, Editar, Salvar, Sair)
* 🏷️ **Chip**: Exibir status dos processos com cor diferente
* 📐 **Box, Grid, Stack**: Layout e posicionamento responsivo




## 🛠️ Tecnologias Obrigatórias

| Tecnologia                   | Função                                          |
|------------------------------|-------------------------------------------------|
| React                        | Construção de interfaces                        |
| TypeScript                   | Tipagem estática e segurança de código          |
| MUI Core (@mui/material)     | Componentes de layout e UI                     |
| MUI DataGrid (@mui/x-data-grid) | Tabela poderosa e personalizável              |
| Context API                  | Gerenciamento de estado global (ex: autenticação) |
| React Router Dom             | Controle de rotas na aplicação                 |

### 🧠 Dicas para Implementação

* ⚙️ Use `ThemeProvider` e `CssBaseline` no `main.tsx`
* 📂 Crie um arquivo `theme.ts` separado para organizar o tema
* 🧱 Para layout use `Box`, `Stack`, `Grid`, `Paper`, `Typography`
* 📊 Para tabela, use `DataGrid` tipado e customizado
* 🏷️ Use `Chip` para colorir o status dos processos (`success`, `error`)
* diálogo No `Dialog`, organize bem os campos usando `Stack` ou `Box` para alinhamento


### 🚀 Como Executar o Projeto

**1️⃣ Instalar Dependências do Projeto:**

* Execute o comando abaixo para instalar todas as dependências necessárias:

```
npm install
```
**2️⃣ Instalar o Material UI (MUI):**

* Este projeto utiliza o Material UI (MUI), a biblioteca de componentes de interface do usuário mais popular para React.
  * Para instalar o MUI Core e o pacote de ícones, execute:

```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```
*Para mais informações sobre instalação e utilização do MUI, acesse a documentação oficial.*

**3️⃣ Rodar o Servidor de Desenvolvimento**

Após a instalação das dependências, rode o projeto com:

```
npm run dev

```

**4️⃣ Acessar no Navegador:**

Após iniciar o servidor, abra seu navegador e acesse:

```
http://localhost:5173

```


# 💬 Considerações Finais

✅ O uso do MUI permitiu construir uma aplicação visualmente moderna e responsiva em menos tempo.

✅ A Context API ajudou a gerenciar autenticação e filtros de maneira centralizada.

✅ O ThemeProvider garantiu a consistência visual em toda a aplicação.

#


🎮 Se você curtiu esse guia, ficou com alguma dúvida, ou quiser conversar sobre programação, front-end, anime ou games...

🎯 Me chama no LinkedIn ou manda uma mensagem! Vai ser um prazer bater esse papo! 😄

**🚀 Projeto desenvolvido com foco em experiência real de mercado.**

Feito com 💙 por Ayumi Muraki !
