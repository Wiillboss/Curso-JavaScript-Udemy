const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then( response => {
    const funcionarios = responde.data
    console.log(funcionarios)

    // mulher chinesa com menos salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .filter(menorSalario)
    
    console.log(func)    
})