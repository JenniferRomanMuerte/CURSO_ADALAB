import { Link } from "react-router";

// Función para formatear la fecha
function formatearFecha(fecha) {
  const opciones = { year: "numeric", month: "long", day: "numeric" };
  return new Date(fecha).toLocaleDateString("es-ES", opciones);
}

function ListingAnimesPage({ animes, fetchStatus }) {
  return (
    <>
      <Link className="link" to="/new">
        Nuevo
      </Link>
      {fetchStatus === "loading" && <div className="anime-grid">Loading</div>}
      {fetchStatus === "error" && (
        <div className="anime-grid">Ocurrió algún error en el servidor</div>
      )}
      {fetchStatus === "" && (
        <div className="anime-grid">
          {animes.map((anime) => (
            <article key={anime.id} className="anime-card">
              <header className="anime-card__header">
                <h2 className="anime-card__title">{anime.titulo}</h2>
                <span className="anime-card__genre">{anime.creadora}</span>
              </header>
              <div className="anime-card__body">
                <p className="anime-card__description">{anime.descripcion}</p>
              </div>
              <footer className="anime-card__footer">
                <span className="anime-card__date">
                  {formatearFecha(anime.fecha_publicacion)}
                </span>
              </footer>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default ListingAnimesPage;
