// FUNCIONES PURAS
// Una función pura es una función que, dado un mismo conjunto de argumentos, siempre devuelve el mismo resultado y no produce efectos secundarios (side effects).
// Ejemplo de función pura:
function suma(a, b) {
    return a + b;
}

// Cada vez que llamamos a suma(2, 3), siempre obtendremos 5 y no modificamos ninguna variable externa.

// FUNCIONES IMPURAS
// Una función impura es una función que puede devolver resultados diferentes para los mismos argumentos o que produce efectos secundarios.
let contador = 0;
function incrementarContador() {
    contador++;
    return contador;
}
// Cada vez que llamamos a incrementarContador(), el valor de contador cambia, lo que significa que la función no es pura.

// Otro ejemplo de función impura:
function obtenerFechaActual() {
    return new Date();
}
// Cada vez que llamamos a obtenerFechaActual(), obtenemos una fecha diferente, lo que la hace impura.

// Resumen:
// - Las funciones puras son predecibles y fáciles de probar, ya que siempre devuelven el mismo resultado para los mismos argumentos.
// - Las funciones impuras pueden ser más difíciles de manejar debido a sus efectos secundarios y la variabilidad en sus resultados.