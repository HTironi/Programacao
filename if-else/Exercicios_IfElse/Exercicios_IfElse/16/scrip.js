let renda = +prompt("Renda familiar");
let media = +prompt("media do aluno");

if (media>=9 && renda>=2000) {
   alert("100%");
}
else if (media>=8 && renda>=3500) {
   alert("50%");
}
else if (media>=7 && renda>=5000) {
   alert("25%");
}
else{
   alert("sem bolsa");
}