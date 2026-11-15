const CHAVE_USUARIO = 'navalha_usuario';
const CHAVE_SESSAO = 'navalha_sessao';
const CHAVE_FEEDBACK = 'navalha_feedback';
const CHAVE_AGENDAMENTO = 'navalha_agendamento';

function lerJSON(chave) {
  try {
    return JSON.parse(localStorage.getItem(chave));
  } catch (erro) {
    localStorage.removeItem(chave);
    return null;
  }
}

function salvarUsuario(usuario) {
  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

function obterUsuario() {
  return lerJSON(CHAVE_USUARIO);
}

function salvarSessao(sessao) {
  localStorage.setItem(CHAVE_SESSAO, JSON.stringify(sessao));
}

function obterSessao() {
  const sessao = lerJSON(CHAVE_SESSAO);
  const valida = sessao && typeof sessao.nome === 'string' && sessao.nome.trim()
    && typeof sessao.login === 'string' && sessao.login.trim();
  if (!valida) localStorage.removeItem(CHAVE_SESSAO);
  return valida ? sessao : null;
}

function encerrarSessao() {
  localStorage.removeItem(CHAVE_SESSAO);
}

function salvarFeedback(feedback) {
  localStorage.setItem(CHAVE_FEEDBACK, JSON.stringify(feedback));
}

function obterFeedback() {
  return lerJSON(CHAVE_FEEDBACK);
}

function prepararNovoUsuario() {
  localStorage.removeItem(CHAVE_SESSAO);
  localStorage.removeItem(CHAVE_FEEDBACK);
  localStorage.removeItem(CHAVE_AGENDAMENTO);
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

// Máscara do enunciado: (+55)XX-XXXXXXXX  (XX = DDD)
// limite = quantos números vêm depois do hífen (8 nos dois campos).
function formatarTelefone(texto, limite) {
  const possuiCodigoPais = texto.startsWith('(+55)');
  let numeros = somenteNumeros(possuiCodigoPais ? texto.slice(5) : texto);

  if (!possuiCodigoPais && numeros.length === limite + 4 && numeros.startsWith('55')) {
    numeros = numeros.slice(2);
  }

  numeros = numeros.slice(0, 2 + limite);

  if (numeros.length === 0) return '';
  if (numeros.length <= 2) return '(+55)' + numeros;
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
