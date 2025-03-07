function convertBookToTr(book) {
    return `
        <tr>
            <td>${book.titulo}</td>
            <td>J.R.R. Tolkien</td>
            <td>01/02/2025</td>
            <td>01/03/2025</td>
            <td><button class="btn btn-warning btn-sm" onclick="alterarLivroAlugado(this)">Alterar</button></td>
        </tr>
    `
};

async function listarLivros() {
    const listalivros = document.getElementById("listalivros")

    await fetch("http://localhost:8080/livros")
        .then((response) => response.json())
        .then((jsonresponse) => {
            listalivros.innerHTML = jsonresponse.map(convertBookToTr).join("")
        })
        .catch((error) => "listarLivros: " + error);
};  