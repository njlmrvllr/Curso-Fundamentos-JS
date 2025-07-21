/*
CLOSURE: funcion de tiene acceso a variables de un ambito externo, incluso después de que esa función haya terminado de ejecutarse. 

Ambito léxico: cada vez que se declara una  funcion, crea su propio ámbito lexico, y puede acceder a las variables dentro de ese ámbito y a las variables en ámbitos superiores */ 

function outerFunction () {
    let outerVariable = 'I am from outer function'
    function innterFunction () {
        console.log(outerVariable)
    }
    return innterFunction
}

const closureExample = outerFunction()
closureExample()

function createCounter () {
    let count = 0

    return function() {
        count++ 
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = "hello, "

    function inner (name){
        console.log(message + name)
    }
    return inner
}

const closureA = outer()
const closureB = outer()

closureA('alice')
closureB('bob')