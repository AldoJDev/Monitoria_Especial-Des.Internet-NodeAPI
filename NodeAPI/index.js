// 1. IMPORTAÇÃO DOS MÓDULOS
require("dotenv").config();
const express = require('express');
const mssql = require('mssql');
const cors = require('cors');

// 2. CONFIGURAÇÕES DO SERVIDOR
const app = express();
const porta = process.env.PORTA;
const stringSQL = process.env.CONNECTION_STRING;

// 3. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 4. CONEXÃO COM O BANCO DE DADOS
async function conectaBD() {
    try {
        await mssql.connect(stringSQL);
        console.log("BD conectado com sucesso.");
    } catch (error) {
        console.log(`Erro na conexão com o BD: ${error}`);
    }
}
conectaBD();

// 5. DEFINIÇÃO DAS ROTAS DA API

// Rota para buscar todos os alunos
app.get('/alunos', async (req, res) => {
    try {
        const result = await mssql.query("SELECT * FROM Aluno");
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar alunos.' });
    }
});

// Rota para buscar um aluno pelo RA (usado no formulário de busca)
app.get('/alunora/:ra', async (req, res) => {
    try {
        const ra = req.params.ra;
        const result = await mssql.query(`SELECT * FROM dbo.Aluno WHERE ra='${ra}'`);
        
        if (result.recordset.length === 0) {
            res.status(404).json({ mensagem: 'Aluno não encontrado com este RA.' });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro no servidor.' });
    }
});


// Rota para inserir um novo aluno
app.post('/alunos', async (req, res) => {
    try {
        const { ra, nome, codcurso } = req.body;
        await mssql.query(`INSERT INTO Aluno (ra, nome, codcurso) VALUES ('${ra}', '${nome}', ${codcurso})`);
        res.status(201).json({ mensagem: "Aluno inserido com sucesso." });
    } catch (erro) {
        console.log("Erro na inserção de dados:", erro);
        res.status(500).json({ mensagem: "Erro na inserção de dados." });
    }
});

// Rota para excluir um aluno pelo ID
app.delete('/alunos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await mssql.query(`DELETE FROM Aluno WHERE ID=${id}`);

        if (result.rowsAffected[0] === 1) {
            res.status(200).json({ mensagem: 'Aluno excluído com sucesso.' });
        } else {
            res.status(404).json({ mensagem: 'Aluno não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro na exclusão do aluno.' });
    }
});

// Rota para alterar os dados de um aluno pelo ID


// Diferença entre o patch e o put:
// patch ->  modificações parciais ao conteudo.
// put -> substitui completamente o conteudo por uma NOVA representação.
app.patch('/alunos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { ra, nome, codcurso } = req.body;
        
        const sql = `UPDATE Aluno SET ra='${ra}', nome='${nome}', codcurso=${codcurso} WHERE ID=${id}`;
        const result = await mssql.query(sql);

        if (result.rowsAffected[0] === 1) {
            res.status(200).json({ mensagem: 'Alteração realizada com sucesso.' });
        } else {
            res.status(400).json({ mensagem: `Erro ao alterar aluno.` });
        }
    } catch (error) {
        res.status(500).json({ error: `Erro ao alterar aluno.` });
    }
});


// 6. INICIALIZAÇÃO DO SERVIDOR
app.listen(porta, () => console.log(`API funcionando na porta ${porta}!`));