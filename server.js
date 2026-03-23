const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/usuarios', usuariosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});