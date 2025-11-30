const Filter = ({showFilterBooks}) => {
  const handleInput = (ev) =>{
    ev.preventDefault ;
    const property = ev.target.id;
    const value = ev.target.value;
    showFilterBooks(property,value);
  }
  return (
    <section className="filters">
                <h2 className="filters__title">Filtrar libros</h2>
                <form className="filters__form" onInput={handleInput}>
                  <div className="filters__group">
                    <label htmlFor="title" className="filters__label">
                      Buscar por título
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="filters__input"
                      placeholder="Escribe el título..."
                    />
                  </div>
                  <div className="filters__group">
                    <label htmlFor="genre" className="filters__label">
                      Filtrar por género
                    </label>
                    <select id="genre" className="filters__select">
                      <option value="">Todos los géneros</option>
                      <option value="ciencia-ficcion">Ciencia Ficción</option>
                      <option value="ensayo">Ensayo</option>
                      <option value="drama">Drama</option>
                    </select>
                  </div>
                </form>
              </section>
  );
};

export default Filter;