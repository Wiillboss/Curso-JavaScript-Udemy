let contador  = 1 
while(contador <= 10){
    console.log(`${contador}º Vez.`)
    contador ++
}


for( let i = 1; i <= 10; i++){
    console.log(`${i}º Rodada`)
}


//forma de varrer um array dentro de um for

const notas = [6.3, 7.9, 5.5, 8.1, 9, 4.8]
for(i = 0; i< notas.length; i++) {
    console.log(`Nota = ${notas[i]}. `)
}