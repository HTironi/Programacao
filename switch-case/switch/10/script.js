let distancia = prompt('Qual a distancia ');
let medida = prompt('Qual a medida (M/Km) ').toUpperCase;

switch (medida) {
    case "M":
        alert(`${distancia*0.001}`)
        break;
    case "KM":
        alert(`${distancia*1000}`)
        break;

    default:
        alert("Transporteinvalido");
}

