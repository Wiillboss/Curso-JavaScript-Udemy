function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do{
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida dessa vez foi: ${opcao}.`)
} while (opcao != -1)

console.log('Programa finalizado, até a próxima!')