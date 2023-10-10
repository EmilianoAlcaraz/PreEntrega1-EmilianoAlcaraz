/* eslint-disable react/prop-types */
import "./styles.css";
import { Button } from '@mui/material';



const ItemListContainer = ({router, handleConsole}) => {

  return (
    <div className="container">
      {router.map((ruta) => (
        <p key={ruta}>{ruta}</p>
      ))}

    </div>
  );
};

export default ItemListContainer;
