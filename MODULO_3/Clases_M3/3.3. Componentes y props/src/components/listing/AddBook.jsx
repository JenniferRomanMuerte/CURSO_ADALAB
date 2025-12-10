import Preview from "./Preview";
import { useNavigate } from "react-router-dom";

const AddBook = ({
  newBookData,
  formAddVisible,
  addNewBook,
  fetchNewBook,
  changeFormVisible,
  resetNewBook
}) => {
  const navigate = useNavigate();
  const handleInput = (ev) => {
    const dataNewBook = {
      ...newBookData,
      [ev.target.id]: ev.target.value,
    };
    addNewBook(dataNewBook);
  };

  const handleAddBook = (ev) => {
    ev.preventDefault();
    fetchNewBook();
    navigate("/");
  };

  const handleResetBook = (ev) => {
    ev.preventDefault();
    addNewBook({}); // vacía newBookData en App
    ev.target.form?.reset(); // limpia los inputs no controlados
    resetNewBook();
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    changeFormVisible();
  };

  return (
    <section className="books">
      <h2 className="books__title">Añadir un libro</h2>
      <button className="btn" onClick={handleClick}>
        +
      </button>
      <section className={"form " + (formAddVisible ? "visible" : "")}>
        <form className="form__inputs" onInput={handleInput}>
          <div className="form__group">
            <label htmlFor="title" className="form__label">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="form__input"
              placeholder="Escribe el título..."
              value={newBookData.title}
            />
          </div>
          <div className="form__group">
            <label htmlFor="author" className="form__label">
              Autora
            </label>
            <input
              type="text"
              id="author"
              className="form__input"
              placeholder="Escribe el nombre de la autora..."
              value={newBookData.author}
            />
          </div>
          <div className="form__group">
            <label htmlFor="year" className="form__label">
              Año de publicación
            </label>
            <input
              type="number"
              min={1440}
              max={2025}
              id="year"
              className="form__input"
              placeholder="Escribe el año..."
              value={newBookData.year}
            />
          </div>
          <div className="form__group">
            <label htmlFor="image" className="form__label">
              Imagen
            </label>
            <input
              type="url"
              id="image"
              className="form__input"
              placeholder="Escribe la dirección de la imagen de la portada..."
              value={newBookData.image}
            />
          </div>
          <div className="form__group">
            <label htmlFor="new-genre" className="form__label">
              Género
            </label>
            <select id="genre" className="form__select" value={newBookData.genre}>
              <option value="">Todos los géneros</option>
              <option value="ciencia-ficcion">Ciencia Ficción</option>
              <option value="ensayo">Ensayo</option>
              <option value="drama">Drama</option>
            </select>
          </div>
          <div className="form__buttons">
            <button className="btn" onClick={handleResetBook}>
              Cancelar
            </button>
            <button className="btn" onClick={handleAddBook}>
              Guardar
            </button>
          </div>
        </form>
        <Preview newBookData={newBookData} />
      </section>
    </section>
  );
};

export default AddBook;
