let hora = prompt('Qual o periodo ("M, T ou N")').toUpperCase;

switch (hora) {
    case "M":
        alert("Bom dia");
        break;

    case "T":
        alert("Boa tarde");
        break;

    case "N":
        alert("Boa noite");
        break;

    default:
        alert("Dados invalidos");
}
