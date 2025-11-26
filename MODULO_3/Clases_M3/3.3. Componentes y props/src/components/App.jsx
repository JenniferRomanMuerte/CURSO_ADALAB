import "../styles/App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useState } from "react";
import BookItem from "./layout/listing/BookItem";
function App() {
  // Definimos una variable de estado para controlar la visibilidad del formulario
  const [formAddClass, setFormAddClass] = useState("visible");
  const [formAddVisible, setFormAddVisible] = useState(true);
  const books = [
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818,
      image: "https://placehold.co/200x300/1a1a2e/eee?text=Libro",
      read: true,
    },
    {
      title: "El cuento de la criada",
      author: "Margaret Atwood",
      year: 1985,
      image: "https://placehold.co/200x300/1a1a2e/eee?text=Libro",
      read: false,
    },
    {
      title: "Matar a un ruiseñor",
      author: "Harper Lee",
      year: 1960,
      image: "https://placehold.co/200x300/1a1a2e/eee?text=Libro",
      read: true,
    },
    {
      title: "La mano izquierda de la oscuridad",
      author: "Ursula K. Le Guin",
      year: 1969,
      image: "https://placehold.co/200x300/1a1a2e/eee?text=Libro",
      read: false,
    },
  ];

  const renderBooks = () => {
    return books.map((book, index) => {
      return (
        <BookItem
          key={index}
          title={book.title}
          author={book.author}
          year={book.year}
          image={book.image}
          read={book.read}
        />
      );
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    if (formAddVisible) {
      setFormAddVisible(true);
    } else {
      setFormAddVisible(false);
    }
  };
  return (
    <>
      <Header />
      <main className="main">
        <section className="filters">
          <h2 className="filters__title">Filtrar libros</h2>
          <form className="filters__form">
            <div className="filters__group">
              <label htmlFor="filter-title" className="filters__label">
                Buscar por título
              </label>
              <input
                type="text"
                id="filter-title"
                className="filters__input"
                placeholder="Escribe el título..."
              />
            </div>
            <div className="filters__group">
              <label htmlFor="filter-genre" className="filters__label">
                Filtrar por género
              </label>
              <select id="filter-genre" className="filters__select">
                <option value="">Todos los géneros</option>
                <option value="ficcion">Ficción</option>
                <option value="ciencia-ficcion">Ciencia Ficción</option>
                <option value="ensayo">Ensayo</option>
                <option value="poesia">Poesía</option>
                <option value="novela">Novela</option>
              </select>
            </div>
          </form>
        </section>

        <section className="books">
          <h2 className="books__title">Listado de libros</h2>
          <button className="btn" onClick={handleClick}>
            +
          </button>
          <section className={"form " + (formAddVisible ? "visible" : "")}>
            <form className="form__inputs">
              <div className="form__group">
                <label htmlFor="new-title" className="form__label">
                  Título
                </label>
                <input
                  type="text"
                  id="new-title"
                  className="form__input"
                  placeholder="Escribe el título..."
                />
              </div>
              <div className="form__group">
                <label htmlFor="new-author" className="form__label">
                  Autora
                </label>
                <input
                  type="text"
                  id="new-author"
                  className="form__input"
                  placeholder="Escribe el nombre de la autora..."
                />
              </div>
              <div className="form__group">
                <label htmlFor="new-year" className="form__label">
                  Año de publicación
                </label>
                <input
                  type="number"
                  min={1440}
                  max={2025}
                  id="new-year"
                  className="form__input"
                  placeholder="Escribe el año..."
                />
              </div>
              <div className="form__group">
                <label htmlFor="new-image" className="form__label">
                  Imagen
                </label>
                <input
                  type="url"
                  id="new-image"
                  className="form__input"
                  placeholder="Escribe la dirección de la imagen de la portada..."
                />
              </div>
              <div className="form__group">
                <label htmlFor="new-genre" className="form__label">
                  Género
                </label>
                <select id="new-genre" className="form__select">
                  <option value="">Todos los géneros</option>
                  <option value="ficcion">Ficción</option>
                  <option value="ciencia-ficcion">Ciencia Ficción</option>
                  <option value="ensayo">Ensayo</option>
                  <option value="poesia">Poesía</option>
                  <option value="novela">Novela</option>
                </select>
              </div>
              <div className="form__buttons">
                <button className="btn">Cancelar</button>
                <button className="btn">Guardar</button>
              </div>
            </form>
            <section className="form__preview">
              <p className="form__previewText">Así se verá la tarjeta:</p>
              <li className="book">
                <img
                  src="https://placehold.co/200x300/1a1a2e/eee?text=Portada"
                  alt="Portada del libro Título"
                  className="book__image"
                />
                <div className="book__info">
                  <h3 className="book__title">El título</h3>
                  <p className="book__author">La autora</p>
                  <p className="book__year">El año</p>
                  <button className="book__status book__status--pending">
                    Pendiente
                  </button>
                </div>
              </li>
            </section>
          </section>
          <ul className="books__list">{renderBooks()}</ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
