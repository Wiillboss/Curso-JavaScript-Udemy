let a = 7;
let b = 94;

let temporario = a;
a = b;
b = temporario;

// Também é possível fazer da forma descirta abaixo.
//[a,b] = [b,a];

console.log("Fazendo a trova de valores de duas variáveis.");
console.log("A principio a variável (A) vale 4 e a (B) vale 94.");
console.log("Agora a variável (A) vale: "+a+".");
console.log("E a variável (B) vale: "+b+".");


