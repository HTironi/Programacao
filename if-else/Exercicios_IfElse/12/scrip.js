let A = +prompt("LadoA")
let B = +prompt("LadoB")
let C = +prompt("LadoC")

if ( (A+B>C) && (A+C>B) && (B+C>A) ) {
   alert("existe")
}
else { 
   alert("Não existe")
}