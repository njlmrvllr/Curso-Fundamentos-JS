class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre 
        this.edad =edad
    }    
    saludar() {
        console.log(`Hola, mi nombres es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Salimcito',18)
console.log(persona1);
persona1.saludar()