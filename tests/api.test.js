const request = require("supertest");
const app = require("../backend/server");
const db = require("../backend/database/db");

beforeEach(async () => {
  await db.query("DELETE FROM alunos");
});

afterAll(async () => {
  await db.end();
});

describe("API de Alunos", () => {


    test("GET /api/usuarios deve retornar lista", async () => {
    const res = await request(app).get("/api/usuarios");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });


  test("POST /api/usuarios deve criar aluno", async () => {
    const res = await request(app)
      .post("/api/usuarios")
      .send({
        nome: "Teste",
        idade: 20
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe("Teste");
  });


  test("POST /api/usuarios deve falhar sem nome", async () => {
    const res = await request(app)
      .post("/api/usuarios")
      .send({
        idade: 20
      });

    expect(res.statusCode).toBe(400);
  });


  test("GET /api/usuarios/:id deve retornar aluno", async () => {
    const create = await request(app)
      .post("/api/usuarios")
      .send({ nome: "João", idade: 18 });

    const id = create.body.id;

    const res = await request(app).get(`/api/usuarios/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("João");
  });


  test("GET /api/usuarios/999 deve retornar 404", async () => {
    const res = await request(app).get("/api/usuarios/999");

    expect(res.statusCode).toBe(404);
  });


  test("PUT /api/usuarios/:id deve atualizar aluno", async () => {
    const create = await request(app)
      .post("/api/usuarios")
      .send({ nome: "Antes", idade: 15 });

    const id = create.body.id;

    const res = await request(app)
      .put(`/api/usuarios/${id}`)
      .send({ nome: "Depois", idade: 16 });

    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("Depois");
  });


  test("DELETE /api/usuarios/:id deve remover aluno", async () => {
    const create = await request(app)
      .post("/api/usuarios")
      .send({ nome: "Excluir", idade: 22 });

    const id = create.body.id;

    const res = await request(app).delete(`/api/usuarios/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.mensagem).toBe("Aluno removido");
  });

});