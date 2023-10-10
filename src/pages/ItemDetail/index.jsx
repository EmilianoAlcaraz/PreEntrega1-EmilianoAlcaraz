import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";
import { CartCtx } from "../../context/CartContext";
const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartCtx)


  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchProduct);
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <p>Cargando . .</p>
      ) : (
        <>
          <h1>{product.nombre}</h1> <br />
          <img src={product.urlImage} />
          <button onClick={()=> addToCart(product.id)}>Añadir al carrito</button>
          <h3>
            ir a <Link to={"/"}>Home</Link>
          </h3>
        </>
      )}
    </Layout>
  );
};

export default ItemDetail;
