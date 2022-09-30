import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Cadastroempresas from "./pages/cadastroEmpresa";
import Cadastropatrimonio from "./pages/cadastroPatrimonio";
import CadastroSetor from "./pages/cadastrosetor";
import CadastroLotacao from "./pages/cadastroLotacao";
import Editarusuario from "./pages/editarusuario";
import Editarempresas from "./pages/editarEmpresa";
import EditarPatrimonio from "./pages/editarPatrimonio";
import EditarSetor from "./pages/editarSetor";
import ListaUsuarios from "./pages/listaUsuarios";
import ListaEmpresas from "./pages/listaEmpresa";
import ListaPatrimonio from "./pages/listapatrimonio";
import ListaSetor from "./pages/listaSetor";
import ListaLotaçao from "./pages/listaLotação";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";
import EditarLotacao from "./pages/editarLotaçao";


export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Logon/>} />
            <Route path="/listausuarios" element={<ListaUsuarios/>} />

            <Route path="/listaempresas" element={<ListaEmpresas/>} />

            <Route path="/listapatrimonio" element={<ListaPatrimonio/>} />

            <Route path="/listasetor" element={<ListaSetor/>} />

            <Route path="/listalotacao" element={<ListaLotaçao/>} />

            <Route path="/cadastrousuario" element={<Cadastrousuario/>} />

            <Route path="/cadastroempresa" element={<Cadastroempresas/>} />

            <Route path="/cadastropatrimonio" element={<Cadastropatrimonio/>} />

            <Route path="/cadastrosetor" element={<CadastroSetor/>} />

            <Route path="/cadastrolotacao" element={<CadastroLotacao/>} />

            <Route path="/editarusuario/:id" element={<Editarusuario/>} />

            <Route path="/editarempresa/:id" element={<Editarempresas/>} />

            <Route path="/editarpatrimonio/:id" element={<EditarPatrimonio/>} />

            <Route path="/editarsetor/:id" element={<EditarSetor/>} />

            <Route path="/editarlotacao/:id" element={<EditarLotacao/>} />

            <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
        </BrowserRouter>
    )
}