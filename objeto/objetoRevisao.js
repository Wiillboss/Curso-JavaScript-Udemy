// coleção dinâmica de pares chaves/valor

const produto = new Object //instaciando (criando) um objeto
produto.nome = 'Cadeira' // adicionando propriedades de forma dinâmica
produto ['marca do produto'] = 'Generica' // outra forma de adicionar dinamicamente
produto.preco = 220

console.log(produto)


delete produto.preco
delete produto ['marca do produto']
//confira abaixo o objeto após os delestes
console.log(produto)

const carro = {
    nodelo: 'A4',
    valro: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua: 31 de maio',
            numero: 2815
        }
    },

    consutores: [{
        nome: 'Paula',
        idade: 19
    }, {
        nome: 'Maldini',
        idade: 45
    } ],

    calcularValorDoSeguro: function(){
        // ...
    }
}

console.log(carro) // exibindo os atributos e seus valores do carro

carro.proprietario.endereço.numero = 1000 // alterando o valor do atributo NUMERO para 1000 que antes era 2815
carro['proprietario'] ['endereço'] ['logradouro'] = 'Av Gigante' // também alterando o valor de um atributo, entretando usando colchetes []

console.log('Abaixo segue somente os valores dos atributos alterados do número e logradouro (respectivamente) do proprieário do carro! ')
console.log(carro.proprietario.endereço.numero, carro.proprietario.endereço.logradouro)
// acima estou mostrando apenas os atributos que sofreram alteração
