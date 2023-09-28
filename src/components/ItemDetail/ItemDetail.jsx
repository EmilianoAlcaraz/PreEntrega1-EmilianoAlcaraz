
import "../ItemDetail.css"
import { Link } from "react-router-dom"

const ItemCard = ({producto}) => {
    
    return(
        <div className="card">
            <img src={producto.img} alt={producto.id} className="imgProduct"/>
            <h2>{producto.id}</h2>
            <h4>${producto.precio}</h4>
            <Link to={`/product/${producto.id}`}>Ver detalle</Link>
        </div>
    )
}

export default ItemCard;