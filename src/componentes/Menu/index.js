import {FiUser,FiTruck} from "react-icons/fi";
export default function Menu(){
    return(
        <div className="menu">
            <p> Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>
            <a href="/listaempresas"><FiTruck/>Empresas</a>
        </div>
    )
}