
const Item = ({ id, nombre, precio, descripcion, imgUrl }) => {
    return(
        <div>
        <img style={{width:"200px", height:"120px"}} src={imgUrl}/>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <button>Añadir al Carrito</button>
        </div>
    )
} 

export default Item;

