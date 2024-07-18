// Obtenha a lista de produtos do localStorage
var produtos = JSON.parse(localStorage.getItem('produtos')) || [];

// Selecione a div de produtos
var produtosDiv = document.getElementById('produtos');

// Para cada produto na lista, crie um elemento HTML para exibi-lo
produtos.forEach(function(produto) {
  // Crie um novo elemento div
  var produtoDiv = document.createElement('div');

  // Defina o conteúdo do div
  produtoDiv.innerHTML = '<h3>' + produto.nome + '</h3>' +
                         '<span>' + produto.preco + '</span>'
                         
                         ;

  // Adicione o div à div de produtos
  produtosDiv.appendChild(produtoDiv);
});

// Limpe a lista de produtos no localStorage
localStorage.setItem('produtos', JSON.stringify([]));


// Selecione o botão pelo ID
var botao = document.getElementById('submitButton');

// Adicione um ouvinte de eventos ao botão
botao.addEventListener('click', function(event) {
  // Previna a ação padrão do botão (enviar o formulário)
  event.preventDefault();

  // Exiba um alerta
  alert('Compra Finalizada!');
});