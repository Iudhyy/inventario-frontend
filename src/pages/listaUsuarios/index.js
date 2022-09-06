import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";

export default function ListaUsuarios(){
    const [dados,setDados]=useState([]);
    useEffect(()=>{
                mostrardados();
    },[])

    function mostrardados(){
        let lista =JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
        setDados(lista);
    }

 return(
<div className="dashboard-container">
    <Menu />

    <div className="principal">
    <Head title="Lista de Usuarios" />
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    dados.map((usu)=>{
                        return(
                            <tr key={usu.toString()}>
                                <td>{usu.id}</td>
                                <td>{usu.nome}</td>
                                <td>{usu.email}</td>
                                <td></td>
                                <td></td>

                            </tr>
                        )
                    })
                }
            </table>
    </div>
    
</div>

 )   
}