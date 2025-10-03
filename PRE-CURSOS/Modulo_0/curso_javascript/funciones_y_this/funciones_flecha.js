//FUNCIONES FLECHA

//Las funciones flecha son una forma más concisa de escribir funciones en JavaScript.
//Tienen una sintaxis más corta que las funciones tradicionales.

//Sintaxis básica de una función flecha:
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(2, 3)); // Salida: 5

//Si la función tiene un solo parámetro, los paréntesis son opcionales:
const duplicar = x => {
    return x * 2;
};
console.log(duplicar(4)); // Salida: 8

//Si la función tiene una sola expresión, las llaves y la palabra clave "return" son opcionales:
const restar = (a, b) => a - b;
console.log(restar(5, 2)); // Salida: 3

//Si no hay parámetros, se deben usar paréntesis vacíos:
const saludar = () => 'Hola Mundo';
console.log(saludar()); // Salida: Hola Mundo



// LEXICAL BINDING
//Las funciones flecha no tienen su propio "this".
const persona = {
    nombre: 'Juan',
    saludar: () => {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
persona.saludar(); // Salida: Hola, mi nombre es undefined
//En este caso, "this" no se refiere al objeto "persona", sino al contexto global (o undefined en modo estricto).

//Para mantener el contexto de "this", se debe usar una función tradicional:
const persona1 = {
    nombre: 'Juan',
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
persona1.saludar(); // Salida: Hola, mi nombre es Juan