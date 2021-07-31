import React from "react";

const FeriaContext = React.createContext({
  handlerOnAdd: (objecto: any) => {},
  handlerOnDelete: (id: any) => {},
  productos: [{ id: 0, name: "", price: 0 }],
  getProductById:(id: any) => <any>({}),
  handlerOnUpdate: (product: any) => {}
});

export default FeriaContext;
