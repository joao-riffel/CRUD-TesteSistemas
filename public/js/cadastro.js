async function cadastrar() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, idade })
    });

    alert('Aluno cadastrado!');
}