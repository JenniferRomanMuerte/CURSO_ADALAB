const SerieItem = ({ serie: { id, name, type, language, genres, runtime } }) => {
// Hacemos destructuting directamente en la prop que recibimos
  return (
   <li className="list__item" id={id}>
    <h3>{name}</h3>
      <p>Tipo: {type}</p>
      <p>Idioma: {language}</p>
      <p>Géneros: {genres.join(", ")}</p>
      <p>Duración: {runtime} min</p>
   </li>
  );
};

export default SerieItem;