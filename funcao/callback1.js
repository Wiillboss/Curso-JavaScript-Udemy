/*
    Callback é quando se passa uma função e essa função será chamada quando um evento acontecer.
    No exemplo de um array, os eventos são a quantidade de elementos dentro do array 
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}


fabricantes.forEach(imprimir)

console.log("Outra forma.")
fabricantes.forEach(function(a){
    console.log(a)
})

console.log("Abaixo segue outra forma")
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

console.log("Usando uma função arrow")
fabricantes.forEach(fabricante => console.log(fabricante))