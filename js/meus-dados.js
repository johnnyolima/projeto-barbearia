const feedback = obterFeedback();
const areaDados = document.getElementById('dados-feedback');
const mensagemDados = document.getElementById('mensagem-dados');

function adicionarDado(titulo, valor) {
  const termo = document.createElement('dt');
  const descricao = document.createElement('dd');
  termo.textContent = titulo;
  descricao.textContent = valor || 'Não informado';
  areaDados.appendChild(termo);
  areaDados.appendChild(descricao);
}

if (!feedback) {
  areaDados.classList.add('oculto');
  mensagemDados.textContent = 'Você ainda não enviou o formulário de feedback.';
  mensagemDados.className = 'mensagem';
} else {
  adicionarDado('Usuário', feedback.usuario);
  adicionarDado('Serviço', feedback.servico);
  adicionarDado('Frequência', feedback.frequencia);
  adicionarDado('Nota', feedback.nota + '/10');
  adicionarDado('Preferências', feedback.preferencias.length ? feedback.preferencias.join(', ') : 'Nenhuma');
  adicionarDado('Comentário', feedback.comentario);
  adicionarDado('Enviado em', feedback.enviadoEm);
}
