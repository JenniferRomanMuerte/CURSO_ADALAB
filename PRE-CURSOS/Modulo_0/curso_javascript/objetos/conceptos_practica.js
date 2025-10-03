//  Estructuras de datos que permiten agrupar información en un formato de "propiedad-valor".
// Pueden contener otros objetos, arreglos, funciones y cualquier otro tipo de dato.

// 1. Creación de un objeto
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  direccion:{
    calle: "Calle Falsa 123",
    codigoPostal: "28013"
  }
};
console.log(persona);

// 2. Acceso a propiedades
console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 30
console.log(persona.direccion.calle); // Calle Falsa 123

// 3. Métodos (funciones dentro de objetos)

const persona1 = {
  nombre: "John",
  edad: 30,
  saludar: function() {
    return `Hola, mi nombre es ${this.nombre}`;
  }
};

console.log(persona1.saludar()); // Hola, mi nombre es John
