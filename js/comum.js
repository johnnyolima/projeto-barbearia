const CHAVE_TEMA = 'navalha_tema';
const CHAVE_FONTE = 'navalha_fonte';

function aplicarPreferencias() {
  const tema = localStorage.getItem(CHAVE_TEMA);
  const escala = Number(localStorage.getItem(CHAVE_FONTE)) || 1;

  document.body.classList.toggle('tema-claro', tema === 'claro');
  document.documentElement.style.setProperty('--escala-fonte', escala);
}

function configurarAcessibilidade() {
  const botaoTema = document.querySelector('[data-acao="alternar-tema"]');
  const botaoAumentar = document.querySelector('[data-acao="aumentar-fonte"]');
  const botaoDiminuir = document.querySelector('[data-acao="diminuir-fonte"]');

  if (botaoTema) {
    botaoTema.addEventListener('click', function () {
      const temaClaroAtivo = document.body.classList.toggle('tema-claro');
      localStorage.setItem(CHAVE_TEMA, temaClaroAtivo ? 'claro' : 'escuro');
    });
  }

  function alterarFonte(valor) {
    let escala = Number(localStorage.getItem(CHAVE_FONTE)) || 1;
    escala = Math.min(1.2, Math.max(0.9, escala + valor));
    escala = Number(escala.toFixed(1));
    localStorage.setItem(CHAVE_FONTE, escala);
    document.documentElement.style.setProperty('--escala-fonte', escala);
  }

  if (botaoAumentar) {
    botaoAumentar.addEventListener('click', function () {
      alterarFonte(0.1);
    });
  }

  if (botaoDiminuir) {
    botaoDiminuir.addEventListener('click', function () {
      alterarFonte(-0.1);
    });
  }
}

function configurarSessao() {
  const sessao = obterSessao();
  const areaNome = document.getElementById('usuario-logado');
  const botaoSair = document.getElementById('botao-sair');
  const linksAreaCliente = document.querySelectorAll('nav a[href="login.html"]');

  linksAreaCliente.forEach(function (link) {
    link.href = sessao ? 'painel.html' : 'login.html';
  });

  if (areaNome) {
    areaNome.classList.add('oculto');
  }

  if (document.body.dataset.restrita === 'true' && !sessao) {
    window.location.replace('404.html?tipo=auth');
    return;
  }

  if (sessao && areaNome) {
    areaNome.textContent = 'Olá, ' + sessao.nome;
    areaNome.classList.remove('oculto');
  }

  if (sessao && botaoSair) {
    botaoSair.classList.remove('oculto');
    botaoSair.addEventListener('click', function () {
      encerrarSessao();
      window.location.href = 'login.html';
    });
  }
}

function configurarPaginaErro() {
  const titulo = document.getElementById('titulo-erro');
  const texto = document.getElementById('texto-erro');

  if (!titulo || !texto) {
    return;
  }

  const parametros = new URLSearchParams(window.location.search);
  if (parametros.get('tipo') === 'auth') {
    titulo.textContent = 'Acesso restrito';
    texto.textContent = 'Faça login antes de acessar esta página.';
  }
}

aplicarPreferencias();
configurarAcessibilidade();
configurarSessao();
configurarPaginaErro();
