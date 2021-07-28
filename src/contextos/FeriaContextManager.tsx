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

  return (
    <div>
      <FeriaContext.Provider value={{ handlerOnAdd, productos }}>
        {children}
      </FeriaContext.Provider>
    </div>
  );
};

export default FeriaContextManager;
