let code = ~~prompt('Qual o codigo ("100, 200, 300")').toUpperCase;

switch (code) {
    case "100":
        alert("Mouse, 50 reais");
        break;

    case "200":
        alert("Teclado, 80 reais");
        break;

    case "300":
        alert("Monitor, 900 reais");
        break;

    default:
        alert("Codigo de produto invalido");
}