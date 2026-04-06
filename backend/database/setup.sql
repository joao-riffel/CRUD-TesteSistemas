CREATE DATABASE escola_crud;

\c escola_crud;

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INTEGER NOT NULL
);

INSERT INTO alunos (nome, idade) VALUES
('João', 17),
('Maria', 16),
('Carlos', 18),
('Ana', 17),
('Fernanda', 16),
('Lucas', 18);

DELETE FROM alunos;
