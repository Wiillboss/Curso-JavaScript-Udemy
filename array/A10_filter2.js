Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i ++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    {nome: 'Notbook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    {nome: 'Playstation 5', preco: 4500, fragil: false}
]

const caro  = produto => produto.preco >= 500
const delicado = produto => produto.fragil

console.log(produto.filter2(caro).filter2(delicado))