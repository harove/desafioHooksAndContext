import React, { useEffect, useState } from "react";
import "./App.css";
import MiFeria from "./containers/miFeria/MiFeria";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import About from "./containers/about/About";
import Home from "./containers/home/Home";
import NotFound from "./containers/notFound/NotFound";
import FeriaContext from "./contextos/FeriaContext";
import FeriaContextManager from "./contextos/FeriaContextManager";
import Navbar from "./containers/navbar/Navbar";
import Comentarios from "./containers/comentarios/Comentarios";
import LoginContextManager from "./contextos/LoginContextManager";
import Login from "./containers/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PrivateHome from "./containers/privateHome/PrivateHome";
import Create from "./containers/create/Create";
import Remove from "./containers/remove/Remove";

function App() {
  return (
    <div className="App container">
      <LoginContextManager>
        <FeriaContextManager>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact component={About} />

              {/* <Route path="/miFeria" exact component={MiFeria} /> */}
              
              <Route path="/privateMiFeria" exact>
                <PrivateRoute path="/privateMiFeria" exact component={MiFeria} />
              </Route>
              <Route path="/create" exact>
                <PrivateRoute path="/create" exact component={Create} />
              </Route>
              <Route path="/remove/:id" exact>
                <PrivateRoute path="/remove/:id" exact component={Remove} />
              </Route>
              <Route path="/comentarios/:id" exact>
                <Comentarios />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/privateHome" exact>
                <PrivateRoute path="/privateHome" exact component={PrivateHome} />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </FeriaContextManager>
      </LoginContextManager>
    </div>
  );
}

export default App;
