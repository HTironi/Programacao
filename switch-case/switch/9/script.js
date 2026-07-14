let meio = prompt('Qual o meio de transporte (C,M,B)').toUpperCase;

switch (meio) {
    case "C":
        alert(`Carro`)
        break;
    case "M":
        alert(`Moto`)
        break;
    case "B":
        alert(`Barco`)
        break;

    default:
        alert("Transporteinvalido");
}

