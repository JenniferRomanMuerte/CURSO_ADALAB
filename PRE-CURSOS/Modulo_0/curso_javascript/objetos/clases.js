// Nueva manera de definir un objeto en JavaScript
class Persona {
    // Método especial para inicializar el objeto
    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad nombre
        this.edad = edad;     // Propiedad edad
    }
    // Método para saludar
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Llama al método saludar


