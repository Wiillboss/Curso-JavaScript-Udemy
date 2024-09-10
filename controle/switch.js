const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { 
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break
        case 8: case 7:
            console.log('Aprovado.')
            break
        case 6: case 5: case 4:
            console.log('Recuperação.')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida.')                
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)

// SWITCH (escolha) (biblioteca matematica com errondamento para baixo)
// é possivel deixar casos seguidos com apenas um resultado como feito no caso 10 e 9
// o break é necessário pois caso contrário ele vai percorrer todos os casos mesmo que ja tenha entrado em um
// tanto faz deixar os casos que são iguais, na mesma linha como no (8 e 7), ou em linhas separadas (10 e 9)
// default é usado quando não se entra em nenhum caso
// default pode ser usado em qualquer posição, com a diferença de que por último, não necessita declarar o break
// cada caso necessita OBRIGATORIAMENT da declaração CASE, sem ela não funciona
// não ó possível declarar um intervalo de CASES, sendo assim obrigatorio declarar cada CASE
