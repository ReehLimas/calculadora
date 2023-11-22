let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");
let valor5 = document.querySelector("#valor5");
let valor6 = document.querySelector("#valor6");
let valor7 = document.querySelector("#valor7");
let valor8 = document.querySelector("#valor8");
let valor9 = document.querySelector("#valor9");
let valor0 = document.querySelector("#alor0");
let valor = document.querySelector("#valor");
let resultado = document.querySelector("#resultado")

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor0.value), Number(valor1.value));
});

function Soma(a, b){
    let somar = a + b;
    resultado.innerHTML = somar;
}
function div(a, b){
    let dividir = a / b;
    resultado.innerHTML = dividir;
}
function subtracao(a, b){
    let subtrair = a-b;
    resultado.innerHTML = subtrair;
}
function mult(a, b){
    let multi = a * b;
    resultado.innerHTML = multi;
}