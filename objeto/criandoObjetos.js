// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
/* 
   Os parametros: NOME, PRECP, DESC estão encapsulados e só podem ser vistos dentro da função,
     já o o parametro apontado pelo THIS, é visto fora do objeto.
   Quando um parametro é apontado pelo THIS, ele é público, já aqueles criado dentro da função (dentro de parenteses), é privado.  
*/
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionário ( nome, salarioBase, faltas ) {
    return { 
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionário('João', 7980, 4)
const f2 = criarFuncionário('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Objeto.create

const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que retorna ao Oketo...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)