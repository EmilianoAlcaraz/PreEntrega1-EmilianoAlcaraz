import { productos} from "./productos";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import CardCustom from "./components/Card";
import { useEffect, useState } from "react";


function App() {

  const [productos, setProductos] = useState([])

  const getData = () =>{
      return new Promise((resolve, reject) =>{
          resolve(data)
      })
  }
  
  useEffect(()=>{
      getData()
      .then((res) => {
          setProductos(res)
      })
  }, [])

  return(
    <div className="tarjeta">
        <img src={producto.img} alt={producto.id} className="imagendeproducto"/>
        <h2>{producto.id}</h2>
        <h4>${producto.price}</h4>
        <Link to={`/product/${producto.id}`}>Ver detalle</Link>
    </div>
      );
   };
       <CardCustom/>
       <CardCustom/>
       <CardCustom/>
       <CardCustom/>
       <CardCustom/>
       <CardCustom/>
       <CardCustom/>
       <CardCustom/>
    </div>

export default App;
