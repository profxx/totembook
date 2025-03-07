// Função para excluir um livro do estoque
        function excluirLivroEstoque(button) {
            const row = button.closest('tr');
            row.remove(); // Remove a linha da tabela
        }

        // Função para alterar os dados de um livro alugado
        function alterarLivroAlugado(button) {
            const row = button.closest('tr');
            const titulo = row.cells[0].innerText;
            const autor = row.cells[1].innerText;
            const dataEmprestimo = row.cells[2].innerText;
            const dataDevolucao = row.cells[3].innerText;

            // Ação que você deseja fazer ao alterar
            alert(`Alterando livro: ${titulo}, ${autor}, ${dataEmprestimo}, ${dataDevolucao}`);
        }

        // Array para armazenar os livros em estoque
        let livrosEmEstoque = [
            { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", quantidade: 5 },
            { titulo: "1984", autor: "George Orwell", quantidade: 3 }
        ];

        // Função para atualizar a tabela de livros em estoque
        function atualizarTabelaLivros() {
            const tabela = document.getElementById('tabela-livros').getElementsByTagName('tbody')[0];
            tabela.innerHTML = ''; // Limpar a tabela antes de atualizar

            livrosEmEstoque.forEach(livro => {
                const novaLinha = document.createElement('tr');
                novaLinha.innerHTML = `
                    <td>${livro.titulo}</td>
                    <td>${livro.autor}</td>
                    <td>${livro.quantidade}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="excluirLivroEstoque(this)">Excluir</button></td>
                `;
                tabela.appendChild(novaLinha);
            });
        }

        // Função para cadastrar um novo livro
        function cadastrarLivro(event) {
            event.preventDefault(); // Evitar o envio do formulário (recarregar a página)

            // Coletar os valores dos campos
            const titulo = document.getElementById('titulo').value;
            const autor = document.getElementById('autor').value;
            const quantidade = parseInt(document.getElementById('quantidade').value);

            // Verificar se os dados são válidos
            if (!titulo || !autor || isNaN(quantidade) || quantidade <= 0) {
                alert('Por favor, preencha todos os campos corretamente!');
                return;
            }

            // Adicionar o novo livro ao array de livros
            livrosEmEstoque.push({ titulo, autor, quantidade });

            // Atualizar a tabela
            atualizarTabelaLivros();

            // Limpar os campos do formulário
            document.getElementById('form-cadastrar-livro').reset();
        }

        // Adicionar o evento de envio do formulário
        document.getElementById('form-cadastrar-livro').addEventListener('submit', cadastrarLivro);

        // Atualizar a tabela inicialmente ao carregar a página
        window.onload = atualizarTabelaLivros;