let frio = "rgb(0,190,252)";
let quente = "rgb(255, 123, 0)";

function transformar() {
    let celsius = Number(document.getElementById('celsius').value);
    let farenheit = document.getElementById('farenheit');
    let kelvin=document.getElementById('kelvin');

    if (isNaN(celsius) || celsius=="") {
        farenheit.innerHTML = "Digite uma temperatura válida!";
        farenheit.style.color="black";
        return;
    }

    let temperaturaK=(celsius+273);
    let temperatura = (celsius * 1.8) + 32;
    farenheit.innerHTML = temperatura + " °F";
    kelvin.innerHTML=temperaturaK + " °K"

    farenheit.style.color="black";
    kelvin.style.color="black";

    if (temperatura < 80) {
        document.getElementById('ex1').style.backgroundColor = frio;
    } else {
        document.getElementById('ex1').style.backgroundColor = quente;
    }
}
