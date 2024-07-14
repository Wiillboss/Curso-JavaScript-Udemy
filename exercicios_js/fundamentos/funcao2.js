//Armazenando uma função dentro de uma variavel
//Abaixo está sendo criado uma função anonima (sem nome) 

const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//Arnazenando uma função arrow (ARROW FUNCTION)em uma variavel 
//Função arrow resumidamente é uma forma resumida de construir uma função
const soma = (a, b) => {
    return a+b
}

console.log(`Usando a função arrow, podemos resumir uma função. A soma de 5 + 3 é: ${soma(5,3)}.`)

//fazendo um retorno implícito
/*
    Quando não se usa chaves {} (corpo da função) significa que vamos ter uma única linha, executar uma única sentença de código.
    Neste caso não informe para retornar nada, será retornado UNDEFINED 
*/
const subratacao = (a,b) => a-b
console.log(`Exemplo de função arrow com retorno implícito. A subtração de 5 - 4 é: ${subratacao(5, 4)}.`)


const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')