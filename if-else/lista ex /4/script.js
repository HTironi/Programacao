let l1 = Number(prompt());
let l2 = Number(prompt());
let l3 = Number(prompt());

if (l1 == l2 == l3 ) {
    alert("Equilatero")
}
else if (l1 == l2 || l2 == l3 || l1 == l3) {
    alert("Isosceles")
}
else{
    alert ("Escaleno")
}