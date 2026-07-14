let categoria = prompt('Qual categoria (R, C ou I)').toUpperCase;
let energia = +prompt('quantidade de energia consumida em kWh');
let valor;

switch (categoria) {
    case "R":
        valor = energia*0.75;
        break;
    case "C":
        valor = energia*0.92;
        break;
    case "I":
        valor = energia*0.68;
        break;

    default:
        alert("Dados invalidos");
}
alert(`${valor}`)
