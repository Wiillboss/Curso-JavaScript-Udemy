// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function excec(){
    const saudacao = 'Faaaaala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const clientes = {
    nome: 'Willian',
    idade: 37,
    peso: 100,
    endereco:{
        logradouro: 'Lasar Segall',
        numero: 368
    }

}

console.log(saudacao)
console.log(excec())
console.log(clientes)