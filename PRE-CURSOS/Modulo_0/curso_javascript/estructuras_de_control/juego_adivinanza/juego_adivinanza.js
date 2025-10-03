const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

if (numeroJugador === numeroSecreto) {
    alert("¡Felicidades! Adivinaste el número secreto.");
} else if (numeroJugador < numeroSecreto) {
    alert("El número secreto es mayor. Inténtalo de nuevo.");
} else if (numeroJugador > numeroSecreto) {
    alert("El número secreto es menor. Inténtalo de nuevo.");
} else {
    alert("Lo siento, el número secreto era " + numeroSecreto + ".");
}