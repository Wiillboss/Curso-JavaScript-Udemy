var numero = 1
{
    var numero = 2
    console.log(`Dentro: ${numero}.`)
}
console.log(`Fora: ${numero}.`)

/*
    Ambas vairáveis estão dentro do mesmo escopo e acabam tendo o mesmo valor sobreescrito.
    Para ter um valor diferente (mesmo como o mesmo nome) teria que está:
        Dentro de um escopo global (como no caso acima), e a outro no nível de fução (dentro de uma função).
    OBS: lembrado que isso serve apenas para declarações de variáveis com VAR
*/