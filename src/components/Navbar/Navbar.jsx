
import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  const navegacion = ['INICIO', 'PRODUCTOS', 'CONTACTO']

  const handleConsole = () => console.log('Aca estoy')

  return (
    <div className="navbar">
      {/* Utilizamos el componente Link de react-router-dom */}
      <img className='styles'  alt="logo"  srcset="https://www.eltrecetv.com.ar/resizer/611vbtKp0hdxv375_4DLGhemKeI=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/FMN3275AAVBOFGVECO2E45JTBE.jpg" />
      <h4 className='titulo'>
      BIENVENIDOS A MATEANDO
      </h4>
      <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
      <Link to={'/cart'}>
      <CartWidget/>
      </Link>
    </div>
  );
};

export default Navbar;
