// novo recurso do ES2015

// abaixo está sendo feito notação LITERAL
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'João Paulo II',
        numero: 1000
    }
}

// OERADIR DESTRUCTURING é uma forma simplificada de tirar de dentro de uma estrutura (neste caso um OBJETO) um ou mais atributbutos.

// abaixo está descrito: retire do objeto PESSOA, os atributos NOME e IDADE. Em seguida, exiba os valores dos atributos.

const {nome, idade} = pessoa
console.log(`Nome: ${nome}. Idade: ${idade}. `)


// abaixo está sendo criada uma variável (após os dois pontos: N e I) para os atributos informados do objeto PESSOA
const {nome: N, idade: I} = pessoa
console.log(N, I)

// caso tente retirar um atributo que não existe dentro do objeto
/*
    No caso de uma variavel que não existe, não vai dar erro, mais sim undefined.
    No exemplo abaixo foi pensado e instruido para caso retirado um atributo que não exista, aparecer VERDADEIRO
*/  
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// localizando atributos dentro de outros atributos. Lembrado que quando informa um atributo que não existe, seu resultado é undefined. 
const {endereco: { logradouro, numero, cep}} = pessoa
console.log(`Nome da rua: ${logradouro}. Número: ${numero}. CEP: ${cep}`)
