/*
    Hoisting é quando uma variável sobre o içamento (é levada para cima - mover a declaração para o topo).
    No caso abaixo, se for comentada a linha de declaração da variável, vai ocorrer um erro visto que não vai existir declaração de VAR.
    Sem o comenário ocorre o HOISTING e mesmo a declaração está sendo feito apenas na linha posterior a aplicação vai funcionar.
    Mesmo dentro de uma função, ela sofre o içamento
    Esse feito de HOISTING, não ocorre com a declaração de LET.

*/
console.log('a =',a)
var a =2
console.log('a =',a)

function teste(){
    console.log('b= ',b)
    var b = 3
    console.log('b =',b)
}

teste()