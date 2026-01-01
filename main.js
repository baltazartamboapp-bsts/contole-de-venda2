import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
console.log("MAIN.JS CARREGADO COM SUCESSO");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Se NÃO estiver logado
    if (!window.location.pathname.includes("login")) {
      window.location.href = "/controle-de-venda2/login.html";
    }
  } else {
    console.log("Usuário autenticado:", user.email);
  }
});
const firebaseConfig = {
  apiKey: "AIzaSyABVuwoNX3JsZGHgycG7CtTCsGnlKI67r0",
  authDomain: "controle-de-venda-993ee.firebaseapp.com",
  projectId: "controle-de-venda-993ee",
  storageBucket: "controle-de-venda-993ee.firebasestorage.app",
  messagingSenderId: "99668722986",
  appId: "1:99668722986:web:aa7516531a61094e024a53",
  measurementId: "G-5BNHFN5W1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const btnLogin = document.getElementById("btnLogin");
const msg = document.getElementById("loginMsg");

if (btnLogin) {
  btnLogin.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        msg.innerText = "Login feito com sucesso!";
        console.log("Usuário:", userCredential.user);
      })
      .catch((error) => {
        msg.innerText = "Erro: " + error.message;
        console.error(error);
      });
  });
}

console.log("firebase pronto");
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








