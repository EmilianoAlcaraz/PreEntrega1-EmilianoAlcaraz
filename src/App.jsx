import { productos} from "./products";
import './App.css';
import Navbar from "./Navbarcomponents/Navbar/Navbar";
import CardCustom from "./components/Card";
import { useEffect, useState } from "react";
import Itemlist from "./components/ItemList/ItemList";
import item from "./components/Item/Item";


function App() {
  const [isoLoading, setIsLoading] = useState (true);
  const [productos, setProductos] = useState([]);

  const getData = () =>{
      return await new Promise((resolve) => {
        setTimeout(()=>{
          resolve(productos);
          }, 2000)}
      });
  };


    const requestJsonPlaceHolder = () => fetch('https://fakestoreapi.com/products')

  
  useEffect(()=>{
    requestJsonPlaceHolder()
    .then(res => res.json())
    .then(res => {
      setProducts(res);
      setIsLoading(false)
    })
     .catch(err => console.log(err))


  }, []);

  return(
   <div>
  <Navbar/>
  <Itemlist>
{isoLoading ? (
    <div>Cargando...</div>
):(
products.map((producto) => (
    <Item
    id={producto.id}
    nombre={producto.nombre}
    descripcion={producto.descripcion}
    precio={producto.precio}
    imgUrl={producto.image}
    ></Item>
 ))
)}
  </Itemlist>
 </div>
);


 export default App;
    

    
 
      
     




