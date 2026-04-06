const db = require('../db');

async function seed() {
    try {
        await db.query('DELETE FROM alunos');

        await db.query(`
            INSERT INTO alunos (nome, idade) VALUES
            ('João', 17),
            ('Maria', 16),
            ('Carlos', 18),
            ('Ana', 17);
        `);

        console.log('Banco populado com sucesso!');
    } catch (erro) {
        console.error('Erro ao rodar seed:', erro);
    } finally {
        process.exit();
    }
}

seed();