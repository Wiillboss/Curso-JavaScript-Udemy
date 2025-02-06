console.log(module.exports) // iniciando VAZIO
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // o "a" sendo visível fora do arquivo
exports.b = 2 // o "b" sendo visível fora do arquivo
module.exports.c = 3 // o "c" sendo visível fora do arquivo

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {publico: true}

// Sempre que precisar atribuir um novo objeto a ser exportado, obrigatoriamente tem que usar o MODULE.EXPORTS