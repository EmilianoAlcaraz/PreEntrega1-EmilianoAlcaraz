import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CartWidget from '../CartWidget/CartWidget'
import './styles.css'

const Navbar = () => {
    return(
        <div className='Navbar'>

              <img className='styles'  alt="logo"  srcset="https://www.eltrecetv.com.ar/resizer/611vbtKp0hdxv375_4DLGhemKeI=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/FMN3275AAVBOFGVECO2E45JTBE.jpg" />

            <h4 className='titulo'>
                 BIENVENIDOS A MATEANDO
            </h4>

         <ul className="navbar-list">

            <li className="navbar-item"><a href="/">Inicio</a></li>
            <li className="navbar-item"><a href="/Productos">Productos</a></li>
            <li className="navbar-item"><a href="/contacto">Contacto</a></li>


            <CartWidget/>
           
         
      </ul>
                  
               
     </div>
    )
}
export default Navbar