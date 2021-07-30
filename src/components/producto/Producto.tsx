import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FeriaContext from "../../contextos/FeriaContext";

interface Props {
  id: number;
  name: string;
  price: number;
}


const Producto = ({ id, name, price }: Props) => {
  const {handlerOnDelete} = useContext(FeriaContext)

  const iHandlerOnDelete = (e:any,id:any)=>{
    e.preventDefault(e)
    handlerOnDelete(id)
  }

  return (
    <div key={id} className="row border border-dark">
      <div className="col-3">{id}</div>
      <div className="col-3">{name}</div>
      <div className="col-3">{price}</div>
      <div className="col-3">   
        <Link to={`/remove/${id}`}>delete</Link>
      </div>
    </div>
  );
};

export default Producto;
