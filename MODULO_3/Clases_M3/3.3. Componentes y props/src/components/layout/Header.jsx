import "../../styles/layout/Header.scss";
import Saludar from "../Saludar/";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Mi Biblioteca</h1>
      <p className="header__subtitle">Catálogo de libros por leer</p>
      {/*<Saludar color = "red" nombre = "Jennifer"/>
      <Saludar color = "green" nombre = "Maria"/>*/}
      <nav className="header__nav">
        <Link className="header__nav--link" to="/">Inicio</Link>
        <Link className="header__nav--link" to="/about-us">Sobre nosotras</Link>
        <Link className="header__nav--link" to="/add-book">Añadir un libro</Link>
        <Link className="header__nav--link" to="https:///adalab.es">Sobre Adalab</Link>
      </nav>
    </header>
  );
}

export default Header;
