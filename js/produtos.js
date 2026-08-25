var produtos = [
  { nome: 'Pomada modeladora', descricao: 'Ajuda a modelar o cabelo com acabamento natural.', preco: 'R$ 28,00', icone: '✦' },
  { nome: 'Óleo para barba', descricao: 'Deixa a barba macia e com um perfume agradável.', preco: 'R$ 22,00', icone: '◆' },
  { nome: 'Shampoo masculino', descricao: 'Limpeza suave para o cabelo e o couro cabeludo.', preco: 'R$ 30,00', icone: '●' }
];

var lista = document.getElementById('lista-produtos');
produtos.forEach(function (produto) {
  var card = document.createElement('article');
  card.className = 'produto';
  card.innerHTML = '<div class="produto-imagem">' + produto.icone + '</div><h2>' + produto.nome + '</h2><p>' + produto.descricao + '</p><p class="preco">' + produto.preco + '</p><button class="botao">Tenho interesse</button>';
  lista.appendChild(card);
});

document.querySelectorAll('.produto .botao').forEach(function (botao) {
  botao.addEventListener('click', function () {
    document.getElementById('mensagem-produto').textContent = 'Produto selecionado! Consulte a disponibilidade na barbearia.';
  });
});
