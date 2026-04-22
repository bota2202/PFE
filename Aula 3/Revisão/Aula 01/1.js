function criarTarefa() {
  let prioridade;
  let periodo;

  prioridade = document.getElementById("prioridade").value;
  prioridades=[1,2,3,4,5,6,7,8,9,10]

  if(prioridade != "" && !prioridades.includes(Number(prioridade))){
    document.getElementById('erro1').textContent='Deve ser entre 1 e 10!'
    setTimeout(()=>{
        document.getElementById('erro1').textContent=''
    },3000)
    return
  }

  if(!prioridade){
    document.getElementById('erro1').textContent='Preencha o campo!'
    setTimeout(()=>{
        document.getElementById('erro1').textContent=''
    },3000)
    return
  }

  let hora = new Date().getHours();

  if (hora >= 0 && hora < 12) {
    periodo = "manha";
  } else if (hora >= 12 && hora < 18) {
    periodo = "tarde";
  } else {
    periodo = "noite";
  }

  let mensagem = document.getElementById("exercicio1");

  if ((periodo === "manha" || periodo === "tarde") && prioridade > 8) {
    mensagem.textContent = "CRÍTICO";
  } else if ((periodo === "manha" || periodo === "tarde") && prioridade >= 7) {
    mensagem.textContent = "IMPORTANTE";
  } else {
    mensagem.textContent = " POUCO IMPORTANTE";
  }
  setTimeout(() => {
    mensagem.textContent = "";
  }, 3000);
}
