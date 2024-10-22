// estratégia de usar valor padrão, caso o primiero valor seja falso
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log( soma1(), soma1(3), soma1(1,2,3), soma1(0, 0, 0))
/*
Sobre o console acima:
1° caso acaba sendo FALSO pois não está informando os parametros
2° caso tem apenas um parametro (3), os demais são falsos e consequentemente um (1), totalizando (5)
3° caso tem todos os parametros (1, 2, 3) totalizando (6)
4° caso acaba por ser FALSO por conta do valor zero (0)
*/

// estrategia 2, 3 e 4  para gerar valor pradão 
function soma2(a, b, c){
    a = a !== undefined ? a :1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log( soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão  do es2015
function soma3( a = 1, b = 1, c = 1){
    return a + b + c
}

console.log( soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
