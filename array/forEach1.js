const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// dentro da FUNCTION, caso queria ter acesso ou INDICE, é obrigado é incluir 2 paramentos para que o segundo seja obrigatoriamente o INDICE
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

//incluindo terceiro parametro
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

//incluindo um quarto parametro para identificar que a funcção CALLBECK no forEach somente pode receber 3 parametros: nome; indice; array
aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1} ${nome}`)
    console.log(x)
})

// Abaixo usando ARROW FUNCTION 
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)