const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - explicit return
const newGreeting =  (name) => {
    return `Hi, ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit = name => `hi, ${name}`
const newGreetingImplicitWithTwoParameter = (name,lastName) => `hi, I'm ${name} ${lastName}`

//Lexical Binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTradionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)},
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}


fictionalCharacter.messageWithTradionalFunction('With great power comes great responsability')
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus')


