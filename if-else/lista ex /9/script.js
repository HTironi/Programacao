let saldo = number(prompt("Qual o saldo"));

if (saldo <= 500){
    prompt("nenhum saldo adicional")
}
else if (saldo <= 1000){
    prompt(saldo*1.3)
}
else {
    prompt(saldo*1.5)
}