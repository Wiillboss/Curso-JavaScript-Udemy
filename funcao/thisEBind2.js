/*
setInterval: Essa função dispara uma outra função a partir de um determinado intervalo que foi informado
*/

function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa

function pessoa_2(){
    this.idad = 0

    setInterval(function(){
        this.idad++
        console.log(this.idad)
    }.bind(this), 1000)
}

new pessoa_2

function pessoa_3(){
    this.idadi = 0

    const self = this
    setInterval(function(){
        self.idadi++
        console.log(self.idadi)
    }, 1000)
}

new pessoa_3