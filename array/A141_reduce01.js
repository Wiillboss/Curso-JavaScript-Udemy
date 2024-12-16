const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.mao(a => nota.nota))

const resultado = alunos.map (a => a.nota).reduce(function(acumulador, atual) {
    console.log (acumulador, atual)
    return acumulador + atual 
})

console.log(resultado)

const resultado_com_valor_inicial = alunos.map (a => a.nota).reduce(function(acumulador, atual) {
    console.log (acumulador, atual)
    return acumulador + atual 
}, 10)

console.log(resultado_com_valor_inicial)

