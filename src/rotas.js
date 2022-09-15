import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Editarusuario from "./pages/editarusuario";
import ListaUsuarios from "./pages/listaUsuarios";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/listausuarios" element={<ListaUsuarios/>} />
            <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
            <Route path="/editarusuario/:id" element={<Editarusuario/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
        </BrowserRouter>
    )
}