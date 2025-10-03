// Sólo las clases y funciones constructoras puyeden generar prototipos
// La propiedad de prototipo se genera sola


// Classe con 2 propiedades y un método
class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitrirSonido(){
        console.log("El animal emite un sonido");
    }
}

/*
Clase que extiende de la clase Animal para usar sus propiedades y métodos (clase padre),
para ello declaramos la clase la palabra reservada extends y la calse de la que Hereda
*/
/*
Si queremos usar las propiedades de la clase padre debemos declarlas en el contructor,
y llamarlas en vez de con this (que haría referencia a la clase perro), llamarlas con super
(palabra reservada que hace referencia a la clase padre)
*/
/*
Si declaramnos un método que existe en la clase padre lo sobreeescribimos
*/
class Perro extends Animal{
    constructor(nombre,tipo,raza){
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log('El perro ladra');
    }
    correr(){
        console.log(`${this.nombre} corre feliz`)
    }
}

// Creamos una instancia de Perro
const perro1 = new Perro("Ayla", "Perro", "Borer Collie");

// Llamamos a su método propio
perro1.correr(); // Ayla corre feliz

/*
Llamamos al método que comparten la clase Perro y la clase Animal,
como perro1 es de la clase Perro, el método de clase Perro sobreescribe al de la clase Animal
*/
perro1.emitirSonido(); // El perro ladra


// SI QUIERO CREAR UN MÉTODO EN MI INSTANCIA QUE NO TIENE LA CLASE CONSTRUCTORA
/*
Este método está disponible sólo en esta instancia no en la clase,
con lo cual si genero otra instancia de la clase Perro no tendrá este método
*/
perro1.nuevoMetodo = function(){
    console("Esrte es un nuevo método");
}

// PARA AÑADIR UN MÉTODO NUEVO A LA CLASE
Perro.prototype.segundoMetodo = function(){
    console.log("Es un segundo método añadido a la clase");
}