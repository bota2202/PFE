function verificarCompromissos() {
    let agendaHorarios = [8, 12, 25, 15, -2, 20];
    let resultado = "";
    let contagemValidos = 0; 

    for (let horario of agendaHorarios) {
        if (horario >= 0 && horario <= 23) {
            resultado += `Compromisso agendado para as ${horario}h<br>`;
            contagemValidos++; 
        } else {
            resultado += `Atenção: O horário ${horario}h é inválido!<br>`;
        }
    }
    resultado += `<br>Total de compromissos válidos: ${contagemValidos}`;
    document.getElementById("exercicio5").innerHTML = resultado;
}
