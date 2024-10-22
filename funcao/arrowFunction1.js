let dobro = function (a){
    return 2 * a
}


/*
Abaixo segue primeiro exemplo de uma função arrow.
Caracteristicas importantes:
    Funçao arrow sempre é anonima.
    Para chamar é necessário armazenar em alguma variável ou constante
*/
dobro = (a) => {
    return 2 * a
}


//Segundo exemplo
//Para retirar os parenteses, somente quando tiver um úncio parametro
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))


let ola = function (){
    return 'Olá'
}

//outro exemplo para ilustrar o modelo acima.
ola = () => 'Olá'
ola = _ => 'Olá' // possui parametro
console.log(ola())
