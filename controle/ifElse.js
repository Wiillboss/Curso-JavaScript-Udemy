const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log(`Sua nota foi ${nota}. Aprovado!`)
    }else{
        console.log(`Sua nota foi ${nota}. Reprovado!`)
    }
}

imprimirResultado(3)
imprimirResultado(10)
imprimirResultado('Epa!') // cuidado, aqui ele não apresenta erro, no teste do IF vai cair como FALSO