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
          <div className="col-6 offset-sm-3">
            {productos.map((producto) => (
              <Producto
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
