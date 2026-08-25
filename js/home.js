// Mostra uma mensagem simples quando o visitante passa pelos destaques.
var destaques = document.querySelectorAll('.destaques div');
destaques.forEach(function (destaque) {
  destaque.addEventListener('click', function () {
    destaque.style.transform = 'scale(1.05)';
    setTimeout(function () { destaque.style.transform = 'scale(1)'; }, 300);
  });
});
