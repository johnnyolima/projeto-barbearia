var formulario = document.getElementById('form-login');
var mensagem = document.getElementById('mensagem-login');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  // Verifica se os campos de login foram preenchidos.
  if (usuario === '' || senha === '') {
    mensagem.textContent = 'Preencha o usuário e a senha.';
  } else {
    mensagem.textContent = 'Login demonstrativo realizado com sucesso!';
    formulario.reset();
  }
});
