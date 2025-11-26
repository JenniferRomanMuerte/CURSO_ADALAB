// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";

function App() {
  // Variable de estado de array de objetos con las tareas
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);

  // Variable de estado para almacenar el valor del input
  const [searchName, setSearchName] = useState("");

  // Funcion para pintar las tareas
  const renderTasks = () => {
    /*
    Filtramos el array tasks quedandonos con el array de tareas que incluyan en su nombre el valor
    introducido en el input de buscar, que hemos guardado en la variable de estado searchName
    */
    return (
      tasks
        .filter((task) => {
          return task.task
            .toLocaleLowerCase()
            .includes(searchName.toLocaleLowerCase());
        })

        // Sobre el array obtenido pintamos las tareas, incluyendo el evento en cada li
        .map((task, index) => {
          return (
            <li
              id={index}
              className={task.completed ? "crossedOut" : ""}
              onClick={handleClick}
            >
              {task.task}
            </li>
          );
        })
    );
  };

  // Funcion manejadora del evento en los li
  const handleClick = (ev) => {
    // Obtenemos el índice que guardamos en la propiedad id (Lo pasamos a nº)
    const selectedIndex = parseInt(ev.target.id);
    // Hacemos una copia del array de tasks
    const updatedTasks = [...tasks];
    // Actualizamos la propiedad completed (inviertondola)
    updatedTasks[selectedIndex].completed =
      !updatedTasks[selectedIndex].completed;

    // Actualizamos el array de tasks con el nuevo array modificado
    setTasks(updatedTasks);
  };

  // Funcion manejadora del valor del input
  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  // Funcion para saber las tareas completadas y las que no
  const renderCountTasks = () => {
    // Obtenemos un array nuevo con las tareas completas
    const tasksCompleted = tasks.filter((task)=>{
      return task.completed === true;
    })
     // Obtenemos un array nuevo con las tareas  NO completas
    const tasksInompleted = tasks.filter((task)=>{
      return task.completed === false;
    })

    return (
      <div>
        <p>Tareas Totales: {tasks.length}</p> {/* Obtenemos el nº total de tareas */}
        <p>Tareas Totales: {tasksCompleted.length}</p> {/* Obtenemos el nº  de tareas completadas */}
        <p>Tareas Totales: {tasksInompleted.length}</p> {/* Obtenemos el nº de tareas no coimpletadas */}
      </div>
    );
  };

  // ¿Eres un bot o una persona?
  const ingredients = [
    "Macarrones",
    "Patatas",
    "Nueces",
    "Huevos",
    "Cebolla",
    "Cerveza",
  ];

  // Creamos un array para almacenar los ingre
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const isPerson =
    selectedIngredients.includes("Patatas") &&
    selectedIngredients.includes("Huevos") &&
    selectedIngredients.includes("Cebolla");

  const renderIngredients = () => {
    return ingredients.map((ingredient, index) => {
      return (
        <label key={index}>
          <input
            type="checkbox"
            name="ingredient"
            value={ingredient}
            onChange={handleIngredientChange}
          />
          {ingredient}
        </label>
      );
    });
  };

  const handleIngredientChange = (ev) => {
    if (ev.target.checked) {
      setSelectedIngredients([...selectedIngredients, ev.target.value]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ev.target.value)
      );
    }
  };

  return (
    // Lista de tareas con array de objetos
    <>
      <div>
        <h2>Mi lista de tareas</h2>
        <ol>{renderTasks()}</ol>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        {renderCountTasks()}
      </div>

      {/*¿Eres un bot o una persona?*/}
      <div>
        <h2>Selecciona los ingredientes de la tortilla de patatas</h2>
        <div>{renderIngredients()}</div>
        <div>
          {isPerson ? (
            <p>Eres una persona concebollista 🧅</p>
          ) : (
            <p>Eres un robot sin paladar 🤖</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
