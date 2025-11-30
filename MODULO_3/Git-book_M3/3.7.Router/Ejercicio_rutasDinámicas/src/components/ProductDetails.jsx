import { useParams, Link } from "react-router-dom";

const ProductDetails = ({products}) => {

  const { productId } = useParams();

  const product = products.find(item => item.id === productId);

   if (!product) {
    return <p>Producto no encontrado</p>;
  }
  return (
     <div>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>

      <Link to="/">Volver al listado</Link>
    </div>
  );
};

export default ProductDetails;