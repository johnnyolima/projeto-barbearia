const formularioHorarios = document.getElementById('form-horarios');
const campoDataAtendimento = document.getElementById('data-atendimento');
const mensagemHorarios = document.getElementById('mensagem-horarios');

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
campoDataAtendimento.min = ano + '-' + mes + '-' + dia;

formularioHorarios.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const sessao = obterSessao();
  if (!sessao) {
    window.location.replace('404.html?tipo=auth');
    return;
  }

  if (!formularioHorarios.checkValidity()) {
    formularioHorarios.reportValidity();
    return;
  }

  const horarioSelecionado = document.getElementById('horario').value;
  const dataEHora = new Date(campoDataAtendimento.value + 'T' + horarioSelecionado + ':00');

  if (dataEHora <= new Date()) {
    mensagemHorarios.textContent = 'Escolha uma data e um horário futuros.';
    mensagemHorarios.className = 'mensagem erro';
    return;
  }

  const agendamento = {
    login: sessao.login,
    servico: document.getElementById('servico-horario').value,
    barbeiro: document.getElementById('barbeiro').value,
    data: campoDataAtendimento.value,
    horario: horarioSelecionado,
    observacao: document.getElementById('observacao').value.trim()
  };

  localStorage.setItem(CHAVE_AGENDAMENTO, JSON.stringify(agendamento));
  mensagemHorarios.textContent = 'Horário marcado com sucesso.';
  mensagemHorarios.className = 'mensagem sucesso';
});
