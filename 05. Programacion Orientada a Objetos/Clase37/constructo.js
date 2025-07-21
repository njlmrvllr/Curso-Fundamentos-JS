// const persona = {
//     nombre: 'DIego',
//     apellito: 'De granda'
// }

//funcion constructura
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//llamar instancia
const persona1 = new Persona('Juan','Perez',30)
console.log(persona1);

const persona2 = new Persona('Diego','De granda', 35);
console.log(persona2);

Persona.prototype.telefono = '555-555-5555'

persona1.nacionalidad = 'Mexicano'
console.log(persona1);

Persona.prototype.saludadr = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
