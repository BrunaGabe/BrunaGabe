var plus = document.getElementsByTagName('plus')
var less = documents.getElementsByTagName('Less') 
var input = document.getElementsByTagName('input')[0];
var valor = Number(input.value)

plus.addEventListener('click', aumentar) 
less.addEventListener('click', diminuir)

function aumentar() {
    valor += 10
    input.value = valor
    console.log(valor)
}

function diminuir() {
    valor -= 10
    input.value = valor
    console.log(valor)
}