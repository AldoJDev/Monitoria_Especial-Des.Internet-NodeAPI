const express = require("express");
const app = express();
const usuarioRoutes = require("./routes/usuarioRoutes");

app.use(express.json()); 

// Rotas de usuários
app.use("/usuarios", usuarioRoutes);

// Servidor
app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
