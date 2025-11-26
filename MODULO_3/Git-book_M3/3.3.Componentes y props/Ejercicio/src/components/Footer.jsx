import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
        <a href="#hero" className="footer__link"></a>
        <nav className="footer__links">
          <a href="https://adalab.es/" className="footer__links--link">
            ZAPATILLAS
          </a>
          <a href="https://adalab.es/" className="footer__links--link">
            ROPA
          </a>
          <a href="https://adalab.es/" className="footer__links--link">
            NIÑO/A
          </a>
          <a href="https://adalab.es/" className="footer__links--link">
            DESTACADOS
          </a>
          <a href="https://adalab.es/" className="footer__links--link">
            TIPS
          </a>
        </nav>
        <nav className="footer__links ">
          <a href="https://adalab.es/" className="footer__links--link">
            TWITTER
          </a>
          <a href="https://adalab.es/" className="footer__links--link">
            INSTAGRAM
          </a>
          <a href="https://adalab.es/" className="footer__links--link">
            YOUTUBE
          </a>
        </nav>
        <section className="footer__copyright">
          <small className="footer__copyright--copy">&copy;2023</small>
          <small className="footer__copyright--icon">
            we <i className="fa fa-heart" aria-hidden="true"></i> run
          </small>
        </section>
      </footer>
  );
}
export default Footer;
