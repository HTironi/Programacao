let gado = Number(prompt("Quantas cabeças de gado?"));
let herdeiros = Number(prompt("Quantos herdeiros"));
let total = ((gado-((gado/15)*100))%herdeiros);
alert (`Sobraram ${total} cabeças de gado.`);