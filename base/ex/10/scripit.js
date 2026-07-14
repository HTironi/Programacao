let pesoOr = Number(prompt("Qual o seu atual peso"));
let pesoMenos = (pesoOr-((pesoOr*20)/100)).toFixed(3);
let pesoMais = (pesoOr+((pesoOr*15)/100)).toFixed(3);
alert (`Se você engordar 15% você terá: ${pesoMais} Kg
    Se você emagrecer 20% você terá: ${pesoMenos} Kg`)