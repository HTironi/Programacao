let QuantosDollar = Number(prompt("Quantos dollares você tem guardados?"))
let cotacao = Number(prompt("Qual a cotação do dollar hoje?"))
let real = (QuantosDollar*cotacao).toFixed(2)
alert (`Você tem ${real} Reais guardados`)