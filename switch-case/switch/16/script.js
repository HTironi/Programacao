let codigo = prompt('Qual Plano (B, P, E)').toUpperCase;
let meses = +prompt('quantidade de meses contratados');


switch (codigo) {
    case "B":
        alert(`Básico \n 39,90 R$ por mes \n ${meses} meses custam ${meses*39.90}`)
        break;
    case "P":
        alert(`Profissional \n R$ 69,90 por mes \n ${meses} meses custam ${meses*69.90}`)
        break;
    case "E":
        alert(`Empresarial \n R$ R$ 119,90 por mes \n ${meses} meses custam ${meses*119.90}`)
        break;

    default:
        alert("Dados invalidos");
}


