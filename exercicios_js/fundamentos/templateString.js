const nome = "Rebeca";
const concatenacao = "Olá "+nome+"!";
console.log(concatenacao);


const nome2 = "Willian"
const template = `Olá ${nome2}!`;
console.log(template);

//expressões...
console.log(`1+1 = ${1+1}`);

//fazendo uma função que transforma texto todo em MAIUSCULA e a chamando dentro de um template
const up = texto => texto.toUpperCase();
console.log(`Ei...${up(`cuidado`)}!`);