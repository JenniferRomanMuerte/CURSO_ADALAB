// ======================================================
// FUNCIONES y MÉTODOS —
// ======================================================

// 1) Declarar una función y llamarla
function saludar(nombre) {
  console.log("1) Función normal:", "Hola,", nombre);
}
saludar("Jennifer");



// 2) Pasar funciones como argumentos (callback)
function ejecutar(accion) {
  // accion es una función que recibo como parámetro
  accion(); // aquí la llamo
}
// Defino dos funciones simples
function decirHola() {
  console.log("Hola 👋");
}
function decirAdios() {
  console.log("Adiós 👋");
}
// Ahora le paso las funciones como argumento
ejecutar(decirHola);   // imprime: Hola 👋
ejecutar(decirAdios);  // imprime: Adiós 👋
// 📌 Idea: ejecutar es como una caja.
// Lo que metas dentro (decirHola o decirAdios) es lo que se ejecutará.


// 3) Retornar funciones desde otras funciones
function externa() {
  // Esta función "interna" se devuelve para ejecutarla después
  function interna() {
    console.log("Soy la función interna devuelta");
  }
  return interna;
}
const nuevaFuncion = externa();
nuevaFuncion(); // ejecuta la interna


// 4) Asignar funciones a variables (función anónima)
const miFuncion = function () {
  console.log("Función en variable:", "Hola desde una función anónima");
};
miFuncion();


// 5) Propiedades y métodos de las funciones (solo .call)
function presentar() {
  // "this" lo decide quien llama con .call
  console.log(".call:", "Hola, soy " + this.nombre);
}
const persona = { nombre: "Ayla" };
presentar.call(persona); // establece "this" = persona


// 6) Anidar funciones (función dentro de otra)
function externa() {
  var mensaje = "Soy externa"; // accesible para la interna

  function interna() {
    console.log("Funciones anidadas:", mensaje);
  }

  interna();
}
externa();



// 7) Almacenar funciones en objetos (métodos)
const rocket = {
  nombre: "Falcon 9",
  launchMessage: function () {
    console.log("Método en objeto:", "¡Despegue exitoso de", this.nombre + "!");
  },
};
rocket.launchMessage();
