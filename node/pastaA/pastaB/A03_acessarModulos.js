const moduloA = require('../../A01_moduloA') // O caminho aceita letras minusculas, entretanto sempre repeito a forma que caminho é descrito.
console.log(moduloA.ola)


// È possível acessar por caminha absoluto e relativo
// Por algum motivo, não está funcionando os caminhos absoluto e relativo
const outroModulo = require('../../A01_moduloB')
console.log(outroModulo.bomDia)

const outroModulo2 = require('../../A01_moduloA')
console.log(outroModulo2.bemVindo)

/*
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
*/
const c = require('./pastaC/A03_index')
console.log(c.ola2)