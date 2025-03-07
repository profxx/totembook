const apiBaseUrl = 'http://localhost:8080/livros';

async function carregarLivros() {
    try {
        const response = await fetch(apiBaseUrl);
        const livros = await response.json();
        const listaLivros = document.getElementById('listaLivros');
        listaLivros.innerHTML = '';

        livros.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = `${livro.id} - ${livro.titulo} ${livro.autor}`;
            listaLivros.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar livros:', error);
    }
}

async function alugarLivro() {
    const livroId = document.getElementById('livroId').value;
    if (!livroId) {
        alert('Informe um ID de livro');
        return;
    }

    try {
        const response = await fetch(`${apiBaseUrl}/alugar/${livroId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert('Livro alugado com sucesso!');
            carregarLivros();
        } else {
            alert('Erro ao alugar livro');
        }
    } catch (error) {
        console.error('Erro ao alugar livro:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarLivros);