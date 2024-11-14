const carrinho = [ 
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

const paraObjeto = JSON => JSON.parse(JSON) // convertendo um texto para objeto
const apenasPreco = produto => produto.apenasPreco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)