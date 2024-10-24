/*
A função SOMA vai funcionar normalmente, mesmo que sua declaração esteja após a chamada da mesma.
Quando se defire uma função dessa forma, o interpretador do JS primeiro carrega as funções e as deixa preparadas para execução do código.
ATENÇÂO, isso só é possivel com funções  nomeadas, caso seja uma anonima, ela deve ser chamada OBRIGATOTIRAMENT após sua declaração.
*/
console.log(soma(3, 4))

// function declaration (função nomeada)
function soma (x,y){
    return x + y
}



// function expression (função anonima)
//A chamada da função abaixo (caso retire o comentário), vai acarretar erro, a sua chamada deve ser após a declaração da função
// console.log(sub(3,54))
//O mesmo ocorre para uma NAMED FUNCTION EXPRESSION 

const sub = function (x,y){
    return x - y
}
console.log(sub(5,4))

// named function expression
const mult = function mult(x,y) {
    return x * y
}
console.log(mult(4,5))
