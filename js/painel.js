const resumoAgendamento = document.getElementById('resumo-agendamento');
const mensagemAgendamento = document.getElementById('mensagem-agendamento');
const linkAgendar = document.getElementById('link-agendar');
const botaoCancelarAgendamento = document.getElementById('botao-cancelar-agendamento');

function atualizarResumoAgendamento() {
  const sessao = obterSessao();
  const agendamento = lerJSON(CHAVE_AGENDAMENTO);
  const agendamentoDoUsuario = sessao
    && agendamento
    && agendamento.login === sessao.login
    && typeof agendamento.servico === 'string'
    && typeof agendamento.barbeiro === 'string'
    && typeof agendamento.data === 'string'
    && typeof agendamento.horario === 'string';

  if (!agendamentoDoUsuario) {
    resumoAgendamento.textContent = 'Você ainda não tem um horário marcado.';
    linkAgendar.classList.remove('oculto');
    botaoCancelarAgendamento.classList.add('oculto');
    return;
  }

  const partesData = agendamento.data.split('-');
  const dataFormatada = partesData.length === 3
    ? partesData.reverse().join('/')
    : agendamento.data;

  resumoAgendamento.textContent = agendamento.servico
    + ' com ' + agendamento.barbeiro
    + ' em ' + dataFormatada
    + ' às ' + agendamento.horario + '.';
  linkAgendar.classList.add('oculto');
  botaoCancelarAgendamento.classList.remove('oculto');
}

botaoCancelarAgendamento.addEventListener('click', function () {
  const sessao = obterSessao();
  const agendamento = lerJSON(CHAVE_AGENDAMENTO);

  if (!sessao || !agendamento || agendamento.login !== sessao.login) {
    atualizarResumoAgendamento();
    return;
  }

  localStorage.removeItem(CHAVE_AGENDAMENTO);
  atualizarResumoAgendamento();
  mensagemAgendamento.textContent = 'Agendamento cancelado.';
  mensagemAgendamento.className = 'mensagem sucesso';
});

atualizarResumoAgendamento();
