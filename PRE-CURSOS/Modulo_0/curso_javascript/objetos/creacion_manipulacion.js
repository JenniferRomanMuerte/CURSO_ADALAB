// Anatomia de un objeto
const persona = {
  nombre: "Carlos", // Propiedad
  edad: 28, // Propiedad
  direccion: { // Propiedad que es otro objeto
    calle: "Av. Siempre Viva",
    numero: 742
  },
  saludar: function() { // Método
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
};
console.log(persona);
console.log(persona.saludar());
console.log(persona.direccion.calle);
console.log(persona.direccion.numero);

// Añadir nuevas propiedades y métodos
persona.profesion = "Ingeniero";
persona.trabajar = function() {
  return `${this.nombre} está trabajando como ${this.profesion}.`;
};
console.log(persona.trabajar());
console.log(persona);

// Eliminar propiedades y métodos
delete persona.edad;
delete persona.trabajar;
console.log(persona);
console.log(persona.trabajar); // undefined // El método ya no existe
