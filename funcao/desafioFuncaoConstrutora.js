class pessoa {
    constructor (nome){
        this.nome = nome // o this está tornando a variavel pública
    }

    falar () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()

// segue abaixo a tranformação

function humano (name) {
    this.name = name

    this.speak = function () {
            console.log (`Meu nome é ${this.name}`)
    }
}

const h1 = new humano ('Zeden')
h1.speak() 