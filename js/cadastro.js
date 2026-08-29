const formularioCadastro = document.getElementById('form-cadastro');
const campoNome = document.getElementById('nome');
const campoCPF = document.getElementById('cpf');
const campoCEP = document.getElementById('cep');
const campoTelefone = document.getElementById('telefone');
const campoCelular = document.getElementById('celular');
const mensagemCadastro = document.getElementById('mensagem-cadastro');

campoCPF.addEventListener('input', function () {
  campoCPF.value = formatarCPF(campoCPF.value);
});

campoCEP.addEventListener('input', function () {
  campoCEP.value = formatarCEP(campoCEP.value);
});

campoTelefone.addEventListener('input', function () {
  campoTelefone.value = formatarTelefone(campoTelefone.value);
});

campoCelular.addEventListener('input', function () {
  campoCelular.value = formatarTelefone(campoCelular.value);
});

campoCEP.addEventListener('blur', buscarEnderecoPorCEP);

async function buscarEnderecoPorCEP() {
  const cep = somenteNumeros(campoCEP.value);
  const erroCEP = document.getElementById('erro-cep');

  if (cep.length !== 8) {
    erroCEP.textContent = 'Digite um CEP com 8 números.';
    return;
  }

  erroCEP.textContent = 'Buscando endereço...';

  try {
    const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
    const endereco = await resposta.json();

    if (endereco.erro) {
      erroCEP.textContent = 'CEP não encontrado.';
      return;
    }

    document.getElementById('rua').value = endereco.logradouro || '';
    document.getElementById('bairro').value = endereco.bairro || '';
    document.getElementById('cidade').value = endereco.localidade || '';
    document.getElementById('uf').value = endereco.uf || '';
    erroCEP.textContent = '';
  } catch (erro) {
    erroCEP.textContent = 'Não foi possível consultar o CEP agora.';
  }
}

function escreverErro(id, texto) {
  document.getElementById(id).textContent = texto;
}

function limparErros() {
  document.querySelectorAll('.erro-campo').forEach(function (elemento) {
    elemento.textContent = '';
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

  if (somenteNumeros(cep).length !== 8 || !document.getElementById('cidade').value) {
    marcarErro(campoCEP, 'erro-cep', 'Informe um CEP válido e aguarde o preenchimento do endereço.');
  }

  if (somenteNumeros(telefone).replace(/^55/, '').length !== 10) {
    marcarErro(campoTelefone, 'erro-telefone', 'Use o formato (+55)XX-XXXXXXXX.');
  }

  if (somenteNumeros(celular).replace(/^55/, '').length !== 10) {
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

  salvarUsuario(usuario);
  formularioCadastro.reset();
  mensagemCadastro.textContent = 'Cadastro salvo no navegador. Agora você já pode fazer login.';
  mensagemCadastro.className = 'mensagem sucesso';
  document.getElementById('ir-login').classList.remove('oculto');
});
