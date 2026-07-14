let salario = +prompt("salario")
let prestacao = +prompt("prestação")
let tempo = +prompt("anos de emprego")


if (prestacao <= (salario*0.3) && tempo >= 2 ) {
   alert(`aprovado`)
}

else{
   alert(`reprovado`)
}
