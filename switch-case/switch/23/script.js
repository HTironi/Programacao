let cargo = prompt('Qual o cargo').toUpperCase;
let horasT = +prompt('Quantia de horas trabalhadas');
let horasE = +prompt('Quantia de horas extras')
let salarioT;
let salarioE;
let salario;

switch (cargo) {
    case "1":
        salarioE = horasE * 35;
        salarioT = horasT * 25;
        alert("Programador Júnior")


        break;
    case "2":
        salarioE = horasE * 40;
        salarioT = horasT * 60;
        alert("Programador Pleno")
        break;
    case "3":
        salarioE = horasE * 60;
        salarioT = horasT * 90;
        alert("Programador Senior")
        break;
    default:
        alert("Dados invalidos");
}
salario = salarioE + salarioT
alert(`voce trabalhou ${horasT} horas e fez ${horasE} horas extras \n voce ganhou ${salarioT} e ${salarioE} de extra e no total ${salario}`)