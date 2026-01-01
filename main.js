// Lista de produtos
const produtos = [];

// Adicionar produto
function adicionarProduto() {
    const nome = prompt("Nome do produto:");
    const preco = parseFloat(prompt("Preço do produto:"));
    const quantidade = parseInt(prompt("Quantidade:"));

    if(nome && !isNaN(preco) && !isNaN(quantidade)) {
        const produto = { nome, preco, quantidade };
        produtos.push(produto);
        atualizarLista();
    } else {
        alert("Dados inválidos!");
    }
}

// Atualizar tabela de produtos
function atualizarLista() {
    const tbody = document.getElementById("produto-lista");
    tbody.innerHTML = "";
    produtos.forEach((produto, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
            <td>
                <button onclick="editarProduto(${index})">Editar</button>
                <button onclick="removerProduto(${index})">Remover</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Editar produto
function editarProduto(index) {
    const produto = produtos[index];
    const nome = prompt("Editar nome:", produto.nome);
    const preco = parseFloat(prompt("Editar preço:", produto.preco));
    const quantidade = parseInt(prompt("Editar quantidade:", produto.quantidade));

    if(nome && !isNaN(preco) && !isNaN(quantidade)) {
        produtos[index] = { nome, preco, quantidade };
        atualizarLista();
    } else {
        alert("Dados inválidos!");
    }
}

// Remover produto
function removerProduto(index) {
    if(confirm("Deseja realmente remover este produto?")) {
        produtos.splice(index, 1);
        atualizarLista();
    }
}

// Placeholder para futuras funcionalidades
function criarVenda() { /* Futuro */ }
function iniciarScanner() { /* Futuro */ }
function converterMoeda() { /* Futuro */ }
