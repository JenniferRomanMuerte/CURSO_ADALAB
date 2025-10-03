// Estructura de una función en JavaScript

// Declaración de una función
function nombreDeLaFuncion(parametros) {
  // Cuerpo de la función
  // Instrucciones a ejecutar
  // Puede incluir una declaración de retorno
  return valorDeRetorno; // Opcional
}
// Ejemplo de una función que suma dos números
function sumar(a, b) {
  return a + b; // Devuelve la suma de a y b
}
// Llamada a la función
let resultado = sumar(5, 3);
console.log(resultado); // Imprime: 8

// Ejemplo práctico: Función para calcular el precio con descuento
function calculateDiscountedPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;
  return priceWithDiscount;
}

let originalPrice = 100;
let discount = 15; // 15%
let finalPrice = calculateDiscountedPrice(originalPrice, discount);
console.log(`El precio con descuento es: $${finalPrice}`); // Imprime: El precio con descuento es: $85