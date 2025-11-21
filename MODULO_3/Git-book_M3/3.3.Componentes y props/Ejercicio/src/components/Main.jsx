import "../styles/Main.scss";
import img01 from "../images/lpbts-mod05-img01-desk.png";
import img04 from "../images/lpbts-mod05-img04-mob.png";
import img03 from "../images/lpbts-mod05-img03-mob.png";

function Main() {
  return (
    <main className="main">
        <section id="hero" className="section__hero">
          <h1 className="section__hero--title">COMIENZOS COMPARTIDOS</h1>
          <h2 className="section__hero--subtitle">
            Todo lo que necesitan para volver al cole con ilusión
          </h2>
          <a href="#school" className="section__hero--link"></a>
        </section>
        <section className="section__blank">
          <h3 className="section__blank--h3">HISTORIAS, MODA Y ROPA DEPORTIVA</h3>
          <h2 className="section__blank--h2">TU TIENDA DE DEPORTE</h2>
          <p className="section__blank--text">
            El deporte nos mantiene en forma. Nos mantiene en alerta. Nuestra
            ropa deportiva para hombre y mujer te ofrece las últimas
            tecnologías, a la altura de tu rendimiento, para que superes tu
            mejor marca personal.
          </p>
          <a href="https://adalab.es/" className="section__blank--button">
            Comprar
          </a>
        </section>

        <section id="school" className="section__school">
          <h3 className="section__school--h3">
            Prepáralos con tus marcas favoritas!
          </h3>
          <h2 className="section__school--h2">VUELTA AL COLE</h2>
          <section className="section__school--articles">
            <article className="section__school--articles--article">
              <div className="section__school--articles--article--container">
                <img
                  src={img01}
                  alt="Joven con mochila puma"
                  className="section__school--articles--article--container--img"
                />
              </div>
              <h3 className="section__school--articles--article--h3">
                Mochilas escolares
              </h3>
            </article>
            <article className="section__school--articles--article">
              <div className="section__school--articles--article--container">
                <img
                  src={img04}
                  alt="Niño con lapices de colores"
                  className="section__school--articles--article--container--img"
                />
              </div>
              <h3 className="section__school--articles--article--h3">Estuches</h3>
            </article>
            <article className="section__school--articles--article">
              <div className="section__school--articles--article--container">
                <img
                  src={img03}
                  alt="Joven con mochila nike"
                  className="section__school--articles--article--container--img"
                />
              </div>
              <h3 className="section__school--articles--article--h3">
                Bolsas de deporte
              </h3>
            </article>
          </section>
          <a href="https://adalab.es/" className="section__school--button">
            Empezar ahora
          </a>
        </section>
      </main>
  );
}
export default Main;
