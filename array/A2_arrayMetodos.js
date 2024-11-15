const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // POP remove o ULTIMO elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // PUSH adiciona um novo elemento no FINAL do array 
console.log(pilotos)

pilotos.shift() // SHIFT remove o PRIMEIRO elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //UNSHIFT adiciona um novo elemento no INÌCIO do array
console.log(pilotos)

// SPLICE pode adicionar e remover elementos

// adicionando com splice
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionando a partir do indice 2 (indice zero a partir do indice 2)
console.log(pilotos)

// removendo com splice
pilotos.splice(3, 1) // removendo 1 elemento a partir do indice 3
console.log(pilotos)

/*
    Abaixo está sendo usado o SLICE.
    SLICE cria um novo array a partir de outro array,
     no caso abaixo está criando um array a partir do array PILOTOS e está selecionando todosa partir do indice 2 
*/

const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

/*
    Abaixo está sendo usando o SLICE novamente, entretanto com dois argumentos.
    O primeiro determina onde vai iniciar (no caso indice 1).
    O segundo o inidice final, entretanto esse indice NÃO ENTRA NO NOVO ARRAY.
*/
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)