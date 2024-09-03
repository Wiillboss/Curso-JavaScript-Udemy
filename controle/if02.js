function teste1(num){
    if(num >= 7)
        console.log(num)
        console.log('Final')

    /*
    if(num >= 7)
        console.log(num)
    console.log('Final')
    */    
}

teste1(6)
teste1(8)

/*
    Atenção quando for usar o IF e NÂO usar CHAVES.
    No exemplo acima, não está sendo feito o uso de CHAVES, e neste caso o JS considera o primero CONSOLE como se estivesse dentro de da chave do IF e o segundo para fora, sou seja, em qualquer que seja o resultado, o segundo CONSOLE sempre vai ser exibido.
*/


function teste2(num2){
    if(num2 > 7);{
        console.log(num2)
    }
}

teste2(6)
teste2(8)

// cuidado com o ; (ponto e virgula), não usar nas estruturas de controle