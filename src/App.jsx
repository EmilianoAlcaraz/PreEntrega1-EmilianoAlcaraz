import { productos} from "./productos";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import CardCustom from "./components/Card";
import { useEffect, useState } from "react";
import Itemlist from "./components/ItemList/ItemList";


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
  
  useEffect(()=>{
      getData()
      .then((res) => {
          setProductos(res)
      });
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
    ></Item>
 ))
)}
  </Itemlist>
 </div>
);


 export default App;
    

    
 
      
     




