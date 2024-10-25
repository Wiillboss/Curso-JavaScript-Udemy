// closures é um escopo criado quando uma função é declarada.
// esse escope permite a função acessar e manipular as variáveis externas e função

const x = "Global"

function fora () {
    const x = "Local"
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())