import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";

export default function Routes(){
    return(
<BrowserRouter>
        <Switch>
            <Route path={"/"} exact component={Logon} />
            <Route path={"/cadastrousuario"} component={Cadastrousuario} />
            <Route path={"/dashboard"} component={Dashboard} />
    </Switch>
        </BrowserRouter>
    )
}