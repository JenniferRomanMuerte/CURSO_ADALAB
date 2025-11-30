// Fichero src/components/App.jsx
import "../styles/App.scss";
import ls from "../services/localStorage";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Header from "./Header";

function App() {
  /*useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      // La asiganamos a la variable de estado que queramos con set....(response)
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);
  */

  return (
    <div>
      <Header/>
     <Routes>
        <Route path="/" element={<h1>Estamos en la página principal</h1>} />
        <Route path="/repositories" element={<p>Repos lorem</p>} />
        <Route path="/packages" element={<p>Packages lorem</p>} />
        <Route path="/people" element={<p>People lorem</p>} />
        <Route path="/teams" element={<p>Teams lorem</p>} />
        <Route path="/projects" element={<p>Projects lorem</p>} />
        <Route path="/settings" element={<p>Settings lorem</p>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>

    </div>
  );
}

export default App;
