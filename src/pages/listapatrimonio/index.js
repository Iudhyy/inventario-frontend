import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";


export default function ListaPatrimonio(){
  const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    useEffect(()=>{
                mostrardados();
    },[])

    function editar(id){
        navigate(`/editarpatrimonio/${id}`)
         
    }
    
    function excluir(id) {
        confirmAlert({
          title: 'Atenção',
          message: 'Desejar realmente excluir cadastro da empresa?',
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
                localStorage.setItem('cad-patrimonio',JSON.stringify(dadosnovos));
                setRow(dadosnovos.length);
              }
            }
          ]
        });
      };


    function mostrardados(){
        let lista =JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
        setDados(lista);
        setRow(lista.length);
    }

 return(
<div className="dashboard-container">
    <Menu />

    <div className="principal">
    <Head title="Lista de Patrimonios" />
      <div className="button_new">
       <a href="/cadastropatrimonio">
       <FiFilePlus
          size={24}
          color="green"
          cursor="pointer"
        />
       </a>
      </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Responsavel</th>
                    <th>Contato</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    dados.map((pat)=>{
                        return(
                            <tr key={pat.toString()}>
                                <td>{pat.id}</td>
                                <td>{pat.nome}</td>
                                <td>{pat.responsavel}</td>
                                <td>{pat.contato}</td>
                                <td>
                                  
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(pat.id)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(pat.id)}
                                    />
                                </td>

                            </tr>
                        )
                    })
                }
                <tr>
                  <td colSpan={3} style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                  <td colSpan={2}> {row} </td>
                </tr>

            </table>
    </div>
    
</div>

 )   
            }