// "Exemplo de banco de dados"
let usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com", idade: 25 },
  { id: 2, nome: "Bruno", email: "bruno@email.com", idade: 30 },
  { id: 3, nome: "Carla", email: "carla@email.com", idade: 28 },
  { id: 4, nome: "Pedro", email: "pedro12@email.com", idade: 35 }
];

// Função para gerar próximo ID
const gerarProximoId = () => {
  if (usuarios.length === 0) return 1;
  return Math.max(...usuarios.map(u => u.id)) + 1;
};

// Exportamos funções que manipulam os dados
module.exports = {

  getAllUsuarios: () => usuarios,

  buscarPorId: (id) => usuarios.find(u => u.id === id),

  buscarPorEmail: (email) => usuarios.find(u => u.email === email),

  criar: (dadosUsuario) => {
    const novoUsuario = {
      id: gerarProximoId(),
      nome: dadosUsuario.nome,
      email: dadosUsuario.email,
      idade: dadosUsuario.idade || null
    };

    usuarios.push(novoUsuario);
    return novoUsuario;
  },

  atualizar: (id, novosDados) => {
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return null;

    if (novosDados.nome) usuario.nome = novosDados.nome;
    if (novosDados.email) usuario.email = novosDados.email;
    if (novosDados.idade !== undefined) usuario.idade = novosDados.idade;

    return usuario;
  },

  remover: (id) => {
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) return false;

    usuarios.splice(index, 1);
    return true;
  }
};