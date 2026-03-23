async function carregar() {
    const res = await fetch('/api/usuarios');
    const alunos = await res.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    alunos.forEach(a => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${a.nome} (${a.idade}) 
            <button onclick="deletar(${a.id})">X</button>
        `;
        lista.appendChild(li);
    });
}

async function deletar(id) {
    await fetch(`/api/usuarios/${id}`, { method: 'DELETE' });
    carregar();
}

carregar();