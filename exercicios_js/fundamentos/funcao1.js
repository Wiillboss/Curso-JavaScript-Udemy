//Função sem retorno
/*
Repare que os paramentros informados (a,b) não estamos informado o tipo (inteiro, floot etc...)
    pois JS é uma linguagem fracamente typada, pode-se passar o dado que desejar
*/  
function imprimirSoma(a, b){
    console.log(a+b)
    console.log(`O valor da variável (a) é: ${a}.`)
    console.log(`O valor da variável (b) é: ${b}.`)
    console.log(`A soma dos valores é: ${a+b}.`)
};

//chamando a função e informando seus valores dinamicamente
imprimirSoma(2,5);

/*
Em uma função que exige tantos paremetros e vc informa quantidade de parametos diferentes podemos ter alguns resultados:
    -Quando é passado a quantidade de parametros menor do que informado (em caso de inteiro), ele informa que não é um número (NaN)
    -Quando é passado um inteiro e um texto, ambos são contatenados
    -Inteiro com algo indefinado da ERRO
    -Inteiro com flooat SOMA
    -Quando dentro da função se solicita (exemplo) apenas dois (2) paramentos e ao chama-la insere mais do que o solicitado, apenas é somado o que foi solicitado e ignora-se o restante
    -Quando não é informado os paramentos, tambem informa que não é um número (NaN)
*/

function imprimirSoma2(c,d){
    console.log(c+d)
};

imprimirSoma2(9);
imprimirSoma2(3,'a');
//imprimirSoma2(6,a);
imprimirSoma2(8,8.9);
imprimirSoma2(9,9,5,4,10);
imprimirSoma2();


//Função com RETORNO
//Observe que está solicitando dois (2) valores, entretando dessa vez um dos parametros está inicialidado com valor
function soma(a, b=1){
    return a+b
}

/*
    Neste caso estamos informado apenas um valor, dentro da função já havia outro e o mesmo foi somado ao chamar a função.
    OBS: fiz o teste como se o paramentro (a) que estivesse sido inicilizado e não o (b), deu erro e não dei seguimento a outros testes.
*/    
console.log(soma(5));

//Neste caso iniciei ambos os parametros, e o (b) foi reescrito  
console.log(soma(5,15));

//Caso não seja informado os parametros, seu resultado é (NAN), pois neste caso vai somar um undefined com um número 
console.log(soma());

/*
Caso informe somente o paramentro inicializado, da ERRO!
console.log(soma(b))
*/

