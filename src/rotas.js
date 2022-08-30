import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
        </BrowserRouter>
    )
}