let nota = number(prompt("Qual a sua nota"))
let presenca = number(prompt("Qual a sua % de fequencia "))

if (nota > 6 && presenca >= 75){
    prompt("Aprovado")
}
else if (nota > 6 && presenca < 75){
    prompt("reprovado por faltas")
}
else if (nota < 6 && presenca > 75){
    prompt("reprovado por nota")
}
else if (nota < 6 && presenca < 75){
    prompt("reprovado por ambos")
}
else {
    prompt("Invalido")
}