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

// agora baixo usando função factory acompanhada de uma função arrow

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) 
    }
}

const p2 = criarPessoa ('Zlatan')
p2.falar()