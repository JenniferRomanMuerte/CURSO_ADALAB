import "../styles/App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function App() {
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
          <button className="btn">+</button>
          <section className="form">
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
          <ul className="books__list">
            <li className="book book--read">
              <img
                src="https://placehold.co/200x300/1a1a2e/eee?text=Libro"
                alt="Portada del libro Frankenstein"
                className="book__image"
              />
              <div className="book__info">
                <h3 className="book__title">Frankenstein</h3>
                <p className="book__author">Mary Shelley</p>
                <p className="book__year">1818</p>
                <button className="book__status book__status--read">
                  Leído
                </button>
              </div>
            </li>

            <li className="book">
              <img
                src="https://placehold.co/200x300/1a1a2e/eee?text=Libro"
                alt="Portada del libro El cuento de la criada"
                className="book__image"
              />
              <div className="book__info">
                <h3 className="book__title">El cuento de la criada</h3>
                <p className="book__author">Margaret Atwood</p>
                <p className="book__year">1985</p>
                <button className="book__status book__status--pending">
                  Pendiente
                </button>
              </div>
            </li>

            <li className="book book--read">
              <img
                src="https://placehold.co/200x300/1a1a2e/eee?text=Libro"
                alt="Portada del libro Matar a un ruiseñor"
                className="book__image"
              />
              <div className="book__info">
                <h3 className="book__title">Matar a un ruiseñor</h3>
                <p className="book__author">Harper Lee</p>
                <p className="book__year">1960</p>
                <button className="book__status book__status--read">
                  Leído
                </button>
              </div>
            </li>

            <li className="book">
              <img
                src="https://placehold.co/200x300/1a1a2e/eee?text=Libro"
                alt="Portada del libro La mano izquierda de la oscuridad"
                className="book__image"
              />
              <div className="book__info">
                <h3 className="book__title">
                  La mano izquierda de la oscuridad
                </h3>
                <p className="book__author">Ursula K. Le Guin</p>
                <p className="book__year">1969</p>
                <button className="book__status book__status--pending">
                  Pendiente
                </button>
              </div>
            </li>
          </ul>
        </section>
      </main>
     <Footer/>
    </>
  );
}

export default App;
