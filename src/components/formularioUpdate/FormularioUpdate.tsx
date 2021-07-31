import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import FeriaContext from "../../contextos/FeriaContext";


interface Props {
  id:number,
  name:string,
  price:number
}


const FormularioUpdate = ({id,name:initialName,price:initialPrice}:Props) => {
  const history = useHistory()
  const [name, setName] = useState(initialName);
  const [price, setPrice] = useState<any>(initialPrice);
  const {handlerOnUpdate} = useContext(FeriaContext)

  const handlerOnSubmit = (e: any) => {
    e.preventDefault();
    handlerOnUpdate({id,name,price})
    history.push('/list')
  };

  return (
    <form onSubmit={(e) => handlerOnSubmit(e)}>
      <label htmlFor="name">Nombre</label>
      <input
        className="form-control"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="price">Precio</label>
      <input
        id="price"
        className="form-control"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default FormularioUpdate;
