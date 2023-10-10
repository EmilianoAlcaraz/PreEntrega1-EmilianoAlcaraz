import { useState } from "react";


const Contador = () => {
    // LOGICA
    const [numero, setNumero] = useState(1);
  
    const handCount = () => setNumero(numero + 1);
    //LOGICA

  return (
    //HTML
    <div>
      {numero}
      <hr />
      <button onClick={handCount}>Sumar</button>
    </div>
    //HTML
  );
};

export default Contador;
