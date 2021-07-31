import React, { useContext, useState } from "react";
import Formulario from "../../components/formulario/Formulario";
import Producto from "../../components/producto/Producto";
import FeriaContext from "../../contextos/FeriaContext";



const MiFeria = () => {

  const {productos} = useContext(FeriaContext)

  return (
    <div className="container">
      {
        <div className="row m-5">
          <div className="col-8">
            {productos.map((producto) => (
              <Producto
                key ={producto.id}
                id={producto.id}
                name={producto.name}
                price={producto.price}
              />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default MiFeria;
