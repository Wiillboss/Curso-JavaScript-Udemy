// Na situação a abaixo o array tem quatro (4) posições, elas são separadas por virgula(,)
// Em um array as posições se incia na posição zero (0)
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

console.log(valores[4]);
/* 
    Quando se tenta mostrar um indice que não está dentro do array (neste caso posição 4),
    ele não da erro e mostra UNDEFINED (indefinido). 
    OBS: caso fosse JAVA, mostraria erro
*/

valores[10] = 10;
/*
    Quando se adiciona um valor em distante da ordem natural,
    (no nosso caso só existe valores da posição 0 até a 4 e estavamos adicionando um valor na posição 10)
    ele vai indicar que existe tantos valores vazios (6 empty)
*/ 
 console.log(valores);

 valores[11] = 11;
 console.log(valores)

 console.log(valores.length)
 // O LENGTH serve para contar
 /* 
    Quando se usa o length dentro de um array,
    ele vai contar todos os valores e somar, inclusive os vazios que entram nessa soma total.
    No nosso caso temos 12 posições (6 com valores e 6 vazios)
*/

const valores2 = [4, 'willian'];
/*
    Podemos adicionar multiplos valores dentro de um array.
    Abaixo foi adicionado: um objeto, booleano, nulo e texto.
    OBS: Não é uma boa praticar adicionar multiplos valores dentro do array,
    o ideal é ter um tipo de array para cada coisa.
*/
// Push é usado para adicionar ao array
valores2.push({id:3}, false, null, 'teste');
console.log(valores2);


/*
  Existe duas formas de se excluir valores, usando POP e o DELETE.
  Com o POP ele exclui o último valor do array.
  Com o DELETE pode-se informar a posição que deseja excluir  
*/
console.log(valores2.pop());
console.log(valores);

delete valores2[0];
console.log(valores2);

//No JS um array é do tipo OBJETO.
console.log(typeof valores2);