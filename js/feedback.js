const formularioFeedback = document.getElementById('form-feedback');
const campoNota = document.getElementById('nota');
const saidaNota = document.getElementById('valor-nota');

campoNota.addEventListener('input', function () {
  saidaNota.textContent = campoNota.value;
});

formularioFeedback.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const sessao = obterSessao();
  if (!sessao) {
    window.location.replace('404.html?tipo=auth');
    return;
  }

  const frequenciaSelecionada = document.querySelector('input[name="frequencia"]:checked');
  const preferencias = [];

  document.querySelectorAll('input[name="preferencias"]:checked').forEach(function (item) {
    preferencias.push(item.value);
  });

  if (!frequenciaSelecionada) {
    const mensagem = document.getElementById('mensagem-feedback');
    mensagem.textContent = 'Escolha uma frequência de visita.';
    mensagem.className = 'mensagem erro';
    return;
  }

  const feedback = {
    usuario: sessao.nome,
    servico: document.getElementById('servico').value,
    frequencia: frequenciaSelecionada.value,
    nota: campoNota.value,
    preferencias: preferencias,
    comentario: document.getElementById('comentario').value.trim(),
    enviadoEm: new Date().toLocaleString('pt-BR')
  };

  salvarFeedback(feedback);
  window.location.href = 'meus-dados.html';
});
