//operador NEW junto de uma função, seu resultado é um objeto
//array literal é usando com colchetes [], assim como um objeto literal é usado com chaves {}
console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//abaixo segue reatribuir com notação literal
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // visto que não existe esse indíce no array, seu resultado não é um erro, mas sim UNDEFINED


aprovados[3] = 'Paulo' // forma mais comun (apropriada) de substituir um elemento no array
aprovados.push('Abia') //adicionando um elemento na última posição do array
console.log(aprovados.length) //length é usado para identificar tamanhos, neste caso do array

aprovados[9] = 'Rafael'
console.log(aprovados.length)
/*
    Com relação ao console e a adicição do novo elemento acima.
    Até aqui o array tem 10 pocições, entretanto só tem valores das pocições zero (0) até a cinco(4),
     após um intervado de quatro (4) posições sem registro, a posição nove (9) retorna a ter registro.
    Neste caso o tamanho o array é dez(10), as posições que não tem valor é definidas como UNDEFINED. 
        
*/
console.log(aprovados [8] === undefined) // pergunta se o valor da posição é UNDEFINED. Sim é.
console.log(aprovados [8] === null) // pergunta se o valor da posição é NULL. Não é.
console.log(aprovados)