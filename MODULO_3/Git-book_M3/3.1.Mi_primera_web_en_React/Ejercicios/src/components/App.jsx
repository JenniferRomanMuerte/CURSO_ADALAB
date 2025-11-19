// Fichero src/components/App.jsx
import '../styles/App.scss';

function App() {
  return (
    <main className="main">
    <h1 className="main__title">Juego Piedra, Papel y Tijera</h1>
    <form className="main__form">
      <label htmlFor="play" className="main__form--label">Introduce aqui tu jugada:</label>
      <div className="main__form--interaction">
      <select name="play" id="play" className="main__form--interaction--select js-form_select" defaultValue="">
        <option disabled>Seleccione su jugada</option>
        <option value="piedra">Piedra</option>
        <option value="papel">Papel</option>
        <option value="tijera">Tijera</option>
      </select>
      <button className="main__form--interaction--button js-form_button">Jugar</button>
      <button className="main__form--interaction--buttonReset js-reset_button hidden">Reiniciar Juego</button>
      </div>
    </form>
    <span className="main__message js-message">Vamos a jugar!</span>
    <span className="main__score js-runs">Tiradas: 0</span>
    <span className="main__score js-player_score">Jugador: 0</span>
    <span className="main__score js-computer_score">Computadora: 0</span>
  </main>
  );
}

export default App;