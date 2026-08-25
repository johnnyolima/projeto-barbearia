const CHAVE_USUARIO = 'navalha_usuario';
const CHAVE_SESSAO = 'navalha_sessao';
const CHAVE_FEEDBACK = 'navalha_feedback';

function salvarUsuario(usuario) {
  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

function obterUsuario() {
  const dados = localStorage.getItem(CHAVE_USUARIO);
  return dados ? JSON.parse(dados) : null;
}

function salvarSessao(sessao) {
  localStorage.setItem(CHAVE_SESSAO, JSON.stringify(sessao));
}

function obterSessao() {
  const dados = localStorage.getItem(CHAVE_SESSAO);
  return dados ? JSON.parse(dados) : null;
}

function encerrarSessao() {
  localStorage.removeItem(CHAVE_SESSAO);
}

function salvarFeedback(feedback) {
  localStorage.setItem(CHAVE_FEEDBACK, JSON.stringify(feedback));
}

function obterFeedback() {
  const dados = localStorage.getItem(CHAVE_FEEDBACK);
  return dados ? JSON.parse(dados) : null;
}

function somenteNumeros(texto) {
  return texto.replace(/\D/g, '');
}

function formatarCPF(texto) {
  const numeros = somenteNumeros(texto).slice(0, 11);
  return numeros
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function formatarCEP(texto) {
  const numeros = somenteNumeros(texto).slice(0, 8);
  return numeros.replace(/(\d{5})(\d)/, '$1-$2');
}

function formatarTelefone(texto) {
  const numeros = somenteNumeros(texto).replace(/^55/, '').slice(0, 10);
  if (numeros.length <= 2) {
    return numeros ? '(+55)' + numeros : '';
  }
  return '(+55)' + numeros.slice(0, 2) + '-' + numeros.slice(2);
}

function validarCPF(cpf) {
  const numeros = somenteNumeros(cpf);

  if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i += 1) {
    soma += Number(numeros[i]) * (10 - i);
  }

  let primeiroDigito = (soma * 10) % 11;
  if (primeiroDigito === 10) {
    primeiroDigito = 0;
  }

  if (primeiroDigito !== Number(numeros[9])) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i += 1) {
    soma += Number(numeros[i]) * (11 - i);
  }

  let segundoDigito = (soma * 10) % 11;
  if (segundoDigito === 10) {
    segundoDigito = 0;
  }

  return segundoDigito === Number(numeros[10]);
}
