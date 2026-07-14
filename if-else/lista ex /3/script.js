let n1 = Number(prompt());
let n2 = Number(prompt());
let sinal = prompt("");
let resultado;

if (sinal == "-") {
    resultado = n1-n2
}
if (sinal == "/") {
    resultado = n1/n2
}
if (sinal == "*") {
    resultado = n1*n2
}
else {
    resultado = n1+n2
}
alert(`O resultado é ${resultado}`)