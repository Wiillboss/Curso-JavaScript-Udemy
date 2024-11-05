const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
    sexo: "Feminino"
}

console.log(Object.keys(pessoa)) // KEYS: informa o nome (chaves) do objeto
console.log(Object.values(pessoa)) // VALUES: informa o valor do objeto
console.log(Object.entries(pessoa)) // ENTRIES: informa NOME e VALOR do objeto

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})

console.log('Abaixo segue outro exemplo usando CHAVES e VALOR.')

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

//adicionando uma CHAVE (dataNascimento) no OBJETO pessoa
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser listado?
    writable: false, // pode ser alterada? 
    value: '01/01/2019' // atribuindo valor
})

pessoa.dataNascimento = '01/01/2017' 
/*
 Acima está sendo feita a alteração do valor já determinado dentro da criação da nova CHAVE (01/01/219),
  entretanto esse alteração de valor só será PERMITIDO caso o WRITABLE seja VERDADEIRO (TRUE).     
*/
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'cidade', {
    enumerable: false,
    writable: true,
    value: 'Cubatão'
})

pessoa.cidade = "Praia Grande"
console.log(pessoa.cidade)
console.log(Object.keys(pessoa))
/*
 Neste exemplo acrecentamos uma nova CHAVE (cidade)
  e determinamos seu valor como CUBATÂO e foi terminado que ela poderia sofre alteração (WRITABLE: TRUE)
 Em seguida alteramos seu valor para PRAIA GRANDE.
 Também foi determinado que não poderia ser listada (ENUMERABLE: FALSE) 
*/


/* 
 Objtect.assign (ECMAScript 2015)
 É a concatenação de todos os atributos (em ordem de exibição ) e caso tenha repetição, é priorizado sua última versão
*/ 
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)
obj.c = 31 // alterção de um dos valores
console.log(obj)
console.log('Congelando')
Object.freeze(obj) // congelando as alterações
obj.c = 42874 // nova tentativa de alterção após o congelamento
console.log(obj)
