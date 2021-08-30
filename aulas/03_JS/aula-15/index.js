// var b = document.querySelectorAll('h1')[0].innerText



// var frutas = ['maca', 'banana', 'abcate']

// console.log(frutas[1])

// frutas[4] = 'abacaxi';

// console.log(frutas)

// frutas.push('uva');

// console.log(frutas)

// frutas[5]=null;


// console.log(frutas)
// console.log(frutas.length)

// frutas.pop()

// console.log(frutas)
// console.log(frutas.length)

// frutas.sort()

// console.log(frutas)

// console.log(frutas.indexOf('banana'))
// console.log(frutas[2])


// var a1= {
//     "nome": "A1",
//     "estaOcupada": false
// }

// var a2= {
//     "nome": "A2",
//     "estaOcupada": true
// }

// var a3= {
//     "nome": "A3",
//     "estaOcupada": false,
//     "cor": "preta"
// }

// var estacionamento = {
//    "vagas": [
//        a1, a2, a3 
//    ]
// }

// console.log(estacionamento)
var resultado = 0;
const SOMA = '+';
const DIVISAO = '/';
const SUBTRACAO = '-';
const MULTIPLICACAO = '*';

const PI = 3.141594 

function soma(a, b) {
    resultado = a + b
    return resulta
}

function multiplicacao(a, b) {
    let valor1 = a;
    let valor2 = b;
    return valor1 * valor2;
}

function dividir(a, b) {
    valor1
    if (b <= 0) {
        console.log(`o valor de b = a ${b} não é válido, estaremos utilizando 1`)
        b = 1;
    }
    return a / b;
}

function subtracao(a, b) {
    return a - b
}

function calcular(valor1,funcao, valor2){
    switch (funcao){
        case SOMA: {
            return soma(valor1, valor2)
            break;
        }
        case SUBTRACAO: {
            return subtracao(valor1, valor2)
            break;
        }
        default: {
            return `A função [${funcao}] escolhida é inválida, utilize um dos valore (\"+, -, /, * \")`
        } 
        case DIVISAO: {
            return dividir(valor1, valor2)
            break;
        }
        case MULTIPLICACAO: {
            return multiplicacao(valor1, valor2)
            break;
        }
    }
}


console.log(calcular(3,'A', 2))

console.log(calcular(3,'*', 2))