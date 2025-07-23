// // las promesas tienen 3 estados

// Promise()

// Estados: 
// pending // inicio 
// fullfilled // cunado se resuelva la promesa
// Rejected // cuando la promesa no se resolvio

// Callbacks:
// resolve // se resuelve la promesa
// reject // no se puede resolver 

// Metodos: 
// then()
// catch() // cuando la promesa no se resuelve y te devuelve el error


const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if(operationSuccessful){
            resolve('La operacion fue exitosa')
        } else {
            reject('Fallo la operacion')
        }
    }, 2000)
    
})

promise
    .then((succesMessage) => {
        console.log(succesMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })