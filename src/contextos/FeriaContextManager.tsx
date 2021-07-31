import React, { useState } from "react";
import FeriaContext from "./FeriaContext";

interface Props {
  children: JSX.Element;
}

const FeriaContextManager = ({ children }: Props) => {
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
  const [productos, setProductos] = useState<any>(products);
  const handlerOnAdd = (newProducto: any) => {
    setProductos([...productos, newProducto]);
  };
  const handlerOnDelete = (id: any) => {
    const remaining = productos.filter((producto:any)=>producto.id!=id)
    setProductos(remaining);
  };
  const getProductById = (id: any) => {
    const p = productos.find((producto:any)=>producto.id==id)
    return p
  };

  return (
    <div>
      <FeriaContext.Provider value={{ handlerOnAdd,handlerOnDelete,getProductById, productos }}>
        {children}
      </FeriaContext.Provider>
    </div>
  );
};

export default FeriaContextManager;
