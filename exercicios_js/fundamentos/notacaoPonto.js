//Arredondando para cima um valor 
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
/*
    Outro modo:
    obj1['nome'] = 'Bola'
*/
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exce...')
    }
}

const obj2 = new Obj ('Cadeira') // instanciando objeto dentro de uma variável constante
console.log(obj2.nome) // imprimindo a variável com o parametro do objeto

const obj3 = new Obj ('Mesa')
console.log(obj3.nome)

obj3.exec()