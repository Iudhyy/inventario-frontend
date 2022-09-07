import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function ListaUsuarios(){
    const [dados,setDados]=useState([]);
    useEffect(()=>{
                mostrardados();
    },[])

    function editar(id){
        alert(`editar ${id}`);
    }
    
    function excluir(id) {
        confirmAlert({
          title: 'Atenção',
          message: 'Desejar realmente excluir cadastro?',
          buttons: [
            {
              label: 'Não',
              onClick: () => alert('Click Não')
            },
            {
              label: 'Sim',
              onClick: () => {
                let dadosnovos = [];
                dadosnovos = dados.filter(item=>item.id!=id);
                setDados(dadosnovos);
                localStorage.setItem('cad-usuarios',JSON.stringify(dadosnovos))
              }
            }
          ]
        });
      };


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
                                <td>
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(usu.id)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(usu.id)}
                                    />
                                </td>

                            </tr>
                        )
                    })
                }
            </table>
    </div>
    
</div>

 )   
            }