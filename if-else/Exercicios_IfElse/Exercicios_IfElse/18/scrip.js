let nota1 = +prompt("Nota1")
let nota2 = +prompt("Nota2")
let media = (nota1+nota2)/2

if (media>7) {
   alert(`${media} aprovado`)
}
else if (media>5 && media<6.9){
   alert(`${media} recuperação`)
}
else{
   alert(`${media} reprovado`)
}