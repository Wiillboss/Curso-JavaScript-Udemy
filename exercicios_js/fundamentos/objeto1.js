// [] <- array
// {} <- objeto
// Objeto é uma coleção (grupo) de pares (chave e valor)
const prod1 = {};
//Abaixo estamos colocando (dinamicamente) uma chave (identificador ou nome) no objeto
prod1.nome ='Celular Ultra Mega';
//Abaixo estamos colocando (dinamicamente) umm valor no objeto
prod1.preco = 4998.90;

prod1['Desconto Legal'] = 0.40 // evite atributos com espaço.

//Quando impresso um objeto no JS, ele imprime dentro de chaves {}
console.log(prod1);


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
    /* Podemos ter outros objetos dentro de outros objetos
        obj:{
            exemplo:'Camisa Polo Longa'
            obj: {
                exemplo:'Camisa Polo sem Gola'
            }
        }
    */    
}
console.log(prod2);
