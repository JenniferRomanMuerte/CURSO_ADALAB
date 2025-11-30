import { Link, Route, Routes } from "react-router-dom";
import  ProductDetails  from "./ProductDetails";
const Catalog = ({ products }) => {
  return (
    <ul className="list">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            <Link to={`/product-detail/${product.id}`}>Ver detalles del producto</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Catalog;
