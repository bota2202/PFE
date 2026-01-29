function calcular() {
  let salario = document.getElementById("salario");
  let aluguel = document.getElementById("aluguel");
  let alimentacao = document.getElementById("alimentacao");
  let lazer = document.getElementById("lazer");
  let erro = document.getElementById("erro2");

  if (
    salario.value == "" ||
    aluguel.value == "" ||
    alimentacao.value == "" ||
    lazer.value == ""
  ) {
    erro.textContent = "Preencha os campos!";
    setTimeout(() => {
      erro.textContent = "";
    }, 3000);
    return;
  }

  if (
    isNaN(salario.value) ||
    isNaN(aluguel.value) ||
    isNaN(alimentacao.value) ||
    isNaN(lazer.value)
  ) {
    erro.textContent = "Digite apenas números!";
    setTimeout(() => {
      erro.textContent = "";
    }, 3000);
    return;
  }
  let despesas=Number(aluguel.value)+Number(alimentacao.value)+Number(lazer.value);
  document.getElementById('exercicio2').textContent="Você fica com " + (salario.value-despesas);
  setTimeout(()=>{
    document.getElementById('exercicio2').textContent="";
  },3000)
}
