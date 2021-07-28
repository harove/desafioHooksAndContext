import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import LoginContext from "../../contextos/LoginContext";

interface Props {
  component:React.ComponentType<any>;
  path:string
  exact:boolean
}

const PrivateRoute = ({component: Component, ...Rest}: Props) => {
  const { isLogin } = useContext(LoginContext);
  return isLogin ? <Route path={Rest.path} exact={Rest.exact} render={routeProps=><Component {...routeProps}/>}  /> : <Redirect to="/" />;
};

export default PrivateRoute;
