
const Item = ({id, nombre, precio, descripcion}) => {
    return(
        <div>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <button>Añadir al Carrito</button>
        </div>
    )
} 

export default Item;