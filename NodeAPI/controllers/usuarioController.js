const UsuarioModel = require("../models/usuarioModel");

// Controller é responsável por receber a requisição e devolver a resposta
// Ele usa o "model" para acessar os dados

module.exports = {
  createUsuario: (req, res) => {
    const { nome, email, idade } = req.body;

    if (!nome ) {
      return res.status(400).json({ 
        mensagem: "Nome são obrigatórios" 
      });
    }

    // Verificar se email já existe
    const emailExiste = UsuarioModel.buscarPorEmail(email);
    if (emailExiste) {
      return res.status(409).json({ 
        mensagem: "Email já está em uso" 
      });
    }

    const novoUsuario = {
      nome,
      email,
      idade: idade || null
    };

    const usuarioCriado = UsuarioModel.criar(novoUsuario);

    res.status(201).json({ 
      mensagem: "Usuário criado com sucesso", 
      usuario: usuarioCriado 
    });
  },

  // Buscar usuário por ID
  getUsuario: (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = UsuarioModel.buscarPorId(id);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json(usuario);
  },

  getAllUsuarios:  (req, res) => {
    const usuarios = UsuarioModel.getAllUsuarios();
    res.json(usuarios);
  },

  // Atualizar usuário
  updateUsuario: (req, res) => {
    const id = parseInt(req.params.id);
    const novosDados = req.body;

    // Se estiver tentando atualizar email, verificar se já existe
    if (novosDados.email) {
      const emailExiste = UsuarioModel.buscarPorEmail(novosDados.email);
      if (emailExiste && emailExiste.id !== id) {
        return res.status(409).json({ 
          mensagem: "Email já está em uso" 
        });
      }
    }

    const usuarioAtualizado = UsuarioModel.atualizar(id, novosDados);

    if (!usuarioAtualizado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({ mensagem: "Usuário atualizado com sucesso", usuario: usuarioAtualizado });
  },

  // Remover usuário
  deleteUsuario: (req, res) => {
    const id = parseInt(req.params.id);
    const sucesso = UsuarioModel.remover(id);

    if (!sucesso) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({ mensagem: "Usuário removido com sucesso" });
  }
};