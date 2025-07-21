// Methods that iterate over an array
// Methods that DO NOT modify the orignal array(Inmutability)

// map - permite aplicar una función a cada elemento de un array y construir un nuevo array con los resultados

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach() - itera sobre cada elemento de un array y ejecuta una función proporcionada para cada elemento, sin crear un nuevo array.

const colors = ['red', 'pink','blue']
const iteratedColors = colors.forEach(color => console.log(color) )

console.log(colors)
console.log(iteratedColors)

// Exercise: Fahrenheit to Celsius conversion

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]
const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit =>(5/9)*(fahrenheit-32))

console.log(temperaturesInFahrenheit)
console.log(temperaturesInCelsius)

// Exercise: Sum of elements in an Array 

const arrayNumbers = [1,2,3,4,5] 
let sum = 0
arrayNumbers.forEach(number => sum += number )

console.log(arrayNumbers)
console.log(sum)