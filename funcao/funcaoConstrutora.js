function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado que pertence apenas ao escopo da função CARRO
    let velocidadeAtual = 0

    //metodo publico a partir do THIS
    //o THIS é tb usado para tornar algo publico, algo para ser visivel fora de uma função CONSTRUTORA
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico referente a função CARRO
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)