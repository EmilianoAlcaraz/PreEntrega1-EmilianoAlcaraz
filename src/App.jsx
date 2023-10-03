import { productos} from "./products";
import './App.css';
import Navbar from "./Navbarcomponents/Navbar/Navbar";
import CardCustom from "./components/Card";
import { useEffect, useState } from "react";
import Itemlist from "./components/ItemList/ItemList";
import item from "./components/Item/Item";
import { useCount } from "./Hooks/useCount";


function App() {
  const [isoLoading, setIsLoading] = useState (true);
  const [productos, setProductos] = useState([]);
  const [count, increment, decrement] = useCount()

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
       <h1>{count}</h1>
      </Itemlist>
         
        </div>
);


 export default App;
    
    
 
      
     




