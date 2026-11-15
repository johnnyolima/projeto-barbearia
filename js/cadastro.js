const formularioCadastro = document.getElementById('form-cadastro');
const campoNome = document.getElementById('nome');
const campoCPF = document.getElementById('cpf');
const campoCEP = document.getElementById('cep');
const campoTelefone = document.getElementById('telefone');
const campoCelular = document.getElementById('celular');
const campoNumero = document.getElementById('numero');
const campoEmail = document.getElementById('email');
const mensagemCadastro = document.getElementById('mensagem-cadastro');
let cepConsultado = '';
let consultaCEPAtual = 0;

document.querySelectorAll('.erro-campo[id]').forEach(function (erro) {
  const campo = document.getElementById(erro.id.replace('erro-', ''));
  if (campo) campo.setAttribute('aria-describedby', erro.id);
});

document.querySelectorAll('.botao-olho').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const campoSenha = document.getElementById(botao.dataset.alvo);
    const mostrandoSenha = campoSenha.type === 'text';

    campoSenha.type = mostrandoSenha ? 'password' : 'text';
    botao.setAttribute('aria-label', mostrandoSenha ? 'Mostrar senha' : 'Ocultar senha');
    botao.title = mostrandoSenha ? 'Mostrar senha' : 'Ocultar senha';
  });
});

campoCPF.addEventListener('input', function () {
  campoCPF.value = formatarCPF(campoCPF.value);
});

campoCEP.addEventListener('input', function () {
  campoCEP.value = formatarCEP(campoCEP.value);

  if (somenteNumeros(campoCEP.value) !== cepConsultado) {
    limparEndereco();
  }
});

campoTelefone.addEventListener('input', function () {
  campoTelefone.value = formatarTelefone(campoTelefone.value, 8);
});

campoCelular.addEventListener('input', function () {
  campoCelular.value = formatarTelefone(campoCelular.value, 8);
});

campoCEP.addEventListener('blur', buscarEnderecoPorCEP);

function limparEndereco() {
  document.getElementById('rua').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('uf').value = '';
  cepConsultado = '';
}

async function buscarEnderecoPorCEP() {
  const cep = somenteNumeros(campoCEP.value);
  const erroCEP = document.getElementById('erro-cep');
  const numeroConsulta = ++consultaCEPAtual;

  limparEndereco();

  if (cep.length !== 8) {
    erroCEP.textContent = 'Digite um CEP com 8 números.';
    return;
  }

  erroCEP.textContent = 'Buscando endereço...';

  try {
    const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json/');

    if (!resposta.ok) {
      throw new Error('Falha na consulta do CEP.');
    }

    const endereco = await resposta.json();

    if (numeroConsulta !== consultaCEPAtual || cep !== somenteNumeros(campoCEP.value)) {
      return;
    }

    if (endereco.erro) {
      erroCEP.textContent = 'CEP não encontrado.';
      return;
    }

    const valores = [endereco.logradouro, endereco.bairro, endereco.localidade, endereco.uf];
    ['rua', 'bairro', 'cidade', 'uf'].forEach(function (id, indice) {
      document.getElementById(id).value = valores[indice] || '';
    });
    if (valores.some(function (valor) { return !valor; })) {
      limparEndereco();
      erroCEP.textContent = 'O CEP não retornou o endereço completo.';
      return;
    }
    cepConsultado = cep;
    erroCEP.textContent = '';
  } catch (erro) {
    if (numeroConsulta === consultaCEPAtual) {
      limparEndereco();
      erroCEP.textContent = 'Não foi possível consultar o CEP agora.';
    }
  }
}

function escreverErro(id, texto) {
  document.getElementById(id).textContent = texto;
}

function limparErros() {
  document.querySelectorAll('.erro-campo').forEach(function (elemento) {
    elemento.textContent = '';
  });
  document.querySelectorAll('[aria-invalid="true"]').forEach(function (campo) {
    campo.removeAttribute('aria-invalid');
  });
  mensagemCadastro.textContent = '';
  mensagemCadastro.className = 'mensagem oculto';
}

formularioCadastro.addEventListener('submit', function (evento) {
  evento.preventDefault();
  limparErros();

  const nome = campoNome.value.trim();
  const cpf = campoCPF.value;
  const cep = campoCEP.value;
  const telefone = campoTelefone.value;
  const celular = campoCelular.value;
  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmacao = document.getElementById('confirmacao').value;
  let formularioValido = true;
  let primeiroCampoInvalido = null;

  function marcarErro(campo, idErro, texto) { /* envia a mensagem de erro do cadastro */ 
    escreverErro(idErro, texto);
    campo.setAttribute('aria-invalid', 'true');
    formularioValido = false;
    if (!primeiroCampoInvalido) {
      primeiroCampoInvalido = campo;
    }
  }

  if (nome.length < 15 || nome.length > 80 || !/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(nome)) {
    marcarErro(campoNome, 'erro-nome', 'Use de 15 a 80 caracteres, apenas letras e espaços.');
  }

  if (!validarCPF(cpf)) {
    marcarErro(campoCPF, 'erro-cpf', 'CPF inválido. Confira os números digitados.');
  }

  if (somenteNumeros(cep).length !== 8 || cepConsultado !== somenteNumeros(cep)) {
    marcarErro(campoCEP, 'erro-cep', 'Informe um CEP válido e aguarde o preenchimento do endereço.');
  }

  if (!campoNumero.value.trim()) {
    marcarErro(campoNumero, 'erro-numero', 'Informe o número do endereço.');
  }

  if (!campoEmail.value.trim() || !campoEmail.checkValidity()) {
    marcarErro(campoEmail, 'erro-email', 'Informe um e-mail válido.');
  }

  // Fixo: (+55)XX-XXXXXXXX (8 números depois do hífen)
  if (!/^\(\+55\)\d{2}-\d{8}$/.test(telefone)) {
    marcarErro(campoTelefone, 'erro-telefone', 'Use o formato (+55)XX-XXXXXXXX.');
  }

  // Celular: formato estrito exigido no enunciado.
  if (!/^\(\+55\)\d{2}-\d{8}$/.test(celular)) {
    marcarErro(campoCelular, 'erro-celular', 'Use o formato (+55)XX-XXXXXXXX.');
  }

  if (!/^[A-Za-z]{6}$/.test(login)) {
    marcarErro(document.getElementById('login'), 'erro-login', 'O login deve ter exatamente 6 letras.');
  }

  if (!/^[A-Za-z]{8}$/.test(senha)) {
    marcarErro(document.getElementById('senha'), 'erro-senha', 'A senha deve ter exatamente 8 letras.');
  }

  if (confirmacao !== senha) {
    marcarErro(document.getElementById('confirmacao'), 'erro-confirmacao', 'A confirmação deve ser igual à senha.');
  }

  if (!formularioValido) {    /* Se o formulário não for True mande mensagem de erro */
    mensagemCadastro.textContent = 'Corrija os campos indicados antes de salvar.';
    mensagemCadastro.className = 'mensagem erro';
    primeiroCampoInvalido.focus();
    return;
  }

  const usuario = {
    nome: nome,
    cpf: cpf,
    cep: cep,
    rua: document.getElementById('rua').value,
    bairro: document.getElementById('bairro').value,
    cidade: document.getElementById('cidade').value,
    uf: document.getElementById('uf').value,
    numero: document.getElementById('numero').value.trim(),
    complemento: document.getElementById('complemento').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefone: telefone,
    celular: celular,
    login: login,
    senha: senha
  };

  prepararNovoUsuario();
  salvarUsuario(usuario);
  formularioCadastro.reset();
  limparEndereco();
  mensagemCadastro.textContent = 'Cadastro salvo no navegador. Agora você já pode fazer login.';
  mensagemCadastro.className = 'mensagem sucesso';
  document.getElementById('ir-login').classList.remove('oculto');
});
