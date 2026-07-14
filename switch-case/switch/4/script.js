let pedido = prompt('Qual o pedido ("1, 2, 3")').toUpperCase;

switch (pedido) {
    case "1":
        alert("Agua");
        break;

    case "2":
        alert("Refrigerante");
        break;

    case "3":
        alert("Suco");
        break;

    default:
        alert("Codigo de bebida invalido");
}
