# CRUD de Alunos com NodeJS e Fetch API

Este é um projeto acadêmico full-stack simples que demonstra a criação de uma API RESTful com **NodeJS** e **Express** para gerenciar um cadastro de alunos, e um frontend em **HTML, CSS e JavaScript** que consome essa API utilizando a **Fetch API** nativa do navegador.

A aplicação permite realizar as quatro operações básicas de um CRUD:
*   **Create (Criar - POST):** Inserir novos alunos no banco de dados.
*   **Read (Ler - GET):** Buscar um aluno específico pelo seu RA (Registro do Aluno).
*   **Update (Atualizar - PUT ou PATCH):** Alterar os dados de um aluno existente.
*   **Delete (Excluir - DELETE):** Remover um aluno do banco de dados.

## ✨ Funcionalidades

- **Backend:** Uma API RESTful com endpoints para todas as operações CRUD.
- **Frontend:** Uma interface de usuário simples para interagir com a API de forma intuitiva.
- **Formulário de Cadastro:** Permite adicionar novos alunos.
- **Formulário de Gerenciamento:** Permite buscar um aluno pelo RA e, em seguida, alterar ou excluir seus dados.
- **Comunicação Assíncrona:** Todas as requisições para a API são feitas de forma assíncrona com `async/await` e `fetch`, proporcionando uma experiência de usuário fluida, sem recarregamento da página.

## 🛠️ Tecnologias Utilizadas

#### Backend
- **Node.js:** Ambiente de execução para o JavaScript no servidor.
- **Express.js:** Framework para criação da API e gerenciamento de rotas.
- **MSSQL:** Driver para conectar a aplicação a um banco de dados Microsoft SQL Server.
- **Dotenv:** Para gerenciar variáveis de ambiente de forma segura.
- **CORS:** Middleware para permitir requisições de origens diferentes (neste caso, do arquivo HTML para a API).

#### Frontend
- **HTML5:** Estrutura da página web.
- **CSS3:** Estilização básica para a interface.
- **JavaScript (ES6+):** Manipulação do DOM e consumo da API com a função `fetch`.

#### Banco de Dados
- **Microsoft SQL Server**

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação em seu ambiente local.

### Pré-requisitos
- **Node.js e npm:** [Instale aqui](https://nodejs.org/)
- Acesso a uma instância do **Microsoft SQL Server**.
- Um editor de código, como o **VS Code**.

### 1. Configuração do Banco de Dados
Execute o script `setup.sql` (disponível no projeto) em seu banco de dados SQL Server para criar a tabela `Aluno` e popular com alguns dados iniciais.

```sql
CREATE TABLE [dbo].[Aluno] (
    [id]       INT          IDENTITY (1, 1) NOT NULL,
    [ra]       CHAR (5)     NOT NULL,
    [nome]     VARCHAR (30) NULL,
    [codCurso] INT          NULL,
    PRIMARY KEY CLUSTERED ([id] ASC)
);

INSERT INTO Aluno (ra, nome, codCurso) VALUES ('20001', 'Paulo', 19);
INSERT INTO Aluno (ra, nome, codCurso) VALUES ('20002', 'Ana', 19);
INSERT INTO Aluno (ra, nome, codCurso) VALUES ('20003', 'Pedro', 15);
```

### 2. Configuração do Backend
1.  **Clone o repositório** ou crie a estrutura de arquivos localmente.

2.  **Crie o arquivo de ambiente:** Na raiz do projeto, crie um arquivo chamado `.env` e adicione as seguintes variáveis, substituindo os valores pelas suas credenciais do banco de dados:
    ```env
    PORTA=8081
    CONNECTION_STRING=Server=seu_servidor;Database=seu_banco;User Id=seu_usuario;Password=sua_senha;TrustServerCertificate=True
    ```

3.  **Instale as dependências:** Abra o terminal na pasta do projeto e execute:
    ```bash
    npm install
    ```

4.  **Inicie o servidor da API:**
    ```bash
    node index.js
    ```
    Se tudo estiver correto, você verá as mensagens `BD conectado com sucesso.` e `API funcionando na porta 8081!` no terminal.

### 3. Execução do Frontend
Abra o arquivo `index.html` diretamente no seu navegador web (Google Chrome, Firefox, etc.). A aplicação estará pronta para uso.

---

## 📂 Estrutura do Projeto
```
/seu-projeto
|-- .env                # Arquivo com as variáveis de ambiente (NÃO ENVIAR PARA O GIT)
|-- index.html          # Interface do usuário (Frontend)
|-- index.js            # Servidor da API (Backend)
|-- package.json        # Metadados e dependências do projeto
|-- package-lock.json
|-- README.md           # Este arquivo
```---
## 📖 Endpoints da API

A API expõe os seguintes endpoints:

| Método | Endpoint         | Descrição                                         | Exemplo de Body (Corpo)                                     |
| :----- | :--------------- | :------------------------------------------------ | :---------------------------------------------------------- |
| `GET`  | `/alunos`        | Retorna uma lista com todos os alunos.            | -                                                           |
| `GET`  | `/alunora/:ra`   | Busca e retorna um aluno específico pelo seu RA.   | -                                                           |
| `POST` | `/alunos`        | Cria um novo aluno.                               | `{ "ra": "12345", "nome": "Maria", "codcurso": 19 }`        |
| `PATCH`| `/alunos/:id`    | Atualiza os dados de um aluno existente pelo ID.  | `{ "ra": "12345", "nome": "Maria Silva", "codcurso": 20 }` |
| `DELETE`| `/alunos/:id`  | Exclui um aluno pelo seu ID.                      | -                                                           |
