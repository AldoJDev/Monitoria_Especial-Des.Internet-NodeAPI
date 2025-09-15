const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// definição das rotas
// cada rota chama um método do controller

// GET → Listar todos os usuarios
router.get("/", usuarioController.getAllUsuarios);

// GET com parâmetro → Buscar usuário por ID
router.get("/getById/:id", usuarioController.getUsuario);

// POST → Buscar usuário por ID
router.post("/post", usuarioController.createUsuario);

// PUT → Atualizar usuário
router.put("/putById/:id", usuarioController.updateUsuario);

// DELETE → Remover usuário
router.delete("/deleteById/:id", usuarioController.deleteUsuario);

module.exports = router;
