let regiao = ~~prompt('Qual a sigla da regiao ').toUpperCase;


switch (regiao) {
    case "S":
        alert("Sul");
        alert('O frete é de 20 reais');

        break;
    case "NO":
        alert("Nordeste");
        alert('O frete é de 40 reais');

        break;
    case "CO":
        alert("Centro-Oeste");
        alert('O frete é de 35 reais');

        break;
    case "SE":
        alert("Suldeste");
        alert('O frete é de 25 reais');

        break;
    case "N":
        alert("Norte");
        alert('O frete é de 45 reais');
        break;
    default:
        alert("Regiao invalida");
}

