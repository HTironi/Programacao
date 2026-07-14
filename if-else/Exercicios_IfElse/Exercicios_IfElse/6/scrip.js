let altura =  +prompt("Qual a sua altura? ");
let sexo =  prompt("Qual o seu genero? ").toUpperCase();
if ( sexo == "M" ) {
   let pesoIdeal = (72.7*altura)-58;
} else if ( sexo == "F" ) {
   let pesoIdeal = (62.1*altura)-44.7
}
else{
   alert (`Coloque uma resposta válida`);
}
alert (`Seu peso ideal é de ${pesoIdeal}`);
