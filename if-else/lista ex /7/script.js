let idade = number(prompt("Qual a sua idade"));
let preco = 20;

if (idade <= 10){
    prompt(`o preço é de ${preco/2}`)
}
else if (idade > 10 ){
    prompt(`o preco é de ${preco} `)
}
else {
    prompt("Invalido")
}