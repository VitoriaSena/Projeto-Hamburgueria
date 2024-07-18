// Função para renderizar os produtos na lista de produtos
function renderizarProdutos() {
    // Selecione a div de produtos
    var produtosDiv = document.getElementById('produtos');

    // Limpe o conteúdo atual da div de produtos
    produtosDiv.innerHTML = '';

    // Obtenha a lista de produtos do localStorage
    var produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Para cada produto na lista, crie um elemento e adicione-o à div de produtos
    produtos.forEach(function(produto) {
        // Crie um elemento de parágrafo para exibir o nome e o preço do produto
        var produtoPara = document.createElement('p');
        produtoPara.textContent = produto.nome + ' - ' + produto.preco;

        // Adicione o parágrafo à div de produtos
        produtosDiv.appendChild(produtoPara);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Obtenha a lista de produtos do localStorage
    var produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Primeiro, selecione todos os botões
    var botoes = document.querySelectorAll('.botão');

    // Em seguida, adicione um evento de clique a cada botão
    botoes.forEach(function(botao) {
      botao.addEventListener('click', function(event) {
        // Obtenha o div que contém o botão clicado
        var produtoDiv = event.target.parentNode;

        // Obtenha as informações do produto
        var nome = produtoDiv.querySelector('.NomeH').innerText;
        var preco = produtoDiv.querySelector('.preco').innerText;

        // Crie um objeto para armazenar as informações do produto
        var produto = {
          nome: nome,
          preco: preco
        };

        // Adicione o novo produto à lista
        produtos.push(produto);

        // Salve a lista atualizada de produtos no localStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));

        // Atualize a lista de produtos na interface do usuário
        renderizarProdutos();
      });
    });

    // Ao carregar a página, renderize os produtos na lista de produtos
    renderizarProdutos();

    // Aqui começa o código para buscar os produtos
    fetch('http://localhost:8080/produtos')
        .then(response => response.json())
        .then(data => {
            const containerTop = document.getElementById('container-top');
            const containerBottom = document.getElementById('container-bottom');

            let html = '';
            data.forEach(produto => {
                html += `
                <div data-name="${produto.name}">
                    <img class="allimg ${produto.quantidade <= 0 ? 'unavailable' : ''}" src="./img/${produto.name.replace(/\s+/g, '_')}.png" alt="Imagem de ${produto.name}">
                    <h3 class="NomeH">${produto.name}</h3>
                    <span class="preco">${produto.price}</span>
                    <button class="botão">+</button>
                    <p class="paragrafos">${produto.description}</p>
                </div>
                `;
            });

            if (containerTop.children.length < 3) {
                containerTop.innerHTML = html;
            } else {
                containerBottom.innerHTML = html;
            }
        })
        .catch(error => console.error('Erro ao buscar produtos:', error));
});