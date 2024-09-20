//Funcao em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function func1(){

}

// Armazenar em uma variável
const func2 = function (){

}

// Armazenar em um array
const array = [function (a, b){ return a + b}, func1, func2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'OPA!'}
console.log(obj.falar())

// Passar função como param
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retorna/conter uma função
function soma(a, b){
    return function(c){
        console.log(a+ b+ c)
    }
}

soma (2,3)(4)

// outra forma
const cincoMais = soma(2,3)
cincoMais(4)