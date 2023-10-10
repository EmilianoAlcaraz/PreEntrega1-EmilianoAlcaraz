import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";
import React, { useContext, useEffect, useState } from "react";
import { CartCtx } from "../../context/CartContext";
import { Ring } from "@uiball/loaders";

const Child = React.memo(({ mensaje }) => {
  console.log('Renderización de Child');
  return <div>{mensaje}</div>;
});

const ChildNoMemo = ({ mensaje }) => {
  console.log('Renderización de Child NO MEMO');
  return <div>{mensaje}</div>;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { listProducts, setListProducts } = useContext(CartCtx);
  const [es, setEs] = useState(true)
  const [message, setMessage] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setListProducts(productos);
      setIsLoading(false);
    }, 5000);
  }, []);

  const config = isLoading ? {
    className: 'desactivate'
  } : {}

  

  return (
    <Layout>

      
      <Child mensaje={message} />
      <ChildNoMemo mensaje={message} />

<button onClick={()=> setMessage(message + 1)} >Sumar</button>







      <ItemList>
        {isLoading && <Ring />}
        {!isLoading && listProducts.map((prod) => (
          <Item
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
          />
        ))}
      </ItemList>
    </Layout>
  );
};

export default Home;
