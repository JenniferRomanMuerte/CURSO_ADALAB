// CLOSURE
// Una closure es una función que recuerda el ámbito léxico en el que fue creada, incluso cuando se ejecuta fuera de ese ámbito.
// Esto permite que la función acceda a variables de su entorno original, incluso después de que ese entorno haya desaparecido.
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    }
}
const contador1 = crearContador();
console.log(contador1()); // Salida: 1
console.log(contador1()); // Salida: 2
const contador2 = crearContador();
console.log(contador2()); // Salida: 1

// ÁMBITO LÉXICO
// El ámbito léxico se refiere al alcance de las variables basado en la estructura del código fuente.
// Las funciones pueden acceder a variables definidas en su ámbito padre, pero no a variables definidas en ámbitos hijos.
function padre() {
    let mensaje = "Hola desde el ámbito padre";
    function hijo() {
        let mensaje = "Hola desde el ámbito hijo";
        console.log(mensaje);
    }
    hijo();
}
padre(); // Salida: "Hola desde el ámbito hijo"

// En este ejemplo, la función `hijo` tiene su propia variable `mensaje`, que oculta la variable `mensaje` del ámbito padre.

