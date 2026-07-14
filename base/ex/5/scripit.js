let HoraPedreiro = Number(prompt("Quantas horas foram usadas pelo pedreiro?"));
let HoraPintor = Number(prompt("Quantas horas foram usadas pelo pintor?"));
let CustoPe = HoraPedreiro*20
let CustoPi = HoraPintor*16
let CustoT = CustoPe+CustoPi
alert (`O custo do pintor é ${CustoPi.toFixed(2)} reais`);
alert (`O custo do pedreiro é ${CustoPe.toFixed(2)} reais`);
alert (`O total da obra é de ${CustoT.toFixed(2)} reais`);