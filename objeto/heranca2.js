// cadeia de prototipo (prototype chain)

Object.prototype.attr0 = '0' // não faça isso em casa!

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} // (__prot__ : avo) indica que o avo é prototipo (herença) do pai
const filho = { __proto__: pai, attr3: 'C'} // (__proto__: pai) indica que o pai é prototipo (herença) do filho
/*
A partir do filho, caso pegue um atributo que o filho não tenha, ele vai procurar no pai, casso esse não tenha, vai procurar no avo.
*/  

console.log(filho.attr1) 
/* Referente ao console acima:
Filho tem atributo 1? Não, então vai procurar no pai, que tambem não tem, vai procurar no avo, esse sim tem.
*/ 

console.log(filho.attr0)
/* Referente ao console acima:
Filho tem atributo 1? Não, então vai procurar no pai, que tambem não tem, vai procurar no avo,
 tambem não, ele vai procurar no Object Prototype, esse sim tem.
*/

console.log(filho.attr4)
/* Referente ao console acima:
Filho tem atributo 1? Não, então vai procurar no pai, que tambem não tem, vai procurar no avo,
 tambem não, ele vai procurar no Object Prototype, que tambem não tem. Seu resultado vai ser UNDEFINED
*/

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
/* Referente ao console acima.
Observe que existe dois atributos 3, um no filho e outro no pai.
Neste caso o atributo que fica é o que está no filho
*/

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())