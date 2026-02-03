let expandir = document.querySelector(".expandir")
let recolher = document.querySelector(".recolher")
console.log(expandir)

expandir.addEventListener("click", ex)

function ex (){
    expandir.classList.add("esconde")
    recolher.classList.remove("esconde")

    let g2 = document.querySelector(".alternativap1")
    g2.classList.remove("esconde")
}

recolher.addEventListener("click", rec)

function rec (){
    recolher.classList.add("esconde")
    expandir.classList.remove("esconde")

    let g2 = document.querySelector(".alternativap1")
    g2.classList.add("esconde")

}



let e1 = document.querySelector(".e1")
let r1 = document.querySelector(".r1")

e1.addEventListener("click", ee1)

function ee1(){
    let resposta1 = document.querySelector(".resposta1")
    resposta1.classList.remove("esconde")
    e1.classList.add("esconde")
    r1.classList.remove("esconde")
}


r1.addEventListener("click", rr2)

function rr2(){
    let resposta1 = document.querySelector(".resposta1")
    resposta1.classList.add("esconde")
    r1.classList.add("esconde")
    e1.classList.remove("esconde")
}


let es1 = document.querySelector(".es1")
let re1 = document.querySelector(".re1")

es1.addEventListener("click", eee1)

function eee1(){
    let resposta2 = document.querySelector(".resposta2")
    resposta2.classList.remove("esconde")
    es1.classList.add("esconde")
    re1.classList.remove("esconde")
}


re1.addEventListener("click", rrr2)

function rrr2(){
    let resposta2 = document.querySelector(".resposta2")
    resposta2.classList.add("esconde")
    re1.classList.add("esconde")
    es1.classList.remove("esconde")
}

let esc1 = document.querySelector(".esc1")
let res1 = document.querySelector(".res1")

esc1.addEventListener("click", eeee1)

function eeee1(){
    let resposta3 = document.querySelector(".resposta3")
    resposta3.classList.remove("esconde")
    esc1.classList.add("esconde")
    res1.classList.remove("esconde")
}


res1.addEventListener("click", rrrr2)

function rrrr2(){
    let resposta3 = document.querySelector(".resposta3")
    resposta3.classList.add("esconde")
    res1.classList.add("esconde")
    esc1.classList.remove("esconde")
}