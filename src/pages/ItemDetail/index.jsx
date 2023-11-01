import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";
import { CartCtx } from "../../context/CartContext";
import { db } from "../../db/db";
import { doc, getDoc } from "firebase/firestore";


const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartCtx)


  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {

    const productRef = doc(db, "productos", "AskSrlzxtRjXfim6tjdB") 

    getDoc(productRef).then((response)=>{
    if(response.exists()){
      const product = { id: response.id, ... response.data() }
      console.log(product)
      }else{
        console.log("el producto no existe")

     }
    })

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
          <img src={product.image} />
          <button onClick={()=> addToCart(product.id)}>Añadir al carrito</button>
          <h3>
            ir a <Link to={"/"}>Volver al Inicio</Link>
          </h3>
        </>
      )}
    </Layout>
  );
};

export default ItemDetail;
