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

    // Obtenha a lista de produtos do localStorage
    var produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Adicione o novo produto à lista
    produtos.push(produto);

    // Salve a lista atualizada de produtos no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));
  });
});