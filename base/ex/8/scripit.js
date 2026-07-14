let total= Number(prompt("Qual o preço total do produto?"));
let pago= Number(prompt("Qual o preço pago no produto?"));
let desconto = ((total*pago)/100).toFixed(2)
let descontoreais = (total-pago).toFixed(2)
alert(`O total de desconto no produto é de ${desconto}% 
    O desconto foi de ${descontoreais} Reais`);