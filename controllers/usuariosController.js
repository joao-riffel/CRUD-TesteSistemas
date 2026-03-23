const service = require('../services/usuariosService');

async function criar(req, res) {
    const { nome, idade } = req.body;
    const aluno = await service.criarAluno(nome, idade);
    res.status(201).json(aluno);
}

async function listar(req, res) {
    const alunos = await service.listarAlunos();
    res.json(alunos);
}

async function buscar(req, res) {
    const id = parseInt(req.params.id);
    const aluno = await service.buscarPorId(id);

    if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json(aluno);
}

async function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const aluno = await service.atualizarAluno(id, req.body);

    if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json(aluno);
}

async function deletar(req, res) {
    const id = parseInt(req.params.id);
    const ok = await service.deletarAluno(id);

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