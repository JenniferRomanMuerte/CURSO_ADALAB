let contador = 0;

// Se ejecuta al menos una vez, 1º entra en el bucle y luego evalúa la condición
do {
    console.log(`Iteración ${contador}`);
    contador++;
} while (contador < 5);

console.log('Bucle terminado');