// How to create an Array ? 

//1. new Array() or Array()

const fruits = Array('apple','banana','orange')
console.log(fruits)

const jusOneNumber = Array(12) //no funciona para un solo elemento
console.log(jusOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

//2. Array literal syntax

const OneNumber = [4]
console.log(OneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

//arrays mixtos
const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity:'1 cup'
    },
    false
]
console.log(recipeIngredients)


// Accesing arrays elements
const firstFruit = fruits[0]
console.log(firstFruit)

//length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)