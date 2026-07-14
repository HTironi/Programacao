let notaP = +prompt("Nota da prova")
let notaE = +prompt("Nota da entrevista")
let artigos = +prompt("artigos publicados")
let media = (notaE+notaP)/2

if (notaP>=80 && notaE>=70 && artigos>=2) {
   alert(`${media} de media aprovado imediatamente`)
}
else if (media>=75 && artigos>=1){
   alert(`${media} de media lista de espera`)
}
else{
   alert(`${media} de media reprovado`)
}