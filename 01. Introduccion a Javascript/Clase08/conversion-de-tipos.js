// Explicit Type Casting

const string = '42'
const intiger = parseInt(string)
console.log(intiger)
console.log(typeof intiger)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary,2)
console.log(binary)
console.log(typeof binary)

// Implicit Type Casting

const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) //concatena
console.log(stringValue + Number) //concatena
console.log(stringValue + booleanValue) //concatena
console.log(numberValue + stringValue) //concatena
console.log(numberValue + numberValue) //suma
console.log(numberValue + booleanValue) //suma
console.log(booleanValue + stringValue) //concatena
console.log(booleanValue +numberValue) //suma
console.log(booleanValue + booleanValue) //suma

