const pessoa = {
    saudacao: 'Bom dia',
    falar(){
            console.log(this.saudacao)
    }
}

pessoa.falar()

const ablar = pessoa.falar
ablar() // conflito entre paradigmas: funcional  e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()