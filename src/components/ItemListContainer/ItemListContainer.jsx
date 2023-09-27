 import "./styles.css";


const ItemCardContaner = ({productos}) =>{

    return(
        <div className="contanerCard">
            {productos.map((producto) =>{
                return(
                    <ItemCard key = {producto.id} producto = {producto}/>
                )
            })}
        </div>
    )
}

export default ItemCardContaner