Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log(`Sua nota foi: ${nota}. Quadro de Honra`)
    } else if(nota.entre(7, 8.99)){
        console.log(`Sua nota foi: ${nota}. Aprovado`)
    } else if(nota.entre(4, 6.99)){
        console.log(`Sua nota foi: ${nota}. Recuperação`)
    } else if(nota.entre(0, 3.99)){
        console.log(`Sua nota foi: ${nota}. Reprovado`)
    } else{
        console.log('Nota inválida')
    }

    console.log('Fim do programa.')
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)
//else if é usado para quando houver mais uma comparação dentro do mesmo bloco.