import React from "react";
import { Link } from "react-router-dom";

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
      <div className="col-2">
        <Link to= {`remove/${id}`} >Remove</Link>
      </div>
      <div className="col-2">
        <Link to= {`update/${id}`} >Update</Link>
      </div>
    </div>
  )
};

export default Producto;
