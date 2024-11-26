
const API_URL = 'https://fakestoreapi.com/products';


const categoriasList = document.getElementById('lista_categorias');
const produtosDiv = document.getElementById('produtos');


async function carregarCategorias() {
  const categorias = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  categoriasList.innerHTML = '';
  categorias.forEach((categoria) => {
    const li = document.createElement('li');
    li.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1); 
    li.onclick = () => carregarProdutos(categoria); 
    categoriasList.appendChild(li);
  });
}


async function carregarProdutos(categoria) {
  const response = await fetch(`${API_URL}/category/${categoria}`);
  const produtos = await response.json();

  produtosDiv.innerHTML = '';

  produtos.forEach((produto) => {
    const card = document.createElement('div');
    card.className = 'produto-card';

    card.innerHTML = `
      <img src="${produto.image}" alt="${produto.title}" class="produto-img">
      <h3>${produto.title}</h3>
      <p><strong>R$ ${produto.price.toFixed(2)}</strong></p>
      <button onclick="adicionarAoCarrinho('${produto.title}')">Adicionar ao Carrinho</button>
    `;

    produtosDiv.appendChild(card);
  });
}


function adicionarAoCarrinho(produto) {
  alert(`Produto "${produto}" adicionado ao carrinho!`);
}


function mudarTela(telaId) {
  document.querySelectorAll('.screen').forEach((tela) => {
    tela.classList.remove('active');
  });
  document.getElementById(telaId).classList.add('active');
}


document.addEventListener('DOMContentLoaded', carregarCategorias);
