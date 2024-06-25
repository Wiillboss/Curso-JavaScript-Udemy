//Qualquer número dividido por 0 (zero) não resulta em erro, mas sim em infinito como descrito abaixo.
console.log(7/0);

//Cuidado ao jogar números que podem ser interpretado como "STRING" pois o JS pode interpretar como um inteiro como descrito no exemplo abaixo. É possivel fazer operações matemática com tipo STRING, mas cuidado.
console.log("10"/2);


//NaN = Not a Number = Não é um número
console.log("Show!"*2);

//No caso abaixo gera imprecisão
console.log(0.1 + 0.7);

//console.log(10.toString());
console.log((10.345).toFixed(2));
