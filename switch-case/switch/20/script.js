let cargo = prompt('Qual o cargo').toUpperCase;
let horas = +prompt('Quantia de horas trabalhadas');

switch (moeda) {
    case "1":
        alert(`O salario é de ${horas*35} reais`);
        break;
    case "2":
        alert(`O salario é de ${horas*55} reais`);
        break;
    case "3":
        alert(`O salario é de ${horas*80} reais`);
        break;
    case "4":
        alert(`O salario é de ${horas*95} reais`);
        break;
    case "5":
        alert(`O salario é de ${horas*130} reais`);
        break;


    
    default:
        alert("Dados invalidos");
}
