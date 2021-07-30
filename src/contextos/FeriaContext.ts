import React from "react";

const FeriaContext = React.createContext({
  handlerOnAdd: (objecto: any) => {},
  handlerOnDelete: (id: any) => {},
  handlerOnUpdate: (producto: any) => {},
  handlerOnGetProduct: (id:any)=>({}),
  productos: [{ id: 0, name: "", price: 0 }],
});

export default FeriaContext;
