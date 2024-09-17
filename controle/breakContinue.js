const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5){
        break
    }
    console.log(`Usando o break ${x} = ${nums[x]}`)
}

// o BREAK não age em cima do IF, age apenas nos blocos: WHILE; SWITCH e FOR
// o BREAK age sempre no bloco mais próximo a ele, neste exemploi o FOR

for( y in nums){
    if(y == 5){
        continue
    }
    console.log(`Usando o continue ${y} = ${nums[y]}`)
}

// assim como o BREAK, o CONTINUE age apenas nos blocos: WHILE; SWITCH e FOR
// a diferença (pelo menos entendida até o momento) é que ele pula o indice (quando usando array) informado
// ele interrompe a repetição correte (neste caso até 5) e passa para próximo (6) em diante

externo: 
for(a in nums){
    for( b in nums){
        if ( a == 2 && b == 3) break externo
            console.log(`Par = ${a}, ${b}`)
        
    }
}
 