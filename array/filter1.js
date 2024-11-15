const produto = [
    {nome: 'Notbook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    {nome: 'Playstation 5', preco: 4500, fragil: false}
]

console.log(produto.filter(function(p){
    return true
}))
console.log(produto.filter(function(p){
    return false
}))
console.log(produto.filter(function(p){
    return p.preco > 2500
}))
console.log(produto.filter(function(p){
    return p.nome === 'Playstation 5'
}))
console.log(produto.filter(function(p){
    return p.fragil === false
}))
console.log(produto.filter(function(p){
    return p.fragil && p.preco > 4000
}))

const caro = produto => produto.preco >= 500 // determiando em uma variável o que é CARO
const delicado = produto => produto.fragil

console.log(produto.filter(caro).filter(delicado))
