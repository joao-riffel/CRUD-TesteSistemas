const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function carregarAluno() {
    const res = await fetch(`/api/usuarios/${id}`);
    const aluno = await res.json();

    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
}

async function salvar() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    await fetch(`/api/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, idade })
    });

    alert('Aluno atualizado!');
    window.location.href = 'lista.html';
}

carregarAluno();