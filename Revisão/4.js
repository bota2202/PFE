function contarDias() {
    let hoje = new Date();
    let eventoInput = document.getElementById("dataEvento").value;

    if (!eventoInput) {
        document.getElementById("exercicio4").textContent = "Escolha uma data do evento!";
        return;
    }
    let evento = new Date(eventoInput);
    let diffMs = evento - hoje; 
    let diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); 
    if (diffDias >= 0) {
        document.getElementById("exercicio4").textContent = 
            `Faltam ${diffDias} dias para o seu compromisso!`;
    } else {
        document.getElementById("exercicio4").textContent = 
            `O evento já passou!`;
    }
}
