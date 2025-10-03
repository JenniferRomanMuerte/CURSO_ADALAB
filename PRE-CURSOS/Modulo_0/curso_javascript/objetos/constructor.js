/* Para crear un constructor definimos una función que actuará como constructor.
    El nombre de la función inicia con mayúscula.
    Le asignamos propiedades y métodos usando 'this'.
    Esta función recibe parámetros para inicializar las propiedades del objeto.
*/
function Persona(nombre, edad, profesion) {
  this.nombre = nombre;
  this.edad = edad;
  this.profesion = profesion;
  this.saludar = function() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  };
}

// Luego, usamos la palabra clave 'new' para crear una instancia del objeto y le pasamos los argumentos necesarios.
const persona1 = new Persona("Carlos", 28, "Ingeniero");
console.log(persona1);
console.log(persona1.saludar());


// Para añadir métodos al prototipo del constructor, usamos 'Constructor.prototype'.
Persona.prototype.describir = function() {
  return `Soy ${this.nombre}, un ${this.profesion} de ${this.edad} años.`;
};
console.log(persona1.describir());

// Para añadir propiedades al prototipo del constructor, usamos 'Constructor.prototype'.
Persona.prototype.pais = "España";
console.log(persona1.pais);

