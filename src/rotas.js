import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Cadastroempresas from "./pages/cadastroEmpresa";
import Editarusuario from "./pages/editarusuario";
import ListaUsuarios from "./pages/listaUsuarios";
import ListaEmpresas from "./pages/listaEmpresa";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/listausuarios" element={<ListaUsuarios/>} />
            <Route path="/listaempresas" element={<ListaEmpresas/>} />
            <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
            <Route path="/cadastroempresa" element={<Cadastroempresas/>} />
            <Route path="/editarusuario/:id" element={<Editarusuario/>} />
            <Route path="/editarempresa/:id" element={<Editarusuario/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
        </BrowserRouter>
    )
}