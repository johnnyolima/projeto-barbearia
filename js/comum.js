const CHAVE_TEMA = 'navalha_tema';
const CHAVE_FONTE = 'navalha_fonte';

function atualizarTextoBotaoTema() {
  const botaoTema = document.querySelector('[data-acao="alternar-tema"]');

  if (!botaoTema) {
    return;
  }

  const temaClaroAtivo = 
    document.body.classList.contains('tema-claro');

  botaoTema.checked = temaClaroAtivo;
}

function aplicarPreferencias() {
  const tema = localStorage.getItem(CHAVE_TEMA);
  const escala = Number(localStorage.getItem(CHAVE_FONTE)) || 1;

  document.body.classList.toggle('tema-claro', tema === 'claro');
  atualizarTextoBotaoTema();
  document.documentElement.style.setProperty('--escala-fonte', escala);
}

function configurarAcessibilidade() {
  const botaoTema = document.querySelector('[data-acao="alternar-tema"]');
  const botaoAumentar = document.querySelector('[data-acao="aumentar-fonte"]');
  const botaoDiminuir = document.querySelector('[data-acao="diminuir-fonte"]');
  const barra = document.querySelector('.barra-acessibilidade');

  if (barra) barra.setAttribute('role', 'region');
  if (botaoAumentar) botaoAumentar.setAttribute('aria-label', 'A+ aumentar fonte');
  if (botaoDiminuir) botaoDiminuir.setAttribute('aria-label', 'A- diminuir fonte');

  if (botaoTema) {
    botaoTema.addEventListener('change', function () {
      document.body.classList.toggle('tema-claro', this.checked);
      localStorage.setItem(CHAVE_TEMA, this.checked ? 'claro' : 'escuro');
    });
  }

  function alterarFonte(valor) {
    let escala = Number(localStorage.getItem(CHAVE_FONTE)) || 1;
    // A fonte pode variar de 80% até 150%.
    escala = Math.min(1.5, Math.max(0.8, escala + valor));
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

function indicarPaginaAtual() {
  const atual = location.pathname.endsWith('/') ? location.pathname + 'index.html' : location.pathname;
  document.querySelectorAll('.menu a[href]').forEach(function (link) {
    if (link.pathname === atual) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function configurarMenuMovel() {
  const controle = document.getElementById('menu-hamburguer');
  const botao = document.querySelector('.botao-hamburguer');
  const menu = document.querySelector('.menu');
  if (!controle || !botao || !menu) return;

  menu.id = menu.id || 'menu-principal';
  botao.setAttribute('role', 'button');
  botao.setAttribute('tabindex', '0');
  botao.setAttribute('aria-controls', menu.id);

  function atualizar() {
    botao.setAttribute('aria-expanded', String(controle.checked));
    botao.setAttribute('aria-label', controle.checked ? 'Fechar menu' : 'Abrir menu');
  }

  botao.addEventListener('click', function () { setTimeout(atualizar, 0); });
  botao.addEventListener('keydown', function (evento) {
    if (evento.key !== 'Enter' && evento.key !== ' ') return;
    evento.preventDefault();
    controle.checked = !controle.checked;
    atualizar();
  });
  atualizar();
}

function configurarSessao() {
  const menuAreaCliente = document.getElementById('menu-area-cliente')
  const linkEntrar = document.getElementById('link-entrar')
  const sessao = obterSessao();
  const areaNome = document.getElementById('usuario-logado');
  const botaoSair = document.getElementById('botao-sair');
  

  if (menuAreaCliente){
    menuAreaCliente.hidden = !sessao;
  }
  if (linkEntrar) {
    linkEntrar.hidden = Boolean(sessao)
  }

  if (areaNome) {
    areaNome.classList.add('oculto');
  }

  if (document.body.dataset.restrita === 'true' && !sessao) {
    window.location.replace('404.html?tipo=auth');
    return;
  }

  if (sessao && areaNome) {
    const saudacao = 'Olá, ' + sessao.nome;
    areaNome.textContent = saudacao;
    areaNome.setAttribute('aria-label', saudacao + ' - abrir painel');
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
  const codigo = document.getElementById('codigo-erro');

  if (!titulo || !texto) {
    return;
  }

  const parametros = new URLSearchParams(window.location.search);
  if (parametros.get('tipo') === 'auth') {
    document.title = 'Navalha de Ouro | Acesso restrito';
    codigo.textContent = '401';
    titulo.textContent = 'Acesso restrito';
    texto.textContent = 'Faça login antes de acessar esta página.';
  }
}

aplicarPreferencias();
configurarAcessibilidade();
configurarMenuMovel();
indicarPaginaAtual();
configurarSessao();
configurarPaginaErro();
