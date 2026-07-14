let valorInicial = +prompt("Qual o valor inicial");
let valorFinal = +prompt("Qual o valor Final");
let CustoKWh = +prompt("Qual o valor do KWh");

let diferenca = valorFinal-valorInicial
if (diferenca>150) {
   let custo = ((diferenca-150)*1.2)+150;
} else if (diferenca<150) {
   let custo = diferenca
}
else{
   alert (`Coloque uma resposta válida`);
}
let preco = diferenca*CustoKWh
alert(`O consumo é de ${diferenca} kw`)
alert(`O gasto é de ${preco.toFixed(2)} reais`)