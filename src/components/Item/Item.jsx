import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, descripcion, image }) => {

  const handleClick = (event) => {
    //parametro event captura el evento sintetico
    //Detiene el comportamiento por default
    event.preventDefault()
    // Detiene la propagacion de los eventos por defaults de sus padres
    event.stopPropagation()

    console.log(id, nombre, precio , descripcion, image)
  }

  return (
    <div>
      <img style={{width:"200px", height:"120px"}} src={image} />
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <Link className="link" to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
