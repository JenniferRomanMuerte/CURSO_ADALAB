import "../../styles/layout/Header.scss";
import Saludar from "../Saludar/"

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Mi Biblioteca</h1>
      <p className="header__subtitle">Catálogo de libros por leer</p>
      <Saludar color = "red" nombre = "Jennifer"/>
      <Saludar color = "green" nombre = "Maria"/>
    </header>
  );
}

export default Header;