// Inicializa o toque e o teclado sem iniciar a troca automática de imagens.
if (window.bootstrap) {
  new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: false,
    ride: false
  });
} else {
  console.error('Não foi possível carregar o Bootstrap. Verifique a conexão para usar o carrossel.');
}
