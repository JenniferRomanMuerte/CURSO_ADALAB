// SCOPE
// Determina la visibilidad de las variables
// var, a nivel de función
// let y const, a nivel de bloque

function ejemploScope() {
    if (true) {
        var varVariable = 'Soy una variable var';
        let letVariable = 'Soy una variable let';
        const constVariable = 'Soy una variable const';
    }
    console.log(varVariable); // Salida: Soy una variable var
    console.log(letVariable); // Error: letVariable is not defined
    console.log(constVariable); // Error: constVariable is not defined
}
ejemploScope();


// CONTEXTO DE EJECUCIÓN
// Contexto global, incluye variables y funciones de todo nuestro código
var globalVar = 'Soy una variable global';
function contextoGlobal() {
    console.log(globalVar); // Salida: Soy una variable global
}
contextoGlobal();

//Contexto local, incluye variables y funciones dentro de una función
function contextoLocal() {
    var localVar = 'Soy una variable local';
    console.log(localVar); // Salida: Soy una variable local
}
contextoLocal();


//SCOPE CHAIN
// Si una variable no se encuentra en el contexto local, se busca en el contexto global
var nombre = 'Mundo';
function saludar() {
    console.log(`Hola ${nombre}`);
}
saludar(); // Salida: Hola Mundo

// Si una variable no se encuentra en el contexto local ni en el global, se produce un error
function despedir() {
    console.log(`Adiós ${apellido}`);
}
//despedir(); // Error: apellido is not defined