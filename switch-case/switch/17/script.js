let categoria = prompt('Qual categoria (R C I)').toUpperCase;
let valor = +prompt('quantidade de energia consumida em kWh');


switch (categoria) {
    case "R":
        conta = valor*0.82;
        break;
    case "C":
        desconto = valor*0.95;
        break;
    case "I":
        desconto = valor*0.73;
        break;


    default:
        alert("Dados invalidos");
}
alert(`${valor-desconto}`)
