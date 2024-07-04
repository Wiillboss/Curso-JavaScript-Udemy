let isAtivo = false;
console.log(isAtivo);

//sempre priorizar CONSTANTES (LET; CONST) ao invés de variáveis 
isAtivo = true;
console.log(isAtivo);


/*
    Atenção, o ponto de exclamação (!) é a negação.
             dois pontos de exclamação (!!) é a negação da negação, ou seja, retorna a seu valor        verdadeiro
*/

console.log(`A variável foi declarada como VERDADEIRA (${isAtivo}), entretanto quando se faz a negação, ela se torna FALSA (${!isAtivo}) `)

console.log(`Quando se faz a NEGAÇÂO da NEGAÇÂO, ela retorna ao seu valor original que era VERDADEIRA (${!!isAtivo})`)

//Forçando uma variável a se tornar VERDADEIRO OU FALSO (BOOLEANO);
isAtivo = 1;
console.log(`A variável que antes tinha o valor número um (${isAtivo}), agora se tornou VERDADEIRO ou FALSA (Booleano): ${!!isAtivo}`);

console.log(`Valores verdadeiros`);
console.log(!!3);
console.log(!!-1);
console.log(!!" "); //Espaço
console.log(!!"Texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log(`Valores falsos`);
console.log(!!0);
console.log(!!""); //Vazio
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(`Para finalizar ...`)
console.log(!!('' || null || 0 || ' '))

let nome = 'Willian'; //Variável com informação
let outroNome = ''; //Variável vazia
console.log(nome || 'Desconhecido');
console.log( outroNome || 'Desconhecido');