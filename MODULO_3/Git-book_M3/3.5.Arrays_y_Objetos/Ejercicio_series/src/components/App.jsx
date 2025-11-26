// Fichero src/components/App.jsx
import "../styles/App.scss";

import { useState } from "react";

const App = () => {
  const [series, setSeries] = useState([
    { id: "123", name: "Juego de tronos" },
    { id: "456", name: "Las chicas Gilmore" },
    { id: "678", name: "Gambita de Dama" },
  ]);
  const [favorites, setFavorites] = useState([]);

  // Función manejadora que se ejecuta cuando la usuaria pulsa en una serie
  const handleFavorite = (ev) => {
    // Obtenemos el id de la serie pintada. Este id lo estamos renderizando dentro del map
    // Por cierto, aquí solo puedo usar currentTarget y no target porque quiero leer el id del li escuchado
    const clickedSerieId = ev.currentTarget.id;

    // Buscar serie original
    const clickedSerie = series.find((serie) => serie.id === clickedSerieId);

    // Buscamos si la serie clicada ya está en el array de favoritos
    const isFavorite = favorites.some((fav) => fav.id === clickedSerieId);

    if (isFavorite) {
      // La quitamos
      const updatedFavorites = favorites.filter(
        (fav) => fav.id !== clickedSerieId
      );
      // Actualizamos el array con el nuevo array que ya no tienen la serie
      setFavorites(updatedFavorites);
    } else {
      // La añadimos
      setFavorites([...favorites, clickedSerie]);
    }
  };

  const renderSeries = () => {
    return series.map((serie) => {
      return (
        // Renderizamos cada serie añadiendo el atributo id
        <li key={serie.id} id={serie.id} onClick={handleFavorite}>
          <h2>{serie.name}</h2>
        </li>
      );
    });
  };
  const renderSeriesFavorite = () => {
    return favorites.map((serie) => {
      return (
        // Renderizamos cada serie añadiendo el atributo id
        <li key={serie.id} id={serie.id}>
          <h2>{serie.name}</h2>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de series:</h1>
      <ul>{renderSeries()}</ul>
      <h2>Lista de series favoritas:</h2>
      <ul>{renderSeriesFavorite()}</ul>
    </div>
  );
};

export default App;
