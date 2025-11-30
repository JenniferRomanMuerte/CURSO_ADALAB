// Fichero src/components/App.jsx
import "../styles/App.scss";
import ls from "../services/localStorage";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Catalog from "./Catalog";
import ProductDetails from "./ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      // La asiganamos a la variable de estado que queramos con set....(response)
      setProducts(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return (
    <div>
      <h1>La tienda de camisetas</h1>
      <Routes>
        <Route
          path="/"
          element={<Catalog products={products} />}
        ></Route>
         <Route path="/product-detail/:productId" element={<ProductDetails products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
