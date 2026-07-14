let notaP = +prompt("Nota da prova")
let notaE = +prompt("Nota da entrevista")
let experiencia = +prompt("anos de experiencia")
let media = (notaE+notaP)/2

if (notaP>=8 && notaE>=8 && experiencia>=2) {
   alert(`${media} de media aprovado imediatamente`)
}
else if (media>=7 && experiencia>=1){
   alert(`${media} de media banco de talentos`)
}
else{
   alert(`${media} de media reprovado`)
}