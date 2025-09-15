# 📦 Monitoria Especial (Des. para Internet - NodeAPI)

API REST desenvolvida em Node.js durante uma aula especial de monitoria da disciplina **Desenvolvimento para Internet**, com foco em boas práticas de arquitetura e organização de código usando **Express** e **Nodemon**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)

---

## 📁 Estrutura do Projeto

```bash
MONITORIA_ESPECIAL-DES.INTERNET-NODEAPI/
├── controllers/
│   └── usuarioController.js
├── models/
│   └── usuarioModel.js
├── routes/
│   └── usuarioRoutes.js
├── server.js
├── package.json
├── package-lock.json
```

---

## 🧠 Boas Práticas Aplicadas

Este projeto segue o padrão **MVC (Model-View-Controller)**, que promove uma separação clara de responsabilidades:

### ✅ **Model**
- Localizado em `models/usuarioModel.js`
- Responsável por manipular os dados da aplicação.
- Simula um banco de dados em memória.
- Contém funções como `criar`, `buscarPorId`, `buscarPorEmail`, `atualizar` e `remover`.

### ✅ **Controller**
- Localizado em `controllers/usuarioController.js`
- Recebe as requisições HTTP e coordena as respostas.
- Utiliza o Model para acessar e manipular os dados.
- Implementa validações e regras de negócio, como verificação de e-mail duplicado.

### ✅ **Routes**
- Localizado em `routes/usuarioRoutes.js`
- Define os endpoints da API e associa cada rota ao método correspondente do Controller.
- Mantém a lógica de roteamento separada da lógica de negócio.

Essa separação facilita a manutenção, escalabilidade e reutilização do código.

---

## 📌 Endpoints da API

| Método | Rota                   | Descrição                     |
|--------|------------------------|-------------------------------|
| GET    | `/usuarios/`           | Lista todos os usuários       |
| GET    | `/usuarios/getById/:id`| Busca usuário por ID          |
| POST   | `/usuarios/post`       | Cria novo usuário             |
| PUT    | `/usuarios/putById/:id`| Atualiza usuário por ID       |
| DELETE | `/usuarios/deleteById/:id`| Remove usuário por ID     |

---

## ▶️ Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor com Nodemon:
   ```bash
   npm run dev
   ```

3. Acesse a API:
   ```
   http://localhost:3000/usuarios
   ```

---

## 🧪 Testando a API

Você pode testar os endpoints usando ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

---



## 📬 Contribuições

Este projeto é didático e pode ser expandido com:

- Integração com banco de dados real (MongoDB, PostgreSQL)
- Autenticação com JWT
- Validações com middleware
- Testes automatizados

---

## 🧾 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

