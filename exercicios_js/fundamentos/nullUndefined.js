let valor; // não será inicializada
console.log(valor);
/*
 No caso acima, o valor imprido será (undefined) que significa indefinido pois não existe valor atribuído a ela, não foi inicializada.
 É diferente quando se inicia uma variável que não existe como no exemplo abaixo.
    console.log(valor2);
 Neste caso o resultado é erro.
*/

//console.log(valor.toString()) // ERRO!

valor = null;
//No caso acima, a variável foi inicializada com um valor NULO, neste caso ao imprimir não vai dar erro mais sim nulo seu valor.
console.log(valor);

//iniciando uma variavel como objeto.
const produto = {};
//imprimindo a variavel com um atributo, entretanto esse atributo está sem valor.
console.log(`Aqui o produto está sendo inserido um atributo,
     entretanto esse atributo não tem valor até o momento e seu valor é: ${produto.preco}.`);
//Atribuindo um valor ao atributo.
produto.preco = 3.50;
//imprimindo a variavel com seu atributo com seu valor.
console.log(`Já aqui o valor do atributo foi atribuído que é: ${produto.preco}.`);

/*
Não entendi o que ele quis dizer como essa parte do código abaixo, mesmo assim escrevi para consulta futura
*/

produto.preco = undefined; // eviete atribuir undefined
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);