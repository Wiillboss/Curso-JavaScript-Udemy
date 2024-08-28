let num1 = 1 
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // boa pratica é não fazer incremento ou decremento dentro de comparações
console.log(num1 === num2)