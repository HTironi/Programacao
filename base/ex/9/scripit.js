let preco = Number(prompt("Qual o preço total do produto?"));
let desconto = ((preco/100)*5).toFixed(2);
alert (`O valor total do produto com desconto é de ${desconto} reais.`);