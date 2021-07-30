import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeriaContext from "../../contextos/FeriaContext";

const Remove = () => {
  const { id } = useParams<any>();
  const {productos,handlerOnGetProduct,handlerOnDelete} = useContext(FeriaContext);
  const [product, setProduct] = useState<any>()

  useEffect(() => {
    const p = handlerOnGetProduct(id)
    debugger
    setProduct(p)
  }, [productos, id]);

  const handlerOnConfirmRemove = (e:any)=>{
      e.preventDefault()
      handlerOnDelete(product.id)
  }

  return (product ? <div>
        Estas seguro que quieres borrar este producto?
        <div className="card" style={{width: '18rem'}}>
          <div className="card-header">id = {id}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.name}</li>
            <li className="list-group-item">{product.price}</li>
          </ul>
        </div>
        <button className="btn btn-danger" onClick={e=>handlerOnConfirmRemove(e)} >remove</button>
      </div>:null)
  
};

export default Remove;
