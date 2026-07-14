let moeda = prompt('Qual a moeda (D E L P)').toUpperCase;
let reais = +prompt('quantos reais');

switch (moeda) {
    case "D":
        alert(`Rendeu ${reais/5.60} dollar`);
        break;
    case "E":
        alert(`Rendeu ${reais/6.45} euro`);
        break;
    case "L":
        alert(`Rendeu ${reais/7.55} libras`);
        break;
    case "P":
        alert(`Rendeu ${reais/0.005} pesos`);
        break;

    
    default:
        alert("Dados invalidos");
}
