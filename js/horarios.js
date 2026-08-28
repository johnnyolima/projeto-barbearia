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

  const agendamento = {
    servico: document.getElementById('servico-horario').value,
    barbeiro: document.getElementById('barbeiro').value,
    data: campoDataAtendimento.value,
    horario: document.getElementById('horario').value,
    observacao: document.getElementById('observacao').value.trim()
  };

  localStorage.setItem('navalha_agendamento', JSON.stringify(agendamento));
  mensagemHorarios.textContent = 'Horário marcado com sucesso.';
  mensagemHorarios.className = 'mensagem sucesso';
});