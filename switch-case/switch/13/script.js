let regiao = ~~prompt('Qual a regiao ("1, 2, 3, 4, 5")');


switch (regiao) {
    case "1":
        alert("Norte");
        break;
    case "2":
        alert("Nordeste");
        break;
    case "3":
        alert("Centro-Oeste");
        break;
    case "4":
        alert("Suldeste");
        break;
    case "5":
        alert("Sul");
        break;
    default:
        alert("Regiao invalida");
}

