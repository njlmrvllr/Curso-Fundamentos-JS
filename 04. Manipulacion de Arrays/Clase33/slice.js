// slice() - Crea una copia superficial (shallow copy) de una porcion del  array, especificada por indices de inicio y fin (fin no incluido)

const animals = ['ant','bison','camel','duck','elephant']
console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1,5));
console.log(animals.slice(-2));
console.log(animals.slice(2,-1));
console.log(animals.slice())