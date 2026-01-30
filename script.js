let contador =1
document.querySelector("#bola1").checked = true

setInterval( function(){
    proxima();
},5000)

function proxima(){
    contador = contador + 1
    if(contador > 2){
        contador = 1
    }
    document.querySelector("#bola"+contador).checked = true
}

let sanduiche = document.querySelector("#lanche")
let valor = 0


sanduiche.addEventListener("change", comer)

function comer(){
    let escolha = sanduiche.value
    if(escolha == "sanduiche1"){
        valor = valor + 25
    }
        document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor}`

    if(escolha == "coxinha"){
        valor = valor + 7
    }
    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor} cada.`

    if(escolha == "pastel"){
        valor = valor + 10
    }
    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor} cada.`

    if(escolha == "cigarrete"){
        valor = valor + 15
    }
    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor} cada.`

    if(escolha == "cubano"){
         valor = valor + 30
    }
    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor}.`

    if(escolha == "pizza"){
        valor = valor + 60
    }
    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor}.`
}

