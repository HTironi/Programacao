let categoria = prompt('Qual o setor (A B C D)').toUpperCase;
let ingressos = +prompt('quantidade de ingressos comprados');

switch (categoria) {
    case "A":
        alert(`O custo é de ${ingressos*90}`)
        break;
    case "B":
        alert(`O custo é de ${ingressos*150}`)
        break;
    case "C":
        alert(`O custo é de ${ingressos*250}`)
        break;
    case "D":
        alert(`O custo é de ${ingressos*400}`)
        break;

    
    default:
        alert("Dados invalidos");
}
