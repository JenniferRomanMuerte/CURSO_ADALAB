import { useState } from "react";
import "../styles/App.scss";

function App() {
  // Variables de estado
  const [classHidden, setClassHidden] = useState("");

  // VARIABLES
  const number = 23;
  const text = "Esto es un texto";

  // Se pueden crear variables que almacena una clase
  const classMain = "main";

  // Variable boleana
  const boolean = number > 20;

  // Objetos
  const persona = {
    nombre: "Jennifer",
    edad: 42,
  };

  // Funciones
  const saludar = (nombre) => {
    return `Hola ${nombre}`;
  };

  // Eventos
  const handleClickbutton = () => {
    console.log("Hola");
    if (classHidden == "") {
      setClassHidden("hidden"); // Para poder cambiarla el valor
    } else {
      setClassHidden(""); // Para poder cambiarla el valor
    }
  };

  const handleInput = (event) => {
    const nombreInput = event.target.value;
    console.log(nombreInput);
  };

  return (
    <div>
      <main className={classMain}>
        <h1>Clase Eventos y Estados</h1>
        <p>PARA MOSTRAR VARIABLES SE METEN ENTRE LLAVES</p>
        <p>Variable que tiene un número: {number}</p>
        <p>Variable que tiene un texto: {text}</p>
        {/* Podemos interpolar estas variales dentro de string template */}
        <p className={`parrafo  ${classHidden}`}>
          Lorem ipsum..... Soy un párrafo que se oculta o se muestra si se clica
          el botón
        </p>
        {/* Pintado condicional */}
        <p>
          Pintado condicional: La variable numero es mayor que 20:
          {boolean === true ? "SI" : "NO"}
        </p>
        {/* Pintado de objetos */}
        <p>
          Hola soy {persona.nombre} y tengo {persona.edad} años
        </p>
        {/* Llamadas a funciones */}
        <p>Llamamos a la función saludar: {saludar(persona.nombre)}</p>
        {/* Creación de eventos */}
        <button onClick={handleClickbutton}> Click Me</button>
        <form>
          <input
            type="text"
            placeholder="Introduce tu nombre"
            onInput={handleInput}
          ></input>
        </form>
      </main>
    </div>
  );
}

export default App;
