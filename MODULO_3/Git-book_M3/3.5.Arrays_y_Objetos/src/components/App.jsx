// Fichero src/components/App.jsx
import "../styles/App.scss";

function App() {
  // Tenemos un array con los nombres que queremos pintar
  const adalabers = ["María", "Lucía", "Sofía", "Nerea"];

  // Creamos una función que se encargará de ejecutar el código para pintar el array
  const renderAdalabers = () => {
    /*
     Devolvemos el array que creamos con map, al recorrer el array de adalabers,
     metemos cada valor de éste (adalaber) en una etiqueta li,
     porque React necesita que lo que que va a pintar se lo devolvamos con etiquetas HTML
     */
    /*
    En React por buenas practicas debemos ponerle al elemento contenedor que estamos creando (al padre),
    si el array es un array de objetos y tienen id, usaremos éste, pero sino, usaremos el index del elemento en el array
    */
    return adalabers.map((adalaber,index) => {
      return (
        <li key = {index}>
          <span>{adalaber}</span>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de Adalabers</h1>
      <ul>{renderAdalabers()}</ul>{" "}
      {/** Llamamos a la función para que pinte aqui los li de las adalabers */}
    </div>
  );
}
export default App;
