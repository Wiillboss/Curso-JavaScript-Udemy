/*
    VAR só tem dois escopos possíveis:
    - Nível global: Vísivel na aplicação inteira
    - Nível de função: Vísivel apenas dentro da função
*/

{ 
    { 
        { 
            { 
                var sera = 'Será???' 
            } 
        } 
    } 
}
console.log(sera)

/*
    No caso acima, com não se trata de uma função, a variável é vista idenpente do local declarado,
    necessário ter cuidado com variáveis declaradas como VAR no JS pois como é vista dentro de qualquer lugar,
    pode acarretar problemas futuros com a aplicação, principalmente como sobreescrever a variável
*/

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local)
//Caso retire o comentário acima, vai ocorrer erro pois a variável está declarada dentro da função