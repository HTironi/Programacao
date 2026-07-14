let salario = Number(prompt("Qual o seu salário?"));

if (salario<=2500) {
   alert("Você esta isento")
}
else if (salario<=5000) {
   alert(salario*0.15+" em impostos")
}
else {
   alert(salario*0.27+" em impostos")
}