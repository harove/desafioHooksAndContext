import React, { useState } from "react";
import "./App.css";
import MiFeria from "./containers/miFeria/MiFeria";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/about/About";
import Home from "./containers/home/Home";
import NotFound from "./containers/notFound/NotFound";
import FeriaContext from "./contextos/FeriaContext";

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

function App() {
  const [productos, setProductos] = useState<any>(products);

  const handlerOnAdd = (newProducto: any) => {
    setProductos([...productos, newProducto]);
  };

  return (
    <div className="App">
      <FeriaContext.Provider value={{handlerOnAdd,productos}}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/miFeria" exact>
              <MiFeria />
            </Route>
            <Route path="*" exact>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </FeriaContext.Provider>
    </div>
  );
}

export default App;
