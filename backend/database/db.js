const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'escola_crud',
    password: 'root',
    port: 5432
});

pool.connect()
    .then(() => console.log("Conectando no banco:", pool.options.database))
    .catch(err => console.error('Erro na conexão', err));

module.exports = pool;