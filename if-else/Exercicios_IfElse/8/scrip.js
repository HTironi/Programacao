let tipoCombustivel = prompt("Qual o tipo de combustivel").toUpperCase();
let Tanque = +prompt("Qual a capacidade do tanque");

if (tipoCombustivel=="G") {
   let custo = tanque*5.65
} else if (tipoCombustivel=="E") {
   let custo = tanque*4.38
}
else{
   alert (`Coloque uma resposta válida`);
}
alert(`O gasto é de ${custo.toFixed(2)} reais`)