function soBoaNoticia (nota){
    if(nota>=7){
        console.log(`Aprovado com a nota: ${nota}.`)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.5)

// No exemplo acima, repare que foi passado dois valores, sendo apenas um exibido pois atendeu ao requisto do IF. Neste exemplo não temos uma reposta para caso o requisito não seja atendido. 

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade ... ${valor}.`)
    }
}

seForVerdadeEuFalo() //nada - vai ser falso em um teste de V ou F
seForVerdadeEuFalo(null) // nulo - vai ser falso em um teste de V ou F
seForVerdadeEuFalo(undefined) // indefinido - vai ser falso em um teste de V ou F
seForVerdadeEuFalo(NaN) // não é um número - vai ser falso em um teste de V ou F
seForVerdadeEuFalo('') // string vazia - vai ser falso em um teste de V ou F
seForVerdadeEuFalo(0) // zero é o único número que da falso em um teste de V ou F
seForVerdadeEuFalo(-1) // é verdadeiro
seForVerdadeEuFalo(' ') // uma string preenchida com ESPAÇO não é uma string vazia - em um teste de V ou F é verdadeiro
seForVerdadeEuFalo('?') // é verdadeiro
seForVerdadeEuFalo([]) // array vazio é verdadeiro
seForVerdadeEuFalo([1,2]) // array com elementos é verdadeiro
seForVerdadeEuFalo({}) // objeto vazio é verdadeiro
