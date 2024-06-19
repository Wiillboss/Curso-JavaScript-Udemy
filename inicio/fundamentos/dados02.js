//Para criar variavel podemos usar tanto "VAR" quanto "LET", tb é possível deixar em branco
let preco = 19.90;
let desconto = 0.4;
let valorDoDesconto = preco*desconto;
let valorFinal = preco-valorDoDesconto;

console.log("O preço do produto é: R$ "+preco+".")
console.log("O desconto oferecido é: 4%. Com relação ao valor do produto é: R$ "+valorDoDesconto+".")
console.log("O valor do produto com o desconto é: R$ "+valorFinal+".")