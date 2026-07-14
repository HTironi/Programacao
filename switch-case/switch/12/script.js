let categoria = prompt('Qual categoria (A B C)').toUpperCase;
let valor = +prompt('quantidade de energia consumida em kWh');


switch (categoria) {
    case "A":
        desconto = valor*0.05;
        break;
    case "B":
        desconto = valor*0.10;
        break;
    case "C":
        desconto = valor*0.15;
        break;


    default:
        alert("Dados invalidos");
}
alert(`${valor-desconto}`)
