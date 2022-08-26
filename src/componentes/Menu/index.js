import {FiUser,FiTruck} from "react-icons/fi";
export default function Menu(){
    return(
        <div className="menu">
            <p> Menu</p>
            <a href=""><FiUser/>Usuários</a>
            <a href=""><FiTruck/>Empresas</a>
        </div>
    )
}