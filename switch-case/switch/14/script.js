let saldo = 1000;
let operacao = prompt('Qual a operação desejada');
let saque;
let deposito;

switch (operacao) {
    case "1":
        alert(`${saldo}`);
        break;
    case "2":
        saque = +prompt('Quanto voce quer sacar?');

        if (saque > saldo) {
            alert('saldo insuficiente')
        }  

        else {
            (`saque aprovado, novo saldo: ${saldo}`)
            saldo = saldo - saque;
            break;
        }

    case "3":
        deposito = +prompt('Quanto voce quer depositar?')
        saldo = saldo + deposito
        alert(`O novo saldo é de ${saldo}`)
        break;

    default:
        alert("Regiao invalida");
}

