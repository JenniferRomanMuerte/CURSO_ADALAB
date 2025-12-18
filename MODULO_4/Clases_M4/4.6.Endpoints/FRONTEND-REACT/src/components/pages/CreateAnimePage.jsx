import { Link } from "react-router";

function CreateAnimePage({
  newAnimeData,
  handleNewAnimeInput,
  handleNewAnimeClick,
}) {
  const handleInput = (ev) => {
    handleNewAnimeInput(ev.target.id, ev.target.value);
  };

  return (
    <div className="modal_background">
      <div className="modal">
        <h2>Añadir un nuevo anime</h2>
        <form
          className="modal_form"
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <label htmlFor="titulo">Titulo:</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            value={newAnimeData.titulo}
            onInput={handleInput}
          />
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            name="descripcion"
            id="descripcion"
            value={newAnimeData.descripcion}
            onInput={handleInput}
          ></textarea>
          <input type="submit" value="Guardar" onClick={handleNewAnimeClick} />
          <p></p>
          <Link className="modal_link" to="/">
            Volver
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateAnimePage;
