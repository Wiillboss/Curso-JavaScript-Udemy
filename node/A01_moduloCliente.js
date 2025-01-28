const moduloA = require('./A01_moduloA')
const moduloB = require('./A01_moduloB')

/*
ATENÇÂO, os consoles abaixo estão fazendo referência as constantes acimas,
    não aos caminhos como dentro de REQUIRE
*/ 

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)


console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)