import React, { useState } from "react";
import Formulario from "../../components/formulario/Formulario";
import Producto from "../../components/producto/Producto";
import FeriaContext from "../../contextos/FeriaContext";

const products = [
  {
    id: 1,
    name: "Papaya",
    price: 100,
  },
  {
    id: 2,
    name: "Pera",
    price: 50,
  },
];

const MiFeria = () => {
  const [productos, setProductos] = useState(products);
  
  const handlerOnAdd = (newProducto: any) => {
    setProductos([...productos, newProducto]);
  };

  return (
    <div className="container">
      {
        <div className="row m-5">
          <div className="col-8">
            {productos.map((producto) => (
              <Producto
                id={producto.id}
                name={producto.name}
                price={producto.price}
              />
            ))}
          </div>
          <div className="col-4">
            <FeriaContext.Provider value={{handlerOnAdd}}>
                <Formulario/>
            </FeriaContext.Provider>
          </div>
        </div>
      }
    </div>
  );
};

export default MiFeria;
