import { Link, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Overview</Link>
      <Link to="/repositories">Repositories</Link>
      <Link to="/packages">Packages</Link>
      <Link to="/people">People</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/settings">
        Settings
      </Link>

      <Routes>
        <Route
          path="/settings"
          element={<div>Zona no apta para manazas</div>}
        />
        <Route
          path="/projects"
          element={<div>Zona no apta para manazas</div>}
        />
      </Routes>
    </header>
  );
};

export default Header;
