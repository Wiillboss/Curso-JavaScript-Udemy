// factory é uma função que retornar um objeto
// Baixo segue uma factory simples sem parametro.

function criarPessoa() {
    return {
        noma : "Ana",
        sobraNome : "Silva"
    }
}

console.log(criarPessoa())