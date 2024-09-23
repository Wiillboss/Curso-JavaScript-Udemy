function area(largura, altura){
    const area = largura * altura
    if(area>20){
        console.log(`Valor acima do permitido: ${area}m².`)
    }else{
        return area
    }
}

console.log(`Teste 1. ${area(2,2)}`)
console.log(`Teste 2. ${area(2)}`)
console.log(`Teste 3. ${area()}`)
console.log(`Teste 4. ${area(2, 3, 7, 22, 44)}`) //Calcula de acordo com o parametro (largura e altura)
console.log(`Teste 5. ${area(5,5 )}`)
