import React from "react";

interface Props {
  id: number;
  name: string;
  price: number;
}

const Producto = ({ id, name, price }: Props) => {
  return (
    <div key={id} className="row border border-dark">
      <div className="col-2">{id}</div>
      <div className="col-2">{name}</div>
      <div className="col-2">{price}</div>
    </div>
  );
};

export default Producto;
