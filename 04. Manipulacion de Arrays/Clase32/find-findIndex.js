// Methods that iterate over an array.
// Methods that DO NOT modify the original array(Inmutability)

// find() - Devuelve el valor del primer elemento del array que cumpla la función de prueba proporcionada

const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 =  multipleOf5.find( number => number > 10)

console.log(multipleOf5);
console.log(firstNumberGreaterThan10);

// findIndex() - Devuelve el indice del primer elemento de un array que satisface una condicion proporcionada en forma de funcion. Si no encuentra ningun elemento que cumpla la condicion, devuelve -1

const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers);
console.log(indexNumber);