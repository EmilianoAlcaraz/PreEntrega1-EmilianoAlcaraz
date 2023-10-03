import "./ItemCard.css"
import { Link } from "react-router-dom"

const ItemCard = ({producto}) => {
    
    return(
        <div className="card">
            <img src={producto.img} alt={producto.id} className="imgProduct"/>
            <h2>{producto.id}</h2>
            <h4>${producto.price}</h4>
            <Link to={`/item/${producto.id}`}>Ver detalle</Link>
        </div>
    )
}

export default ItemCard