import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Comentarios = () => {
  const { id } = useParams<any>();
  const history = useHistory()
  return (
    <>
      <div>{`Comentario ${id}`}</div>
      <button onClick={e=>history.push("/")}>go home</button>
    </>
  );
};

export default Comentarios;
