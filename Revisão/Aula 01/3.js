function formatar() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();
    let palavras = nome.split(/\s+/);
    let quantidadePalavras = palavras.length;
    let formatado = nome.replace(/[^\w\s]/gi, " ").toUpperCase();

    document.getElementById("exercicio3").innerHTML = 
    formatado +
    "<br>Quantidade de palavras: " + quantidadePalavras;
}
