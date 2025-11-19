// Fichero src/components/App.jsx
import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(false);
  console.log(contador);
  console.log(darkMode);
  console.log(menu);

  //Muestra la tecla pulsada en la consola
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log("La tecla pulsada es: ", ev.key);
  };

  // El contador
  const increments = (ev) => {
    debugger;
    setContador(contador + 1);
  };
  const decrements = (ev) => {
    setContador(contador - 1);
  };

  // DarkMode

  // Función para cambiar el estado de la variable darkMode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Función que lee el estado de darkMode
  const renderDarkModeText = () => {
    // Si es true retorna el párrafo
    if (darkMode === true) {
      return <p>Tienes activado el dark mode</p>;
    }
    // Si es false devuelve null
    return null;
  };

  // El menú de hamburguesa
  const toggleMenu = () => {
    setMenu(!menu);
    if (menu) {
    }
  };

 
  return (
    <div>
      {/*Muestra la tecla pulsada en la consola*/}
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <input
          onKeyUp={handleInput}
          type="text"
          placeholder="Teclea lo que quieras"
          className="form__input"
        />
      </form>
      {/*El contador*/}
      <div>
        <p>Contador: {contador}</p>
        <button onClick={increments}>Incrementa el contador</button>
        <button onClick={decrements}>Decrementa el contador</button>
      </div>
      {/*Dark mode*/}
      <div className={darkMode ? "dark" : ""}>
        {" "}
        {/* Si el estado de darkMode es true le ponemos la clase si no se la quitamos */}
        <button onClick={toggleDarkMode}>Des/activar el dark mode</button>
        {renderDarkModeText()}{" "}
        {/* Pintammos lo que nos devuelva esta funcion */}
        <p>Lorem ipsum</p>
      </div>
      {/*El menú de hamburguesa*/}
      <div className="menu">
        <div className="menu__open" onClick={toggleMenu}>
          {" "}
          {/*Función para cambiar el estado*/}
          <i className="fa-solid fa-bars menu__open--icon"></i>
        </div>
        <div className={menu ? "menu__container" : "hidden menu__container"}>
          {" "}
          {/*Dependiendo del estado ponemos unas clase su otras*/}
          <div className="menu__container--close">
            <i className="fa-solid fa-arrow-right" onClick={toggleMenu}></i>{" "}
            {/*Función para cambiar el estado*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
