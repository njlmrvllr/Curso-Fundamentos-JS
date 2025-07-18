// Funciones puras

// Side Effects 
//1. Modificar variables globales
//2. Modificar parámetros 
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
//6. Obtener la hora actual

function sum (a,b){
    return a + b
}//es una funcion pura


// Funciones impuras
function sum (a,b){
    console.log('A:' +a);
    return a + b
}

let total = 0
function sumWithSideEffect (a) {
    total += a
    return total
}

//funcion pura
function square(x){
    return x *x
}

function addTen(y){
    return y+10
}

const number =5
const finalResult = addTen(square(number))
console.log(finalResult)