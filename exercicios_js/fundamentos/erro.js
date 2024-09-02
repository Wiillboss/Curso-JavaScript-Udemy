
/* Da form descrita abaixo, o codigo da erro, sua correção segue abaixo usabdo o TRY 

function imprimirNomeGritado(obj){
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

*/

// no THROW é possível usar de diversas formas
function tratarErroE_lanca(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

//O FINALLY é um bloco que é execultado dando um erro ou não
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroE_lanca(e)
    } finally {
        console.log('Final')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

/*
    Quando ocorre um erro dentro do TRY (tentar), automaticamente vai para dentro do CATCH.
    Geralmente dentro do CATCH é feito o tratamento do erro 
*/