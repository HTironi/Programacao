let n1 = +prompt('Qual o primeiro numero');
let n2 = +prompt('Qual o segundo numero');
let operacao = prompt('Qual a operação desejada');

switch (operacao) {

    case "soma":
        alert(`O resultado ${n1 + n2}`);
        break;
    case "subtração":
        alert(`O resultado ${n1 - n2}`);
        break;
    case "multiplicação":
        alert(`O resultado ${n1 * n2}`);
        break;
    case "divisão":
        alert(`O resultado ${n1 / n2}`);
        break;

    default:
        alert('informações invalidas')
}