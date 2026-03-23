const service = require('../services/usuariosService');

function criar(req, res) {
    const { nome, idade } = req.body;
    const aluno = service.criarAluno(nome, idade);
    res.status(201).json(aluno);
}

function listar(req, res) {
    res.json(service.listarAlunos());
}

function buscar(req, res) {
    const id = parseInt(req.params.id);
    const aluno = service.buscarPorId(id);

    if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json(aluno);
}

function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const aluno = service.atualizarAluno(id, req.body);

    if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json(aluno);
}

function deletar(req, res) {
    const id = parseInt(req.params.id);
    const ok = service.deletarAluno(id);

    if (!ok) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json({ mensagem: 'Aluno removido' });
}

module.exports = {
    criar,
    listar,
    buscar,
    atualizar,
    deletar
};