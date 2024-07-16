for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log(`i = ${i}`)

/*
    Acima foi possível dar certo pois a declaração como VAR é vista como um escopo global, ou seja,
     ela é visualizada em toda aplicação.

    Abaixo foi preciso comentar a última linha para que funcionase pois a declaração como LET é vista apenas dentro do escopo onde é declarada.

*/

for (let i2 = 0; i2 < 10; i2++){
    console.log(i2)
}

//console.log(`i2 = ${i2}`)