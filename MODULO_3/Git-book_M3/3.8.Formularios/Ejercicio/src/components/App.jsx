// Fichero src/components/App.jsx
import "../styles/App.scss";

// Fichero src/components/App.jsx
import { useState, useEffect } from "react";

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [optionSelected, setOptionSelected] = useState("");
  const options = ["Suma", "Resta", "Multiplicacion", "Division"];
  const [total, setTotal] = useState(0);
  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const handleOperation = (ev) =>{
    setOptionSelected(ev.target.value);
  }

  useEffect(() => {

     if(optionSelected==="Suma"){
      setTotal(parseInt(numberA) + parseInt(numberB));
    }
     else if(optionSelected==="Resta"){
      setTotal(parseInt(numberA) - parseInt(numberB));
    }
    else  if(optionSelected==="Multiplicacion"){
      setTotal(parseInt(numberA) * parseInt(numberB));
    }
    else  if(optionSelected==="Division"){
      setTotal(parseInt(numberA) / parseInt(numberB));
    }
  }, [optionSelected]);


  const handleReset = (ev) =>{

  }
  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label htmlFor="operation">Elige la operación</label>
        <select id="operation"  onChange = {handleOperation}>
          <option value="" disabled selected>
            Elige la operacion
          </option>
          <option value={options[0]}>{options[0]}</option>
          <option value={options[1]}>{options[1]}</option>
          <option value={options[2]}>{options[2]}</option>
          <option value={options[3]}>{options[3]}</option>
        </select>
        <label>
          Escribe un número:
          <input
            type="number"
            name="name"
            onChange={handleNumberA}
            value={numberA}
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="email"
            onChange={handleNumberB}
            value={numberB}
          />
        </label>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
      <p>
        La {optionSelected} de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;
