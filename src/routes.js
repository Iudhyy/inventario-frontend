import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";

export default function Routes(){
    return(
<BrowserRouter>
        <Switch>
<Route path={"/cadastrousuario"} component={Cadastrousuario} />
    </Switch>
        </BrowserRouter>
    )
}