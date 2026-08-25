var servicos = [
  { nome: 'Corte tradicional', descricao: 'Corte feito na tesoura ou máquina, com acabamento.', preco: 'R$ 35,00' },
  { nome: 'Barba completa', descricao: 'Aparar, desenhar e finalizar a barba com cuidado.', preco: 'R$ 25,00' },
  { nome: 'Corte + barba', descricao: 'O combo para renovar o visual de uma só vez.', preco: 'R$ 55,00' },
  { nome: 'Corte infantil', descricao: 'Atendimento especial para crianças.', preco: 'R$ 30,00' }
];

var lista = document.getElementById('lista-servicos');
servicos.forEach(function (servico) {
  var card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = '<h2>' + servico.nome + '</h2><p>' + servico.descricao + '</p><p class="preco">' + servico.preco + '</p><button class="botao">Tenho interesse</button>';
  lista.appendChild(card);
});

document.querySelectorAll('.card .botao').forEach(function (botao) {
  botao.addEventListener('click', function () {
    document.getElementById('mensagem-servico').textContent = 'Obrigado! Fale conosco para agendar seu horário.';
  });
});
