const raio = 5.6;
//Math.pow(raio, 2) - O POW é a POTENCIA, dentro dos parenteses o numero após a virgula determina a quanto se deseja elevar.
const area = Math.PI * Math.pow(raio, 2);

console.log(area);

const exemplo = 4;
const exemplo2 = 3;
const final = Math.pow(exemplo, 2);
const final2 = Math.pow(exemplo2, 3);
console.log(final);
console.log(final2);

//Math NÃO É UMA FUNÇÃO (dentro do JS ele é um OBJETO), PI é uma constante do OBJETO e POW é uma função 
console.log(typeof Math);
