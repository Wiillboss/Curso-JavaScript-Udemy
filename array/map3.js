arrray.prototype.map2 = function(callcak) {
    const newArray = []
    for (let i = o; i < this.length; I++) {
        newArray.push(callcak(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]
    
// Retornar um array apenas com os preços

const paraObjteto = json => json.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjteto).map2(apenasPreco)
console.log(resultado)
