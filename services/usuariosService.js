const db = require('../database/db');

function criarAluno(nome, idade) {
    const aluno = {
        id: db.getNextId(),
        nome,
        idade
    };

    db.alunos.push(aluno);
    return aluno;
}

function listarAlunos() {
    return db.alunos;
}

function buscarPorId(id) {
    return db.alunos.find(a => a.id === id);
}

function atualizarAluno(id, dados) {
    const aluno = buscarPorId(id);
    if (!aluno) return null;

    aluno.nome = dados.nome ?? aluno.nome;
    aluno.idade = dados.idade ?? aluno.idade;

    return aluno;
}

function deletarAluno(id) {
    const index = db.alunos.findIndex(a => a.id === id);
    if (index === -1) return false;

    db.alunos.splice(index, 1);
    return true;
}

module.exports = {
    criarAluno,
    listarAlunos,
    buscarPorId,
    atualizarAluno,
    deletarAluno
};