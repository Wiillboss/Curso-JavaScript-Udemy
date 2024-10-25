function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.getPreco * (1 - this.desc) * (1 + imposto) } `
}

const produto = {
    nome: 'Nootbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())
