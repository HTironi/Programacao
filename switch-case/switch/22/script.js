let modelo = prompt('Qual a modelo de nota? )').toUpperCase;
let nota1;
let nota2;
let nota3;
let nota4;
let media;

switch (modelo) {
    case "1":
        nota1 = +prompt('qual a nota 1');
        nota2 = +prompt('qual a nota 2');
        media = (nota1 + nota2) / 2

        break;
    case "2":
        nota1 = +prompt('qual a nota 1');
        nota2 = +prompt('qual a nota 2');
        nota3 = +prompt('qual a nota 3');
        media = (nota1 + nota2) / 3
        break;

    case "3":
        nota1 = +prompt('qual a nota 1');
        nota2 = +prompt('qual a nota 2');
        nota3 = +prompt('qual a nota 3');
        nota4 = +prompt('qual a nota 4');
        media = (nota1 + nota2 + nota3 + nota4) / 4
        break;


    default:
        alert("Dados invalidos");
}

alert(`a media do aluno é de ${media.toFixed(1)}`)