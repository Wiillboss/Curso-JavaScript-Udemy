const escola = "COD3R7";

//Mostre o caracter que estiver no indice 4 da variavel, lembrando que a contagem inicia do 0 (ZERO)
console.log(escola.charAt(4));

//Caso solicite uma posição que não existe, ele não informa ERRO, mas sim o VAZIO
console.log(escola.charAt(5));

//Informando o valor da posição na tabela ASK (ou UNICODE)
console.log(escola.charCodeAt(3));

console.log(escola.indexOf(3));

//Informe todas os caracteres a partir do indice 1
console.log(escola.substring(1));

//Informe todas os caracteres a partir do indice 3
console.log(escola.substring(3));

//Informe todas os caracteres a partir do indice 0 até o 3 (entretando não inclue o último)
console.log(escola.substring(0,3));

//Concatenando um literal (valor que não está armazenado em uma variavel)
console.log('Escola '.concat(escola).concat('!'));
console.log('Escola '+escola+'!');

//Substituindo um valor por outro, no nosso caso estamos subistituindo o caracter 3 por "e"
console.log(escola.replace(3, 'e'));

//Convertando uma STRING em um ARRAY e determinando qual o elemento separador
console.log('Ana, Maria, Pedro'.split(','))