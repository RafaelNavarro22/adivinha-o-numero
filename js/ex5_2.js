var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1 ;
const CHANCES = 6;

console.log(sorteado);

function apostar() {

    let inNumer = document.getElementById("inNumer");
    let outErro = document.getElementById("outErro");
    let outChan = document.getElementById("outChan");
    let outDica = document.getElementById("outDica");



    let numer = Number(inNumer.value);

    if (numer == 0 || isNaN(numer) || numer > 100)  {
        alert("número inválido");
        inNumer.focus();
        return;
    }

    if (numer == sorteado) {
        alert("parabens você acertou")

        btApost.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!!!! Número sorteado = " + sorteado;
    }else if (erros.indexOf(numer) >=0) { alert("você ja apostou esse... digite outro!")}   else {
        erros.push(numer);
        var numErros = erros.length;
        var numChanc = CHANCES - numErros;
        outErro.textContent = numErros + "(" + erros.join(",") + ")" ;
        outChan.textContent = numChanc;

        if (numChanc == 0) {
            alert("Você perdeu");
            btApost.disabled = true;
            btJogar.className = "exibe";
            outDica.textContent = "Número sorteado = " + sorteado;
        }else{
            var dica = numer > sorteado ? " menor" : " maior";
            outDica.textContent = "Dica: tente um número" + dica + " que " + numer;
        }


    }

    inNumer.value = "";
    inNumer.focus();



}

let btApost = document.getElementById("btApost");
btApost.addEventListener("click", apostar);


function jogarNovamente () {
    location.reload();
}
let btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);