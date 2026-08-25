const formularioLogin = document.getElementById('form-login');
const mensagemLogin = document.getElementById('mensagem-login');

formularioLogin.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value;
  const usuario = obterUsuario();

  mensagemLogin.className = 'mensagem erro';

  if (!usuario) {
    mensagemLogin.textContent = 'Nenhum usuário cadastrado neste navegador. Faça o cadastro primeiro.';
    return;
  }

  if (login !== usuario.login || senha !== usuario.senha) {
    mensagemLogin.textContent = 'Login ou senha não conferem com o cadastro salvo.';
    return;
  }

  salvarSessao({ nome: usuario.nome, login: usuario.login });
  window.location.href = 'painel.html';
});
