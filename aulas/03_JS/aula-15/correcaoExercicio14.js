// var D=3;
// var X=10;

// for(var contador = 0; contador < X; contador ++){
//     if(contador % D == 0){
//         console.log(contador)
//     }
// }

// var valorA=3;
// var valorB=-1;

// if(valorA<valorB){
//     console.log('crescente')
//     for(var i = valorA; i <=valorB; i ++){
//         console.log(i);
//     }
// }else{
//     console.log('descrescente')
//     for(var j = valorB; j <= valorA; j ++){
//         console.log(j);
//     }
// }

// var x=2;

// for(var i= 1; i<=10; i ++){
//     console.log(`${x} X ${i} = ${i*x}`)
// }

// f1 = 1x1 = 1
// f2 = 2x1 = 2
// f3 = 3x2x1 = 6
// f4 = 4x3x2x1 = 7

var valor=3;

if(valor<0){
    console.log("valor invalido")
}else if(valor == 0 || valor == 1){
    console.log('1')
} else{
    var acumula = 1;
    for(var i = valor; i > 1; i --){
        console.log(`${acumula} x ${i} = ${acumula * i}`)
        acumula *= i;
    }
    console.log(acumula)
}
