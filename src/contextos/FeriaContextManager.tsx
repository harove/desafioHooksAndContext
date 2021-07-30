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
  const handlerOnDelete = (id: any) =>
    setProductos(productos.filter((p: any) => p.id !== id));
  const handlerOnUpdate = (producto: any) =>
    setProductos([
      ...productos,
      { ...productos.filter((p: any) => p.id === producto.id), producto },
    ]);
  const handlerOnGetProduct = (id: any):any => {
    return productos.find((p: any) => p.id == id);
  };

  return (
    <div>
      <FeriaContext.Provider
        value={{ handlerOnAdd, handlerOnDelete, handlerOnUpdate, handlerOnGetProduct, productos }}
      >
        {children}
      </FeriaContext.Provider>
    </div>
  );
};

export default FeriaContextManager;
