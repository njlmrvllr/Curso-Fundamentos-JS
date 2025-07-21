//Methods that modify original array(Mutability)
// Ampliando Arrrays con push()
const countries =['USA', 'Canada','UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)

// Eliminando con pop()

const removedCountry = countries.pop()

console.log(countries)
console.log(removedCountry)