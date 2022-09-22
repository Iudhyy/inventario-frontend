import {FiUser,FiTruck,FiBriefcase,FiLayers,FiAnchor} from "react-icons/fi";
export default function Menu(){
    return(
        <div className="menu">
            <p> Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>

            <a href="/listaempresas"><FiTruck/>Empresas</a>

            <a href="/listapatrimonio"><FiBriefcase/>Patrimonio</a>

            <a href="/listasetor"><FiLayers/>Setor</a>

            <a href="/listalotacao"><FiAnchor/>Lotação</a>




            
        </div>
    )
}