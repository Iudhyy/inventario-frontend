import {FiUser,FiTruck,FiBriefcase,FiLayers} from "react-icons/fi";
export default function Menu(){
    return(
        <div className="menu">
            <p> Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>
            <a href="/listaempresas"><FiTruck/>Empresas</a>
            <a href=""><FiBriefcase/>Patrimonio</a>
            <a href=""><FiLayers/>Setor</a>


            
        </div>
    )
}