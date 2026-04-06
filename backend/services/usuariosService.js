const db = require('../database/db');

async function criarAluno(nome, idade) {
    const result = await db.query(
        'INSERT INTO alunos (nome, idade) VALUES ($1, $2) RETURNING *',
        [nome, idade]
    );

    return result.rows[0];
}

async function listarAlunos() {
    const result = await db.query('SELECT * FROM alunos ORDER BY id');
    return result.rows;
}

async function buscarPorId(id) {
    const result = await db.query(
        'SELECT * FROM alunos WHERE id = $1',
        [id]
    );

    return result.rows[0];
}

async function atualizarAluno(id, dados) {
    const result = await db.query(
        'UPDATE alunos SET nome = $1, idade = $2 WHERE id = $3 RETURNING *',
        [dados.nome, dados.idade, id]
    );

    return result.rows[0];
}

async function deletarAluno(id) {
    const result = await db.query(
        'DELETE FROM alunos WHERE id = $1',
        [id]
    );

    return result.rowCount > 0;
}

module.exports = {
    criarAluno,
    listarAlunos,
    buscarPorId,
    atualizarAluno,
    deletarAluno
};