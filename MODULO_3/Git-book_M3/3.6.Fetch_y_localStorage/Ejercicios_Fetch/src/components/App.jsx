// Fichero src/components/App.jsx
import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import InputSearch from "./InputSearch";
import SeriesList from "./SeriesList";

function App() {
  const [series, setSeries] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi(searchName).then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      // La asiganamos a la variable de estado que queramos con set....(response)
      setSeries(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, [searchName]);
  return (
    <div>
      <h1>Buscador de series</h1>
      <InputSearch setSearchName={setSearchName} />
      {series.map((serie) => (
        <SeriesList key={serie.id} serie={serie} />
      ))}
    </div>
  );
}

export default App;
